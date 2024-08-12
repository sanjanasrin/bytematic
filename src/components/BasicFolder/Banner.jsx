// src/components/Banner.js

import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import BannerHome from "../Assets/banner.svg"; // Adjust the path as necessary

import Wave from "react-wavify";

// Define the keyframes for the animation
const slideInFromLeft = `
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const WaveWrapper = styled("div")({
  position: "absolute",
  bottom: -5,
  width: "100%",
  overflow: "hidden",
  height: "auto",
});

const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "-30px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundImage: `url(${BannerHome})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "450px",
  textAlign: "left",
  position: "relative",
  width: "100%",
  maxWidth: "100vw",
  overflow: "hidden",
  boxSizing: "border-box",
  [theme.breakpoints.up("md")]: {
    height: "calc(30vh * 2)",
    padding: theme.spacing(4, 2),
    flexDirection: "row", // Two-column layout for laptop and larger screens
    textAlign: "center",
    marginTop: "0px",
  },
  [theme.breakpoints.down("md")]: {
    height: "calc(30vh * 2)",
    padding: theme.spacing(4, 2),
    flexDirection: "column", // Single-column layout for mobile screens
    textAlign: "center",
    marginTop: "0px",
  },
}));

const BannerText = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  textAlign: "left",
  fontSize: "48px",
  letterSpacing: "0px",
  fontFamily: "Inter, sans-serif",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  maxWidth: "100%", // Ensure it does not exceed container width
  boxSizing: "border-box", // Include padding and borders in total width and height
  animation: "slideInFromLeft 2s ease-out", // Apply the animation
  marginLeft: "30px",

  [theme.breakpoints.down("md")]: {
    fontSize: "28px", // Font size for medium screens
    textAlign: "center",
    marginLeft: "0px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px", // Font size for small screens
    textAlign: "center",
    marginLeft: "0px",
  },
}));

const BannerSubText = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  textAlign: "left",
  fontSize: "24px",
  letterSpacing: "0px",
  fontFamily: "Inter, sans-serif",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  maxWidth: "100%", // Ensure it does not exceed container width
  boxSizing: "border-box", // Include padding and borders in total width and height
  animation: "slideInFromLeft 2s ease-out", // Apply the animation
  marginLeft: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "10px", // Font size for medium screens
    textAlign: "center",
    marginLeft: "0px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px", // Font size for small screens
    textAlign: "center",
    marginLeft: "0px",
  },
}));

const ScrollButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  border: "3px solid #FFFFFF",
  color: "#FFFFFF",
  backgroundColor: "transparent",
  textTransform: "none",
  paddingTop: "10px",
  padding: theme.spacing(1, 4),
  fontSize: "16px",
  borderRadius: "25px",
  alignSelf: "flex-start",
  transition: "background-color 0.3s ease, transform 0.3s ease", // Add transition for background color and transform
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    transform: "scale(1.05)", // Slightly scale up the button on hover
  },
  [theme.breakpoints.down("md")]: {
    border: "2px solid #FFFFFF",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    border: "2px solid #FFFFFF",
    fontSize: "12px",
  },
}));

const ImageColumn = styled("img")({
  maxHeight: "350px",
  width: "80%",
  borderRadius: "25px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adding box shadow for the image
  marginRight: "30px",
});

// Add the keyframes to the global styles
const GlobalStyles = styled("style")`
  ${slideInFromLeft}
`;

const Banner = ({ title, subTitle, Logo }) => {
  const handleScroll = () => {
    window.scrollBy({
      top: 700, // Adjust this value to scroll by more or less
      behavior: "smooth",
    });
  };

  return (
    <>
      <GlobalStyles />
      <BannerContainer>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Grid layout for larger screens */}

          <Grid item xs={12} md={8}>
            <Box>
              <BannerText>{title}</BannerText>
              <BannerSubText>{subTitle}</BannerSubText>
              <ScrollButton onClick={handleScroll}>Get Started</ScrollButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} display={{ xs: "none", md: "block" }}>
            <Box display="flex" justifyContent="right">
              <ImageColumn src={Logo} alt="Logo" />
            </Box>
          </Grid>
        </Grid>
        <WaveWrapper>
          <Wave
            fill="#1d2057"
            paused={false}
            options={{
              height: 100,
              amplitude: 20,
              speed: 0.2,
              points: 3,
            }}
          />
        </WaveWrapper>
      </BannerContainer>
    </>
  );
};

export default Banner;
