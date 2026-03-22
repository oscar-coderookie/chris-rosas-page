import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "./ArtistEditor.scss";

const ArtistEditor = () => {
  const { artistId } = useParams();

  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("info");

  const normalizeArtist = (data) => ({
    nombre: data?.nombre || "",
    background: data?.background || "",
    bio: data?.bio?.length ? data.bio : [""],
    videoId: data?.videoId || "",
    gallery: data?.gallery?.length ? data.gallery : [""],
    social: {
      instagram: {
        url: data?.social?.instagram?.url || "",
        followers: data?.social?.instagram?.followers || ""
      },
      youtube: {
        url: data?.social?.youtube?.url || "",
        followers: data?.social?.youtube?.followers || ""
      },
      tiktok: {
        url: data?.social?.tiktok?.url || "",
        followers: data?.social?.tiktok?.followers || ""
      }
    }
  });

  useEffect(() => {
    const fetchArtist = async () => {
      const docRef = doc(db, "artistas", artistId);
      const docSnap = await getDoc(docRef);

      setArtist(docSnap.exists() ? normalizeArtist(docSnap.data()) : normalizeArtist({}));
      setLoading(false);
    };

    fetchArtist();
  }, [artistId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtist(prev => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (platform, field, value) => {
    setArtist(prev => ({
      ...prev,
      social: {
        ...prev.social,
        [platform]: {
          ...prev.social[platform],
          [field]: value
        }
      }
    }));
  };

  const handleArrayChange = (index, value, field) => {
    const updated = [...artist[field]];
    updated[index] = value;
    setArtist(prev => ({ ...prev, [field]: updated }));
  };

  const addItem = (field) => {
    setArtist(prev => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const removeItem = (index, field) => {
    const updated = [...artist[field]];
    updated.splice(index, 1);
    setArtist(prev => ({ ...prev, [field]: updated.length ? updated : [""] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;

    setSaving(true);
    await setDoc(doc(db, "artistas", artistId), artist, { merge: true });
    setSaving(false);
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="artist-editor">

      {/* SIDEBAR */}
      <aside className="artist-editor__sidebar">
        <h3 className="artist-editor__sidebar-title">Editor</h3>

        {[
          { key: "info", label: "Información" },
          { key: "photos", label: "Fotos" },
          { key: "social", label: "Redes" }
        ].map(tab => (
          <button
            key={tab.key}
            type="button"
            className={`artist-editor__sidebar-btn ${activeTab === tab.key ? "artist-editor__sidebar-btn--active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </aside>

      {/* CONTENIDO */}
      <form onSubmit={handleSubmit} className="artist-editor__content">

        {activeTab === "info" && (
          <>
          <div style={{display:'flex', justifyContent:'flex-start'}}>
             <div className="artist-editor__field">
              <label className="artist-editor__label">Nombre del artista</label>
              <input
                name="nombre"
                className="artist-editor__input"
                value={artist.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="artist-editor__field">
              <label className="artist-editor__label">Background (URL)</label>
              <input
                name="background"
                className="artist-editor__input"
                value={artist.background}
                onChange={handleChange}
              />
            </div>
          </div>
           

            <div className="artist-editor__field">
              <label className="artist-editor__label">Video de YouTube</label>
              <input
                name="videoId"
                className="artist-editor__input"
                value={artist.videoId}
                onChange={handleChange}
              />
            </div>
            <div className="artist-editor__field">
              <label className="artist-editor__label">Biografía</label>

              {artist.bio.map((p, i) => (
                <div key={i} className="artist-editor__array-item">

                  <textarea
                    className="artist-editor__textarea"
                    value={p}
                    onChange={(e) => handleArrayChange(i, e.target.value, "bio")}
                    placeholder={`Párrafo ${i + 1}`}
                  />

                  <button
                    type="button"
                    className="artist-editor__btn--delete"
                    onClick={() => removeItem(i, "bio")}
                  >
                    ✕
                  </button>

                </div>
              ))}

              <button
                type="button"
                className="artist-editor__btn"
                onClick={() => addItem("bio")}
              >
                + Añadir párrafo
              </button>
            </div>
          </>
        )}

        {activeTab === "photos" && (
          <>
            {artist.gallery.map((img, i) => (
              <input key={i} value={img} onChange={(e) => handleArrayChange(i, e.target.value, "gallery")} />
            ))}

            <button type="button" onClick={() => addItem("gallery")}>+ Imagen</button>
          </>
        )}

        {activeTab === "social" && (
          <>
            {["instagram", "youtube", "tiktok"].map((p) => (
              <div key={p} className="artist-editor__card">

                <h4 className="artist-editor__card-title">{p}</h4>

                <div className="artist-editor__field">
                  <label className="artist-editor__label">URL</label>
                  <input
                    className="artist-editor__input"
                    value={artist.social[p].url}
                    onChange={(e) => handleSocialChange(p, "url", e.target.value)}
                  />
                </div>

                <div className="artist-editor__field">
                  <label className="artist-editor__label">Seguidores</label>
                  <input
                    className="artist-editor__input"
                    value={artist.social[p].followers}
                    onChange={(e) => handleSocialChange(p, "followers", e.target.value)}
                  />
                </div>

              </div>
            ))}
          </>
        )}

        <button className="artist-editor__btn" type="submit">
          {saving ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default ArtistEditor;