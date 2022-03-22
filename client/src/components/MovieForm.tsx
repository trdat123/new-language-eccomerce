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
    description: Yup.string(),
    image: Yup.string().url(),
    video: Yup.string().url().required("Required"),
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 1,
      }}
    >
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <Typography variant="h6" component="h2">
            Movie name
          </Typography>
          <Field name="name" type="text" placeholder="Enter movie" />
          <ErrorMessage
            name="name"
            className="d-block invalid-feedback"
            component="span"
          />
          <br />
          <Typography variant="h6" component="h2">
            Year
          </Typography>
          <Field name="year" type="text" placeholder="Enter year" />
          <ErrorMessage
            name="year"
            className="d-block invalid-feedback"
            component="span"
          />
          <br />
          <Typography variant="h6" component="h2">
            Rating
          </Typography>
          <Field name="rating" type="number" placeholder="Enter rating" />
          <ErrorMessage
            name="rating"
            className="d-block invalid-feedback"
            component="span"
          />
          <br />
          <Typography variant="h6" component="h2">
            Description
          </Typography>
          <Field
            name="description"
            type="text"
            placeholder="Enter description"
          />
          <ErrorMessage
            name="description"
            className="d-block invalid-feedback"
            component="span"
          />
          <br />
          <Typography variant="h6" component="h2">
            Image
          </Typography>
          <Field name="image" type="text" placeholder="Enter image url" />
          <ErrorMessage
            name="image"
            className="d-block invalid-feedback"
            component="span"
          />
          <br />
          <Typography variant="h6" component="h2">
            Video
          </Typography>
          <Field name="video" type="text" placeholder="Enter video url" />
          <ErrorMessage
            name="video"
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
