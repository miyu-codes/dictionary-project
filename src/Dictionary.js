import React, { useState } from "react";
import "./Dictionary.css";
import SearchResult from "./SearchResult.js";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function getKeyword(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiLink = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiLink).then(getKeyword);
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={changeKeyword}
          placeholder="Search for a word..."
        />
      </form>
      <SearchResult data={results} />
    </div>
  );
}
