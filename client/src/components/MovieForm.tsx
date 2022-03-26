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
    price: Yup.number()
      .positive("Invalid rating number")
      .integer("Must be integer")
      .moreThan(0, "Please input price higher than 0")
      .lessThan(1000000, "Please input rating lower than 1000000")
      .required("Required"),
    gerne: Yup.string()
      .oneOf(["action", "comedy", "sci-fi", "animated", "thriller"])
      .required("Required"),
    year: Yup.number()
      .integer("Invalid year number")
      .positive("Invalid year number")
      .moreThan(1980, "Please input year after 1980")
      .lessThan(2023, "Please input year before 2023")
      .required("Required"),
    rating: Yup.number()
      .positive("Invalid rating number")
      .moreThan(0, "Please input rating higher than 0")
      .lessThan(10.1, "Please input rating lower than 10")
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
            Price
          </Typography>
          <Field name="price" type="number" placeholder="Enter rating" />
          <ErrorMessage
            name="price"
            className="d-block invalid-feedback"
            component="span"
          />
          <br />
          <Typography variant="h6" component="h2">
            Gerne
          </Typography>
          <Field name="gerne" as="select" placeholder="Choose gerne">
            <option value="">Please choose a gerne</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="animated">Animated</option>
            <option value="thriller">Thriller</option>
          </Field>
          <ErrorMessage
            name="gerne"
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
