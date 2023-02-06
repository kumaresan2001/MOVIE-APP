import { Movie } from "./Movie.1";
// import { AddMovie } from "./AddMovie";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
export function MovieList() {
  const [movielist, setMovieList] = useState([]);
  const getMovie = () => {
    fetch("https://63d75fcb5dbd723244249fe7.mockapi.io/movie")
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => getMovie(), []);
  const deleteMovie = async (id) => {
    await fetch(`https://63d75fcb5dbd723244249fe7.mockapi.io/movie/${id}`, {
      method: "DELETE",
    });
    getMovie();
  };
  const Navigate = useNavigate();

  return (
    <div>
      {/* <AddMovie movielist={movielist} setMovieList={setMovieList} /> */}
      <div className="movie-list">
        {movielist.map((mv) => (
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            deleteButton={
              <IconButton
                onClick={() => deleteMovie(mv.id)}
                aria-label="delete"
                sx={{ marginLeft: "auto" }}
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                onClick={() => Navigate(`/movielist/edit/${mv.id}`)}
                aria-label="delete"
                sx={{ marginLeft: "auto" }}
                color="secondary"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
