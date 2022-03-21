import logo from "./logo.svg";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/CreateMovie";
import EditMovie from "./pages/EditMovie";
import MovieList from "./pages/MovieList";
import NavigationMenu from "./components/NavigationMenu";
import Error from "./pages/Error";
function App() {
  return (
    <React.Fragment>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create_movie" element={<CreateMovie />} />
        <Route path="/movie_list" element={<MovieList />} />
        <Route path="/edit_movie/:id" element={<EditMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
