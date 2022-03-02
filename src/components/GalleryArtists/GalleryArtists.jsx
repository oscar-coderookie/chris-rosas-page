import React from "react";
import "./GalleryArtists.scss";
import ImageGallery from "react-image-gallery";

const GalleryArtists = ({ images }) => {


  return (
    <ImageGallery
      items={images}
      disableThumbnailScroll={true}
      showThumbnails={false}
    />
  );
};

export default GalleryArtists;
