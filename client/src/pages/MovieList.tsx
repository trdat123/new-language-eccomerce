import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieTableRow from "../components/MovieTableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/movies/")
      .then(({ data }) => {
        setMovies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return movies.map((res, i) => {
      return <MovieTableRow obj={res} key={i} />;
    });
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, width: "90%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{DataTable()}</TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default MovieList;
