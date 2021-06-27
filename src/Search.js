import { useState, useEffect } from "react";
import Result from "./Result";

const Search = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");

  useEffect(() => {
    requestUrl();
  }, []);

  async function requestUrl() {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);

    const json = await res.json();

    setShorturl(json.result.full_short_link);
  }

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestUrl();
        }}
      >
        <input
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Shorten a link here..."
        />
        <button type="submit" className="btn btn-info">
          Shorten It!
        </button>
      </form>
      <Result shorturl={shorturl} />
    </div>
  );
};

export default Search;
