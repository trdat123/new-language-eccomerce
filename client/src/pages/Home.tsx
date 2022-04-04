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
  image:
    "https://store-images.s-microsoft.com/image/apps.3479.13704232073593455.58a1acc9-a389-4f55-b89c-cc7f98e3e159.0df7e5f9-9eb4-46a9-aec1-bf89af000eab?mode=scale&q=90&h=720&w=1280",
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
