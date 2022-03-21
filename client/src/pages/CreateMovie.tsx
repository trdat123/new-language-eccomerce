import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieForm from "../components/MovieForm";
// CreatMovie Component
const CreateMovie = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    year: "",
    rating: "",
  });
  // onSubmit handler
  const onSubmit = (movieObject: any) => {
    axios
      .post("http://localhost:4000/movies/create_movie", movieObject)
      .then((res) => {
        if (res.status === 200) alert("Movie successfully created");
        else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  //return movie form
  return (
    <React.Fragment>
      <MovieForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Create Movie
      </MovieForm>
    </React.Fragment>
  );
};

export default CreateMovie;
