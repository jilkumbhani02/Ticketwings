import React from "react";
import Collection from "./Collection/Collection";
import Collection2 from "./Collection2/Collection2";
import Footer from "./Footer/Footer";
import Footer_content from "./Footer_content/Footer_content";
import Header from "./Header/Header";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Collection />
      <Collection2 />
      <Footer_content />
      <Footer />
    </div>
  );
};

export default Main;
