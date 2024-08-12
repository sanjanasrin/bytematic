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

const LogoImage = styled("img")(({ theme }) => ({
  width: "303px",
  height: "206px",
  marginBottom: "16px",
  maxWidth: "100%", // Ensure it does not exceed container width
  height: "auto", // Maintain aspect ratio
  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100px",
  },
}));

const BannerText = styled(Typography)(({ theme }) => ({
  color: "#96C2E3",
  fontSize: "32px",
  letterSpacing: "0px",
  fontFamily: "Inter, sans-serif",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  maxWidth: "100%", // Ensure it does not exceed container width
  boxSizing: "border-box", // Include padding and borders in total width and height
  [theme.breakpoints.down("md")]: {
    fontSize: "24px", // Font size for medium screens
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px", // Double the size for small screens
  },
}));

const Banner = () => {
  return (
    <BannerContainer>
      <LogoImage src={Logo} alt="Logo" />
      <BannerText>Bridging your needs and solutions</BannerText>
    </BannerContainer>
  );
};

export default Banner;
