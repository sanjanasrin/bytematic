// src/components/Banner.js

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import BannerHome from "../Assets/banner.svg"; // Adjust the path as necessary
import Logo from "../Assets/BM.svg";

const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundImage: `url(${BannerHome})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "576px",
  textAlign: "center",
  position: "relative",
  width: "100%",
  maxWidth: "100vw",
  overflow: "hidden",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    height: "calc(30vh * 2)",
    padding: theme.spacing(4, 2),
  },
  [theme.breakpoints.down("sm")]: {
    height: "calc(30vh * 2)",
    padding: theme.spacing(3, 2),
  },
}));

const BannerText = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "64px",
  letterSpacing: "0px",
  fontFamily: "Inter, sans-serif",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  maxWidth: "100%", // Ensure it does not exceed container width
  boxSizing: "border-box", // Include padding and borders in total width and height
  [theme.breakpoints.down("md")]: {
    fontSize: "36px", // Font size for medium screens
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px", // Double the size for small screens
  },
}));

const ITSolutionsBanner = () => {
  return (
    <BannerContainer>
      <BannerText>IT Solutions</BannerText>
    </BannerContainer>
  );
};

export default ITSolutionsBanner;
