import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1 className="loading-page">loading...</h1>
      ) : (
        <div className="container">
          <img
            className="movie_detail_bg"
            src={detail.background_image_original}
          ></img>
          <img
            className="movie_detail_img"
            src={detail.large_cover_image}
          ></img>
          <p className="movie_detail_title">{detail.title}</p>
          <p className="movie_detail_intro">{detail.description_intro}</p>
          <p>
            <span>{detail.year} / </span>
            <span>{detail.runtime}min</span>
          </p>
          <ul className="movie_detail_genres">
            {detail.genres && detail.genres.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
