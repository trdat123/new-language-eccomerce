import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieTableRow = (props: any) => {
  const { _id, name, year, rating } = props.obj;

  const deleteMovie = () => {
    axios
      .delete("http://localhost:4000/movies/delete_movie/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("movie successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{year}</td>
      <td>{rating}</td>
      <td>
        <Button variant="outlined">
          <Link to={"/edit/" + _id} style={{ textDecoration: "none" }}>
            Edit
          </Link>
        </Button>
        <Button onClick={deleteMovie} variant="outlined">
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default MovieTableRow;
