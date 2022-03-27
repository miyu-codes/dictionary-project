import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="container">
      <h1>Dictionary</h1>
      <main>
        <Dictionary />
      </main>
      <footer>
        <a
          href="https://github.com/miyu-codes/dictionary-project"
          target="_blank"
          rel="noreferrer"
          className="source"
        >
          Coded by Miyu Hayakawa
        </a>
      </footer>
      <br />
    </div>
  );
}
