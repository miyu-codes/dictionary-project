import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./SearchResult.css";

export default function SearchResult(props) {
  if (props.data) {
    return (
      <div>
        <section className="word">
          <h2>
            {" "}
            <strong>{props.data.word}</strong>
          </h2>
          {props.data.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic data={phonetic} />
              </div>
            );
          })}
        </section>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning data={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
