import React, { useState } from "react";
import "./Dictionary.css";
import SearchResult from "./SearchResult.js";
import Photos from "./Photos.js";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function getKeyword(response) {
    setResults(response.data[0]);
  }

  function getPhotos(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiLink = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiLink).then(getKeyword);

    let pexelsKey = "563492ad6f91700001000001e978109eaa1a4ad086372ccb04d2ae83";
    let pexelsLink = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsKey}` };
    axios.get(pexelsLink, { headers: headers }).then(getPhotos);
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={changeKeyword}
            placeholder="🔍 Search for a word..."
          />
        </form>
      </section>
      <SearchResult data={results} />
      <Photos data={photos} />
    </div>
  );
}
