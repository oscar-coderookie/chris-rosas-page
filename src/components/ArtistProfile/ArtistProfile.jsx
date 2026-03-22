import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import "./ArtistProfile.scss";
import SocialBar from "../SocialBar/SocialBar";

const ArtistProfile = () => {

  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {

    const getArtist = async () => {

      try {

        const docRef = doc(db, "artistas", artistId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArtist(docSnap.data());
        } else {
          console.log("El artista no existe");
        }

      } catch (error) {
        console.error("Error cargando artista:", error);
      }

    };

    getArtist();

  }, [artistId]);

  if (!artist) return <div className="artist-profile__loading">Cargando...</div>;

  return (

    <div
      className="artist-profile"
    >
      <div className="artist-profile__header">
        <h1 className="artist-profile__name">
          {artist.nombre}
        </h1>
      </div>
      <div className="artist-profile__overlay"
        style={{ backgroundImage: `url(${artist.background})` }}>

        <div className="artist-profile__bio">
          <h3 style={{ marginTop: 10, marginBottom: 10 }}>BIOGRAFÍA:</h3>
          {artist.bio && artist.bio.map((paragraph, index) => (
            <p key={index} className="artist-profile__paragraph">
              {paragraph}
            </p>
          ))}

        </div>

      </div>
      <SocialBar
        ytFollowers={artist.social.youtube.followers}
        ytLink={artist.social.youtube.url}
        igLink={artist.social.instagram.url}
        igFollowers={artist.social.instagram.followers}
        ttFollowers={artist.social.tiktok.followers}
        ttLink={artist.social.tiktok.url} />
      <section className="artist-video-section">
        <div className="overlay"></div>
        <div className="video-container">
          <div className="video-wrapper">
            <iframe 
            width="560" 
            height="315" 
             src={`https://www.youtube.com/embed/${artist.videoId}`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    </div>

  );

};

export default ArtistProfile;