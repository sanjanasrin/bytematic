import React from "react";
import { Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Categories1 from "../Assets/Categories1.svg";
import Categories2 from "../Assets/Catergories2.svg";
import Categories3 from "../Assets/Categories3.svg";

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    arrows: false,
    focusOnSelect: true,
    rows: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          color: "#8FBAE3",
          fontSize: 48,
          fontFamily: "Jost, sans-serif",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Categories
      </Typography>
      <Box
        sx={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "50px",
          marginTop: "30px",
        }}
      >
        <Slider {...settings}>
          <Link to="/itsolutions" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                width: "400px",
                height: "360px",
                position: "relative",
                margin: "0 15px",
                "& img": {
                  width: "90%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <img src={Categories1} alt="IT Solutions" />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "90%",
                  backgroundColor: "black",
                  color: "white",
                  opacity: 0.7,
                  fontSize: "24px",
                  padding: "10px 0",
                  textAlign: "center",
                }}
              >
                IT Solutions
              </Box>
            </Box>
          </Link>
          <Link to="/aboutus" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                width: "400px",
                height: "360px",
                position: "relative",
                margin: "0 15px",
                "& img": {
                  width: "90%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <img src={Categories2} alt="About Us" />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "90%",
                  backgroundColor: "black",
                  color: "white",
                  opacity: 0.7,
                  fontSize: "24px",
                  padding: "10px 0",
                  textAlign: "center",
                }}
              >
                About Us
              </Box>
            </Box>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                width: "400px",
                height: "360px",
                position: "relative",
                margin: "0 15px",
                "& img": {
                  width: "90%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <img src={Categories3} alt="Services" />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "90%",
                  backgroundColor: "black",
                  color: "white",
                  opacity: 0.7,
                  fontSize: "24px",
                  padding: "10px 0",
                  textAlign: "center",
                }}
              >
                Services
              </Box>
            </Box>
          </Link>
        </Slider>
      </Box>
    </div>
  );
};

export default Categories;
