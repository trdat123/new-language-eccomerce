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
import Typography from "@mui/material/Typography";
import Footer from "../components/Footer";
const ProductDetail = () => {
  const [movies, setMovies] = useState({
    name: "",
    gerne: "",
    price: "",
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
        const { name, price, gerne, year, rating, description, image, video } =
          res.data;
        console.log(res.data);
        setMovies({
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
  }, [id]);

  return (
    <React.Fragment>
      <Container sx={{ marginTop: "8px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <img src={movies.image} width={"400"} height={"500"} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" component="div" gutterBottom>
                {movies.name} ({movies.year})
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "justify", textJustify: "inter-word" }}
              >
                Price: {movies.price} VND
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "justify", textJustify: "inter-word" }}
              >
                Gerne: {movies.gerne}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "justify", textJustify: "inter-word" }}
              >
                Rating: {movies.rating}
              </Typography>
              <Typography variant="body1" component="div">
                Description: {movies.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="h5" component="div">
              Movie trailer
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReactPlayer controls={true} url={movies.video} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetail;
