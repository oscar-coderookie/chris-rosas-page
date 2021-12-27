import React from "react";

const SpotifyPlayer = () => {
  return (
    <div>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWY7IeIP1cdjF?utm_source=generator"
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
