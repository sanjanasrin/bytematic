import React from "react";
import AppHeader from "../BasicFolder/Header";
import Banner from "../BasicFolder/Banner";
import Footer from "../BasicFolder/Footer";
import ServicesGrid from "./ServicesGrid";
import apple from "../Assets/apple.png";
import dell from "../Assets/dell.jpg";
import lenovo from "../Assets/lenovo.png";
import hp from "../Assets/hp.jpg";
import cisco from "../Assets/cisco.jpg";
import seagate from "../Assets/seagate.png";
import microsoft from "../Assets/microsoft.jpg";
import asus from "../Assets/asus.jpg";
import apc from "../Assets/apc.png";
import logitech from "../Assets/logitech.png";
import crucial from "../Assets/crucial.jpg";
import gigabyte from "../Assets/gigabyte.png";
import servicesbanner from "../Assets/solutionbanner.jpeg";

import "./Services.css"; // Import the CSS file

const Services = () => {
  return (
    <div className="home-container">
      <AppHeader className="headers" />
      <div>
        <Banner
          title="Comprehensive Repairs for All Laptops and Desktops"
          subTitle="Ensuring Optimal Performance with Expert Care"
          Logo={servicesbanner}
        />
      </div>
      <div className="services-grid-container" style={{ marginTop: "30px" }}>
        <ServicesGrid
          imagePath={apple}
          textItems={["Laptop", "Desktops", "Phones", "Accessories"]}
        />
        <ServicesGrid
          imagePath={dell}
          textItems={["Laptop", "Desktops", "Servers", "Accessories"]}
        />
        <ServicesGrid
          imagePath={lenovo}
          textItems={["Laptop", "Desktops", "Servers", "Accessories"]}
        />
      </div>
      <div className="services-grid-container" style={{ marginTop: "30px" }}>
        <ServicesGrid
          imagePath={hp}
          textItems={[
            "Laptop",
            "Desktops",
            "Servers",
            "Accessories",
            "Printers",
          ]}
        />
        <ServicesGrid
          imagePath={cisco}
          textItems={["Servers", "Switchers", "Active Pointers"]}
        />
        <ServicesGrid
          imagePath={seagate}
          textItems={["Complete range of memory products"]}
        />
      </div>
      <div className="services-grid-container" style={{ marginTop: "30px" }}>
        <ServicesGrid
          imagePath={microsoft}
          textItems={["Office 365", "Windows", "MS Office", "Azure"]}
        />
        <ServicesGrid
          imagePath={apc}
          textItems={["Inverters and UPS solutions"]}
        />
        <ServicesGrid imagePath={asus} textItems={["Laptop", "Accessories"]} />
      </div>
      <div className="services-grid-container" style={{ marginTop: "30px" }}>
        <ServicesGrid
          imagePath={logitech}
          textItems={["Complete range of IT accessories"]}
        />
        <ServicesGrid
          imagePath={crucial}
          textItems={["Complete range of memory products"]}
        />
        <ServicesGrid
          imagePath={gigabyte}
          textItems={["Motherboards", "SSD"]}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
