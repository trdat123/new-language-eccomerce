// EditMovie Component for update movie data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieForm from "../components/MovieForm";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
// EditMovie Component
const EditMovie = (props: any) => {
  // let params = useParams();
  let { id } = useParams();
  const [formValues, setFormValues] = useState({
    name: "",
    gerne: "",
    price: "",
    year: "",
    rating: "",
    description: "",
    image: "",
    video: "",
  });
  //onSubmit handler
  const onSubmit = (movieObject: any) => {
    axios
      .put(`http://localhost:${import.meta.env.VITE_BACKEND_PORT}/movies/update_movie/${id}`, movieObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Movie successfully updated");
          props.history.push("/movie_list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize movie form
  useEffect(() => {
    axios
      .get(`http://localhost:${import.meta.env.VITE_BACKEND_PORT}/movies/update_movie/${id}`)
      .then((res) => {
        const { name, price, gerne, year, rating, description, image, video } = res.data;
        console.log(res.data);
        setFormValues({
          name,
          price,
          gerne,
          year,
          rating,
          description,
          image,
          video,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  // Return movie form
  return (
    <React.Fragment>
      <Typography variant="h3" component="h2" align="center" sx={{ mt: 4, mb: 1 }}>
        Update Movie : {formValues.name}
      </Typography>
      <MovieForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
        Update Movie
      </MovieForm>
    </React.Fragment>
  );
};

// Export EditMovie Component
export default EditMovie;
