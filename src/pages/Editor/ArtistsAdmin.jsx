import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import "./ArtistsAdmin.scss";
import { NavLink } from "react-router-dom";

const ArtistsAdmin = () => {

  const [artists, setArtists] = useState([]);
  const history = useHistory();

  useEffect(() => {

    const fetchArtists = async () => {

      try {

        console.log("Cargando artistas...");

        const snapshot = await getDocs(collection(db, "artistas"));

        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        console.log("Artistas:", data);

        setArtists(data);

      } catch (error) {

        console.error("Error:", error);

      }

    };

    fetchArtists();

  }, []);


  return (
    <div className="artists-admin">

      <h1 className="artists-admin__title">Editor de Artistas:</h1>
<p>Pincha sobre el artista que quieres editar:</p>
      <div className="artists-admin__list">

        {artists.map((artist) => (

          <NavLink
            to={`/editor/${artist.id}`}
            key={artist.id}
            className="artists-admin__item"

          >

            <img
              src={artist.avatar}
              alt={artist.nombre}
              className="artists-admin__img"
            />

            <div className="artists-admin__overlay">
              <h2>{artist.nombre}</h2>
            </div>

          </NavLink>

        ))}

      </div>

    </div>
  );
};

export default ArtistsAdmin;