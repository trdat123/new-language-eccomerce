import React from "react";
import Banner from "../components/Banner";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
import ProductCard from "../components/ProductCard";

const bannerPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "https://www.google.com",
};

const Home = () => {
  return (
    <React.Fragment>
      <Banner post={bannerPost} />
      <Container>
        <ProductCard />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
