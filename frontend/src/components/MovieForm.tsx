import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@mui/material/Button";
import { FormGroup, FormControl, Typography } from "@mui/material";
import styled from "@emotion/styled/types/base";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const MovieForm = (props: any) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),

    year: Yup.number()
      .positive("Invalid year number")
      .integer("Invalid year number")
      .required("Required"),
    rating: Yup.number()
      .positive("Invalid rating number")
      .integer("Invalid rating number")
      .required("Required"),
  });
  console.log(props);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 10,
      }}
    >
      <Typography variant="h3" component="h2">
        Create movie
      </Typography>
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <Typography variant="h6" component="h2">
            Movie name
          </Typography>
          <Field name="name" type="text" />
          <ErrorMessage
            name="name"
            className="d-block invalid-feedback"
            component="span"
          />
          <br />
          <Typography variant="h6" component="h2">
            Year
          </Typography>
          <Field name="year" type="text" />
          <ErrorMessage
            name="year"
            className="d-block invalid-feedback"
            component="span"
          />
          <br />
          <Typography variant="h6" component="h2">
            Rating
          </Typography>
          <Field name="rating" type="number" />
          <ErrorMessage
            name="rating"
            className="d-block invalid-feedback"
            component="span"
          />
          <br />
          <br />
          <Button variant="contained" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default MovieForm;
