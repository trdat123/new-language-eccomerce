import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const MovieTableRow = (props: any) => {
  const { _id, name, year, rating } = props.obj;

  const deleteMovie = () => {
    axios
      .delete(`http://localhost:${import.meta.env.VITE_BACKEND_PORT}/movies/delete_movie/` + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("movie successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <TableRow>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="center">{year}</TableCell>
      <TableCell align="center">{rating}</TableCell>
      <TableCell align="center">
        <Button variant="outlined">
          <Link to={"/edit/" + _id} style={{ textDecoration: "none" }}>
            Edit
          </Link>
        </Button>
        <Button onClick={deleteMovie} variant="outlined">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
export default MovieTableRow;
