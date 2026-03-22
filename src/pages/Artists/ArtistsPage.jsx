import React, { useEffect, useState } from "react";
import "./ArtistsPage.scss";
import { NavLink } from "react-router-dom";
import { NeonBanner, SearchBar, SpinnerLoader } from "../../components";
import { db } from "../../config/firebase";
import { getDocs, collection, orderBy, query } from "firebase/firestore";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <SpinnerLoader />
    </div>
  );
};

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const artistsCollectionRef = query(
      collection(db, "artistas"),
      orderBy("order", "asc")
    );

    const getArtists = async () => {
      try {
        const data = await getDocs(artistsCollectionRef);

        const artistsData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setArtists(artistsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching artists:", error);
        setLoading(false);
      }
    };

    getArtists();
  }, []);


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredArtists = artists.filter((artist) =>
    (artist.nombre || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <React.Fragment>
      {loading ? <LoadingScreen /> : <div className="artists-page">
        <NeonBanner title="Artistas" />
        <p className="artists-page__subtitle">"Tu conexión directa con la élite urbana. Gestionamos la contratación y logística de los artistas más influyentes para tu próximo evento, tour o campaña global."</p>
        <SearchBar handleSearch={handleSearch} />
        <div className="artists-page__container">

          {filteredArtists.map((artist) => {
            return (
              <NavLink to={`/artists/${artist.id}`} key={artist.id}>
                <div className="artists-page__img-container">
                  <img
                    src={artist.avatar}
                    alt={artist.nombre}
                    className="artists-page__img"
                  />
                  <h2 className="artists-page__img-legend">{artist.nombre}</h2>
                </div>
              </NavLink>
            );
          })}
        </div>
        <p className="artists-page__subtitle">"Si el artista que buscas no está en esta selección, nuestra red global permite gestionar la contratación de cualquier figura de primer nivel."</p>
      </div>}
    </React.Fragment>

  );
};

export default ArtistsPage;
