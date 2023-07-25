import React from "react";
import "./Play.css";

function Note() {
  return (
    <div className="play-hero">
      <h2>Note.</h2>
      <p className="p-h-t">
        Some thoughts, reflections, & notes on design and development, along
        with some latest work in progress.
      </p>
    </div>
  );
}

function NoteC1({ heading, txt, imgUrl }) {
  return (
    <div className="playC1">
      <div>
        <h3>{heading}</h3>
        <p>{txt}</p>
      </div>
      <img src={imgUrl} alt="" />
    </div>
  );
}


export { Note, NoteC1 };
