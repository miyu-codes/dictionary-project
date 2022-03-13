import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    let apiLink = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiLink).then(changeKeyword);
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={changeKeyword} />
      </form>
    </div>
  );
}
