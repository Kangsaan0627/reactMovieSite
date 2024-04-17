// Detail.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { useLocation } from "react-router-dom";

function Detail() {
const location = useLocation();
const { summary } = location.state;
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.backgroundImage}
        src={movie.background_image}
        alt={movie.title}
      />
      <div className={styles.content}>
        <img
          className={styles.poster}
          src={movie.medium_cover_image}
          alt={movie.title}
        />
        <div className={styles.details}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p className={styles.genres}>{movie.genres.join(", ")}</p>
          <div className={styles.separator}></div>
          <p className={styles.summary}>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
