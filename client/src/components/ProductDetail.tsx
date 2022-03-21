import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("inside useeffect");
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={5}>
          <Box
            sx={{
              height: 400,
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          ></Box>
        </Grid>
        <Grid item xs={7}>
          <Box
            sx={{
              height: 400,
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          ></Box>
        </Grid>
        <Grid item xs={12}>
          <Box></Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
