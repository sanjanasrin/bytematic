import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled Box with updated width, center alignment, and border radius
const StyledBox = styled(Box)({
  backgroundColor: "#1d2057",
  padding: "20px",
  borderRadius: "25px", // Border radius for the form container
  width: "70%", // Width of 70%
  maxWidth: "100%", // Ensure it takes full width up to the max width
  margin: "20px auto", // Centering with auto margins
});

// Styled TextField with white background, text color #1d2057, and border radius
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
  borderRadius: "25px", // Border radius for text fields
  marginBottom: "16px",
});

// Styled Button with border color, radius, and centered alignment
const StyledButton = styled(Button)({
  borderColor: "white",
  color: "white",
  border: "2px solid",
  borderRadius: "25px", // Border radius for the button
  display: "block", // Make button a block element to center it
  margin: "16px auto 0", // Center with auto margins and margin-top for spacing
});

const ContactUsForm = () => {
  return (
    <StyledBox>
      <Typography variant="h4" color="white" gutterBottom textAlign="center">
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
      <StyledButton variant="outlined">Submit</StyledButton>
    </StyledBox>
  );
};

export default ContactUsForm;
