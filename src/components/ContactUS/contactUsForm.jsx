import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled Box with updated background color and width
const StyledBox = styled(Box)({
  backgroundColor: "#1d2057",
  padding: "20px",
  borderRadius: "8px",
  width: "95%", // Updated to 100% width
  maxWidth: "100%", // Ensure it takes full width
  margin: "20px",
});

// Styled TextField with white background and text color #1d2057
const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "#1d2057", // Text color
    backgroundColor: "white", // Background color
  },
  "& .MuiFormLabel-root": {
    color: "#1d2057", // Label color
  },
  "& .MuiInputBase-root": {
    backgroundColor: "white", // Background color
  },
  marginBottom: "16px",
});

const ContactUsForm = () => {
  return (
    <StyledBox>
      <Typography variant="h6" color="white" gutterBottom>
        Contact Us
      </Typography>
      <StyledTextField label="Your Name" fullWidth variant="outlined" />
      <StyledTextField label="Your Email" fullWidth variant="outlined" />
      <StyledTextField label="Organization" fullWidth variant="outlined" />
      <StyledTextField label="Subject" fullWidth variant="outlined" />
      <StyledTextField
        label="Message"
        fullWidth
        variant="outlined"
        multiline
        rows={4}
        InputProps={{ style: { resize: "vertical" } }} // Make textarea resizable
        sx={{ mb: 2 }} // Margin bottom for spacing
      />
      <Button variant="outlined" sx={{ borderColor: "white", border: "2px" }}>
        Submit
      </Button>
    </StyledBox>
  );
};

export default ContactUsForm;
