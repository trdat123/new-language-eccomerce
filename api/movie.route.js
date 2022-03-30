let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Moviey Model
let movieSchema = require("../models/Movie");

// CREATE movie
router.post("/create_movie", (req, res, next) => {
  movieSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// READ Movie
router.get("/", (req, res) => {
  movieSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// UPDATE movie
router
  .route("/update_movie/:id")
  // Get Single movie
  .get((req, res) => {
    movieSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })

  // Update Movie Data
  .put((req, res, next) => {
    movieSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          console.log(error);
          return next(error);
        } else {
          res.json(data);
          console.log("Movie updated successfully !");
        }
      }
    );
  });

router
  .route("/show_movie/:id")
  // Get Single movie
  .get((req, res) => {
    movieSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

// Delete Movie
router.delete("/delete_movie/:id", (req, res, next) => {
  movieSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
