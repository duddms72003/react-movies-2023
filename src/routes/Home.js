import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [animationPaused, setAnimationPaused] = useState(false);

  const handleMouseEnter = () => {
    setAnimationPaused(true);
  };

  const handleMouseLeave = () => {
    setAnimationPaused(false);
  };

  const getMovies = async () => {
    const json = await (
      await fetch(
        // `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=download_count`
        `https://yts.mx/api/v2/list_movies.json?limit=12&sort_by=download_count`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    // console.log(json);
  };
  useEffect(() => {
    getMovies();
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
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImage={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
