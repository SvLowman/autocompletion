import React from "react";
import "./FavoriteImage.css";

export default function FavoriteImage({ photoId }) {
  return (
    <div className="favorites__container">
      <img
        className="favorites__thumb"
        src={`https://source.unsplash.com/${photoId}`}
        alt="Favorite"
      />
    </div>
  );
}
