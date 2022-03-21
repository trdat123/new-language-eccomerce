import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player/youtube";

const ProductDetail = () => {
  const [movies, setMovies] = useState({
    name: "",
    year: "",
    rating: "",
    description: "",
    image: "",
    video: "",
  });
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    console.log("inside useeffect");
    axios
      .get(`http://localhost:4000/movies/update_movie/${id}`)
      .then((res) => {
        const { name, year, rating, description, image, video } = res.data;
        console.log(res.data);
        setMovies({ name, year, rating, description, image, video });
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <React.Fragment>
      <h2>detail page</h2>
      <div>Name: {movies.name}</div>
      <div>Year: {movies.year}</div>
      <div>Rating: {movies.rating}</div>
      <div>Description: {movies.description}</div>
      <img src={movies.image} />
      <div>Trailer</div>
      <ReactPlayer controls={true} url={movies.video} />
    </React.Fragment>
  );
};

export default ProductDetail;
