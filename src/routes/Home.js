import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [animationPaused, setAnimationPaused] = useState(false);

  const handleMouseEnter = () => {
    setAnimationPaused(true);
  };

  const handleMouseLeave = () => {
    setAnimationPaused(false);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=13&orderBy=modified&series=24229,1058,2023"
        );
        setCharacters(response.data.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      {loading ? (
        <h1 className="loading-page">loading...</h1>
      ) : (
        <div className="movies">
          <div
            className="movies-wrap"
            style={{
              animationPlayState: animationPaused ? "paused" : "running",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {characters.map((character) => (
              <Movie
                key={character.id}
                id={character.id}
                coverImage={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                title={character.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
