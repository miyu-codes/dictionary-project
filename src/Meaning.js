import React from "react";

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
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
