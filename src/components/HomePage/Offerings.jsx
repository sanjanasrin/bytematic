import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Image1 from "../Assets/1stOfferingCard.svg";
import Image2 from "../Assets/2nfOfferingCard.svg";
import Image3 from "../Assets/3rdOfferingCard.svg";

const Title = styled(Typography)(({ theme }) => ({
  color: "#8FBAE3",
  fontFamily: "Jost, sans-serif",
  fontWeight: "bold",
  fontSize: "48px", // Default font size for larger screens
  textAlign: "center",
  marginBottom: theme.spacing(4),
  textShadow: "10px 20px 20px rgba(143, 186, 227, 0.2)",
  [theme.breakpoints.down("md")]: {
    fontSize: "36px", // Font size for medium screens
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px", // Font size for small screens
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "350px",
  height: "300px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: "23px", // Add padding to accommodate the rectangle
  [theme.breakpoints.down("sm")]: {
    width: "70%",
    height: "auto",
    paddingTop: "28px",
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const Rectangle = styled(Box)(({ color, theme }) => ({
  width: "150px",
  height: "18px",
  backgroundColor: color,
  position: "absolute",
  top: "0px",
  left: "0",
  [theme.breakpoints.down("sm")]: {
    height: "10px",
    top: "6px",
  },
}));

const Offerings = () => {
  return (
    <Box p={5}>
      <Title>Offerings</Title>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={4} container justifyContent="center">
          <ImageContainer>
            <Rectangle color="#346BEB" />
            <Image src={Image1} alt="Offering 1" />
          </ImageContainer>
        </Grid>
        <Grid item xs={12} sm={4} container justifyContent="center">
          <ImageContainer>
            <Rectangle color="#BC46E6" />
            <Image src={Image2} alt="Offering 2" />
          </ImageContainer>
        </Grid>
        <Grid item xs={12} sm={4} container justifyContent="center">
          <ImageContainer>
            <Rectangle color="#2C1DD9" />
            <Image src={Image3} alt="Offering 3" />
          </ImageContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Offerings;
