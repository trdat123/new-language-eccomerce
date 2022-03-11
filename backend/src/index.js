const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors({ origin: "http://localhost:3000" }));

const data = [
  { id: 101, name: "Fight Club", year: 1999, rating: 8.1 },
  { id: 102, name: "Inception", year: 2010, rating: 8.7 },
  { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
  { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 },
];

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(port, () => console.log(`App listening on port: ${port}`));
