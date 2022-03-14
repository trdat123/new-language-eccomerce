import logo from "./logo.svg";
import React from "react";
import Container from "@mui/material/Container";
import ProductCard from "./components/ProductCard";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer"
import ButtonAppBar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <NavigationMenu />
      <Container>
        <ProductCard />
      </Container>

      <Footer />
    </React.Fragment>
  );
}

export default App;
