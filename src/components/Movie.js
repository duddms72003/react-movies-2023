import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImage, title }) {
  return (
    <div className="movie_main">
      <Link to={`/character/${id}`} className="movie_main_link">
        <img src={coverImage} alt="img"></img>
      </Link>
      <div className="text">
        <h2>
          <Link to={`/character/${id}`}>{title}</Link>
        </h2>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
