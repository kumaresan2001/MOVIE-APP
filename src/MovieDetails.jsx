import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState, useEffect } from "react";

export function MovieDetails() {
  const { id } = useParams();
  // const movie = movielist[id];

  const [movie, setMovie] = useState({});
  const styles = {
    color: movie.rating > 8.5 ? "green" : "crimson",
  };
  useEffect(() => {
    fetch(`https://63d75fcb5dbd723244249fe7.mockapi.io/movie/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);

  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="1643"
        height="653"
        src={movie.trailer}
        title="Varisu - Official Trailer | Thalapathy Vijay | Rashmika | Vamshi Paidipally | Dil Raju | S.Thaman"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>
        <p className="movie-summry">{movie.summary}</p>
        <Button
          variant="containd"
          startIcon={<KeyboardReturnIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
