// import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from "./global";
export function EditMovie() {
  const { id } = useParams();
  // const movie = movielist[id];

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/movie/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);

  return movie ? <EditMovieForm movie={movie} /> : <h1>loading</h1>;
}
function EditMovieForm({ movie }) {
  const formValidationSchema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required().min(4).url(),
    rating: yup.number().required().min(0).max(10),
    summary: yup.string().required().min(20),
    trailer: yup.string().required().min(4).url(),
  });
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: formValidationSchema,
      onSubmit: (newMovie) => {
        console.log("form values", newMovie);
        updataMovie(newMovie);
      },
    });
  const Navigate = useNavigate();
  const updataMovie = async (newMovie) => {
    await fetch(`${API}/movie/${movie._id}`, {
      method: "PUT",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    Navigate("/movielist");
  };
  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        label="Name"
        variant="outlined"
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />
      <TextField
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.poster}
        label="Poster"
        variant="outlined"
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      />

      <TextField
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rating}
        label="Rating"
        variant="outlined"
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : null}
      />

      <TextField
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.summary}
        label="Summary"
        variant="outlined"
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : null}
      />
      <TextField
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.trailer}
        label="Trailer"
        variant="outlined"
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      />

      <Button
        type="submit"
        // setMovieList([...movielist, newMovie]);
        color="success"
        variant="containd"
      >
        save
      </Button>
    </form>
  );
}
