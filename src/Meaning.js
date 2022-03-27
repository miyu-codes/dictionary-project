import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meanings">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li>
                {definition.definition}
                <br />
                <p>
                  <em>{definition.example}</em>
                </p>
                <Synonyms synonyms={definition.synonyms} />
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
