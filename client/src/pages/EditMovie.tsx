// EditMovie Component for update movie data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieForm from "../components/MovieForm";
import { useParams } from "react-router-dom";
// EditMovie Component
const EditMovie = (props: any) => {
  let params = useParams();
  const [formValues, setFormValues] = useState({
    name: "",
    year: "",
    rating: "",
  });
  //onSubmit handler
  const onSubmit = (movieObject: any) => {
    axios
      .put(
        "http://localhost:4000/movies/update_movie/" + params.id,
        movieObject
      )
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
      .get("http://localhost:4000/movies/update_movie/" + params.id)
      .then((res) => {
        const { name, year, rating } = res.data;
        console.log(res.data);
        setFormValues({ name, year, rating });
      })
      .catch((err) => console.log(err));
  }, []);
  // Return movie form
  return (
    <React.Fragment>
      <div>Hello Edit</div>
      <MovieForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Update Movie
      </MovieForm>
    </React.Fragment>
  );
};

// Export EditMovie Component
export default EditMovie;
