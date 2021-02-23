import React from "react";
import "./ImagePreview.css";
import { addFavorites } from "./favorites";

export default function ImagePreview({ src, alt, author, id }) {
  return (
    <div className="imageContainer">
      <button className="button__icon" onClick={() => addFavorites(id)}>
        ❤
      </button>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">
        <b>Fotograf:</b> <br></br> {author}
      </p>
    </div>
  );
}
