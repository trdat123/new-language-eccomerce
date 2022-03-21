import React from "react";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";

const Product = () => {
  return (
    <React.Fragment>
      <ProductDetail />
      <Footer />
    </React.Fragment>
  );
};

export default Product;
