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
        <Link to={"/edit_movie/" + _id}>Edit</Link>
        <Button onClick={deleteMovie} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default MovieTableRow;
