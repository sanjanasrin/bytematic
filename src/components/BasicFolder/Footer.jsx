import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#050E3C",
        color: "#FFFFFF",
        mt: "30px",
        maxWidth: "100%",
        margin: "0 auto", // Center the Box
        "@media (max-width: 768px)": {
          width: "90%", // Set width to 90% for mobile screens
        },
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        Contact Us
      </Typography>
      <Link
        href="mailto:chiranth@bytematic.in"
        sx={{ color: "#346BEB", marginBottom: "5px" }}
      >
        chiranth@bytematic.in
      </Link>
      <Link href="mailto:sales@bytematic.in" sx={{ color: "#346BEB" }}>
        sales@bytematic.in
      </Link>
    </Box>
  );
};

export default Footer;
