import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div className="movie_main">
      <Link to={`/movie/${id}`} className="movie_main_link">
        <img src={coverImage} alt="img"></img>
      </Link>
      <div className="text">
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <img src={coverImage} alt="img"></img>
  //     <h2>
  //       <Link to={`/movie/${id}`}>{title}</Link>
  //     </h2>
  //     <p>{summary.length > 235 ? `${summary.slice(0, 235)}` : summary}</p>
  //     <ul>
  //       {genres.map((g) => (
  //         <li key={g}>{g}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
