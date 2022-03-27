import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <h3>{props.data.partOfSpeech}</h3>
      <ol>
        {props.data.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <li>
                <strong>{definition.definition}</strong>
                <br />
                <p>
                  <em>{definition.example}</em>
                </p>
                <Synonyms synonyms={definition.synonyms} className="synonyms" />
              </li>
              <br />
            </div>
          );
        })}
      </ol>
    </div>
  );
}
