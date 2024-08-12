import React from "react";
import AppHeader from "../BasicFolder/Header";
import Footer from "../BasicFolder/Footer";
import "./ItSolutions.css";
import ITSolutionsPage from "./ITSolutionsPage";
import Banner from "../BasicFolder/Banner";
import itSol from "../Assets/itsoltuions.jpeg";

const ITSolutions = () => {
  return (
    <div className="home-container">
      <AppHeader className="headers" />
      <div>
        <Banner
          title="Innovative IT Solutions for Seamless Performance"
          subTitle="Expertly Handling All Laptop and Desktop Challenges"
          Logo={itSol}
        />
      </div>
      <div>
        <ITSolutionsPage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ITSolutions;
