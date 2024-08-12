import React from "react";
import Banner from "../BasicFolder/Banner"; // Ensure the correct path to your banner component
import "./Home.css";
import Offerings from "./Offerings";
import Footer from "../BasicFolder/Footer";
import Categories from "./Categories";
import AppHeader from "../BasicFolder/Header";
import sos1 from "../Assets/sos1.jpeg";

const Home = () => {
  return (
    <div className="home-container">
      <AppHeader className="headers" />
      <Banner
        title="Reliable partner for your total IT infrastructure"
        subTitle="Reliable . Fast . Tailored solutions at your door step"
        Logo={sos1}
      />
      <div>
        <Offerings />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
