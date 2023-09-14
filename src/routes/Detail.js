import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await axios.get(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
        );
        setCharacter(response.data.data.results[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching character detail:", error);
        setLoading(false);
      }
    };

    fetchCharacterDetail();
  }, [id]);

  console.log(character); // 데이터 확인

  return (
    <div>
      {loading ? (
        <h1 className="loading-page">loading...</h1>
      ) : (
        <div className="container">
          <img
            className="movie_detail_img"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <p className="movie_detail_title">{character.name}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
