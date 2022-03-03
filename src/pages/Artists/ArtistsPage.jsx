import React, { useEffect, useState } from "react";
import "./ArtistsPage.scss";
import { NavLink } from "react-router-dom";
import { NeonBanner, SpinnerLoader } from "../../components";
import { db } from "../../config/firebase";
import { getDocs, collection, orderBy, query } from "firebase/firestore/lite";

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

  useEffect(() => {
    const artistsCollectionRef = query(
      collection(db, "artistas"),
      orderBy("nombre", "desc")
    );
    const getArtists = async () => {
      const data = await getDocs(artistsCollectionRef);
      setArtists(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    getArtists().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <React.Fragment>
    {loading ? <LoadingScreen/> :<div className="artists-page">
      <NeonBanner title="Artistas" />
       <div className="artists-page__container">
        {artists.map((artist) => {
          return (
            <NavLink to={`/artists/${artist.id}`} key={artist.nombre}>
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
    </div>}
    </React.Fragment>
    
  );
};

export default ArtistsPage;
