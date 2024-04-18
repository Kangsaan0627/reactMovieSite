import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const history = useHistory();
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    try {
      const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      const data = await response.json();
      setMovie(data.data.movie);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  const goBack = () => {
    history.goBack(); // 뒤로가기
  };

  if (!movie) {
    return (
      <div className={styles.container}>
        <p className={styles.loading}>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={goBack}>{"🔙"}</button>
      <div>
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
            <p className={styles.summary}>{location.state.summary ? location.state.summary:"No summary" }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
