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
import Container from "@mui/material/Container";
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:${import.meta.env.VITE_BACKEND_PORT}/movies/`)
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
      <Container>
        <TableContainer>
          <Table sx={{ minWidth: 650, width: "90%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="center">Year</TableCell>
                <TableCell align="center">Rating</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{DataTable()}</TableBody>
          </Table>
        </TableContainer>
      </Container>
    </React.Fragment>
  );
};

export default MovieList;
