import React from "react";
import { Grid, Typography, Icon, Box, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactUsMap = () => {
  return (
    <div
      style={{
        margin: "40px",
        overflow: "hidden",
        textAlign: "center", // Center text by default
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            paddingLeft: { xs: 0, md: "30px" },
            marginTop: { xs: "2px", md: "30px" },
          }}
        >
          <Typography variant="h4" component="div" gutterBottom>
            <Icon
              component={LocationOnIcon}
              sx={{
                verticalAlign: "middle",
                marginRight: 1,
                color: "#1976d2",
              }}
            />
            <strong>Location</strong>
          </Typography>
          <Typography variant="body1" component="div" paragraph>
            No 119, 70th Cross Rd, 5th Block, Rajajinagar,
            <br /> Bengaluru, Karnataka 560010
          </Typography>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{ marginTop: 3 }}
          >
            <Icon
              component={EmailIcon}
              sx={{
                verticalAlign: "middle",
                marginRight: 1,
                color: "#1976d2",
              }}
            />
            <strong>Email</strong>
          </Typography>
          <Typography variant="body1" component="div" paragraph>
            <Link href="mailto:chiranth@bytematic.in" sx={{ color: "#FFFFFF" }}>
              chiranth@bytematic.in
            </Link>
            <br />
            <Link href="mailto:sales@bytematic.in" sx={{ color: "#FFFFFF" }}>
              sales@bytematic.in
            </Link>
          </Typography>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{ marginTop: 3 }}
          >
            <Icon
              component={PhoneIcon}
              sx={{
                verticalAlign: "middle",
                marginRight: 1,
                color: "#1976d2",
              }}
            />
            <strong>Call</strong>
          </Typography>
          <Typography variant="body1" component="div" paragraph>
            +91 8553517712 , +91 9738821555
          </Typography>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={8}>
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?q=Bytematic%20Solutions&key=AIzaSyCFkUoKM3BQ4jFU9LzhilAq9tE1nG4X_jo&q=12.981571080067281,77.5532916800231`}
            allowFullScreen
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUsMap;
