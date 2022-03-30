import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieForm from "../components/MovieForm";
import { Typography } from "@mui/material";
// CreatMovie Component
const CreateMovie = () => {
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
  // onSubmit handler
  const onSubmit = (movieObject: any) => {
    axios
      .post(`http://localhost:${import.meta.env.VITE_BACKEND_PORT}/movies/create_movie`, movieObject)
      .then((res) => {
        if (res.status === 200) alert("Movie successfully created");
        else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  //return movie form
  return (
    <React.Fragment>
      <Typography variant="h3" component="h2" align="center" sx={{ mt: 4, mb: 1 }}>
        Create Movie
      </Typography>
      <MovieForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
        Create Movie
      </MovieForm>
    </React.Fragment>
  );
};

export default CreateMovie;
