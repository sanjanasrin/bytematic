import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

// Styled component for the ServicesGrid container
const GridContainer = styled(Box)(({ theme, isOpen }) => ({
  width: "400px",
  backgroundColor: "#1520a6",
  borderRadius: "10px", // Rounded edges
  overflow: "hidden",
  textAlign: "center",
  margin: "20px", // Margin around the container

  position: "relative",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  transition: "max-height 0.3s ease-out",
  maxHeight: isOpen ? "600px" : "250px", // Adjust maxHeight based on content
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxHeight: isOpen ? "400px" : "200px", // Adjust maxHeight for smaller screens
    margin: "10px", // Reduce margin for smaller screens
  },
}));

// Styled component for the image
const ServiceImage = styled("img")({
  width: "100%",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  display: "block",
  height: "250px",
});

// Styled component for the text container
const TextContainer = styled(Box)(({ theme, isOpen }) => ({
  display: isOpen ? "block" : "none", // Show text when isOpen is true
  color: "white",
  padding: "10px 20px",
  fontSize: "16px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px", // Reduce font size for smaller screens
    padding: "8px 10px", // Adjust padding for smaller screens
  },
}));

const ServicesGrid = ({ imagePath, textItems }) => {
  const [isOpen, setIsOpen] = useState(false); // Start with the text hidden

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <GridContainer isOpen={isOpen} onClick={toggleDropdown}>
      <ServiceImage src={imagePath} alt="Service" />
      <TextContainer isOpen={isOpen}>
        {textItems.map((text, index) => (
          <Typography
            key={index}
            component="a"
            href="#"
            sx={{ display: "block", color: "white", textDecoration: "none" }}
          >
            {text}
          </Typography>
        ))}
      </TextContainer>
    </GridContainer>
  );
};

ServicesGrid.propTypes = {
  imagePath: PropTypes.string.isRequired,
  textItems: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings
};

export default ServicesGrid;
