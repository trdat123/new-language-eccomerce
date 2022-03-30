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
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import PreviewIcon from "@mui/icons-material/Preview";
import InputBase from "@mui/material/InputBase";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.6),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.8),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const ProductCard = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearhTerm] = useState("");
  const handleClick = () => {};

  useEffect(() => {
    fetch(`http://localhost:${import.meta.env.VITE_BACKEND_PORT}/movies/`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <React.Fragment>
      <Paper elevation={3} sx={{ mb: 3, width: 260 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setSearhTerm(e.target.value.toLowerCase())}
          />
        </Search>
      </Paper>

      <Grid container spacing={3}>
        {movies.map((movie, index) => (
          <Grid item md={3} xs={6} key={index} style={{ paddingBottom: 16 }}>
            <Card sx={{ maxWidth: 260 }}>
              <CardActionArea>
                <CardMedia component="img" height="360" image={movie["image"]} alt="random card" />
                <CardContent>
                  <Typography variant="h6">{movie["name"]}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie["price"]} VND
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ display: "flex", justifyContent: "center" }}>
                <Button size="small" color="primary" variant="contained" onClick={handleClick}>
                  <Link to={`/detail/${movie["_id"]}`} style={{ textDecoration: "none", color: "white" }}>
                    <span>View</span>
                  </Link>
                </Button>
                <Button size="small" color="primary" variant="contained" onClick={handleClick}>
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default ProductCard;
