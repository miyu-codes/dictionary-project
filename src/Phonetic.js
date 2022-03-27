import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetics">
      <a href={props.data.audio} target="_blank" rel="noreferrer">
        🔊
      </a>{" "}
      {props.data.text}
    </div>
  );
}
