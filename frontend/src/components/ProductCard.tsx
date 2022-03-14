import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect, useState } from "react";

const ProductCard = () => {
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
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={3} key={movie.id}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="random card"
              />
              <CardContent>
                <Typography variant="h6">{movie.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.rating}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary" variant="contained">
                <AddShoppingCartIcon />
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCard;
