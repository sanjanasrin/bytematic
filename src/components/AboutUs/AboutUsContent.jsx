import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import Categories1 from "../Assets/Categories1.svg";
import Picture1 from "../Assets/Picture1.svg";
import Picture2 from "../Assets/Picture2.svg";
import Picture3 from "../Assets/Picture3.svg";
import { keyframes } from "@mui/system";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
  alignItems: "center",
  margin: "30px",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "8px",
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginTop: "30px",
    display: "grid",
  },
}));

const TextColumn = styled(Box)(({ theme }) => ({
  padding: "16px",

  [theme.breakpoints.down("sm")]: {
    padding: "8px",
    margin: "0 10px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "16px",
  },
}));

const ImageColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    marginTop: "16px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "16px 0px",
  },
}));

const ResponsiveImage = styled("img")(({ theme }) => ({
  width: "600px",
  height: "400px",
  objectFit: "cover",
  animation: `${fadeIn} 1s ease-out`,
  [theme.breakpoints.down("md")]: {
    width: "70%",
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70%",
    height: "auto",
  },
}));

const AboutUsContent = () => {
  const theme = useTheme();

  return (
    <>
      <Container theme={theme}>
        <TextColumn>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "36px",
              fontWeight: "bold",
              color: "#8FBAE3",
              marginBottom: "16px",
              [theme.breakpoints.down("md")]: {
                fontSize: "32px",
                marginBottom: "8px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "24px",
                marginBottom: "8px",
              },
            }}
          >
            We know that every Byte matters in IT.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "20px",
              color: "#8FBAE3",
              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
              },
            }}
          >
            Bytematic IT Solutions is the result of our efforts to provide the
            technical expertise accrued by us through extensive experience in
            different areas of specialization in the IT field – on the software,
            hardware, and networking fronts. A fresh-blooded, dynamic company
            that is vibrant and energetic from the outside, while being
            supported by a core of competence honed by experience.
          </Typography>
        </TextColumn>
        <ImageColumn theme={theme}>
          <ResponsiveImage src={Picture1} alt="Bytematic IT Solutions" />
        </ImageColumn>
      </Container>

      <Container
        theme={theme}
        sx={{
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse", // On mobile, text should come first
          },
          [theme.breakpoints.up("md")]: {
            gridTemplateColumns: "1fr 1fr", // Ensure side-by-side layout for md and larger
          },
        }}
      >
        <ImageColumn theme={theme}>
          <ResponsiveImage src={Picture3} alt="Bytematic IT Solutions" />
        </ImageColumn>
        <TextColumn>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "36px",
              fontWeight: "bold",
              color: "#8FBAE3",
              marginBottom: "16px",

              [theme.breakpoints.down("md")]: {
                fontSize: "32px",
                marginBottom: "8px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "24px",
                marginBottom: "8px",
                textAlign: "left",
              },
            }}
          >
            Our Vision
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "20px",
              color: "#8FBAE3",

              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
                textAlign: "left",
              },
            }}
          >
            To become a leading end to end comprehensive solution provider in
            the IT domain by harnessing state of art technologies to enable the
            IT firm stay performance-driven & cost effective. We have an
            excellent Sales and Consulting team to offer turn-key solutions
            built around our impressive product and services portfolio tailor
            made to suite the client’s requirements. We aim to be associated
            with consistent, on-time delivery of excellent service. We see our
            role as providing solutions to the doers so that they can focus on
            solving the grand challenges of society and humanity at large. We
            aspire to silently support those who do, by providing a seamless IT
            Solutions package to care of all their needs effortlessly.
          </Typography>
        </TextColumn>
      </Container>

      <Container theme={theme}>
        <TextColumn>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "36px",
              fontWeight: "bold",
              color: "#8FBAE3",
              marginBottom: "16px",
              [theme.breakpoints.down("md")]: {
                fontSize: "32px",
                marginBottom: "8px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "24px",
                marginBottom: "8px",
              },
            }}
          >
            Custom-made Care Package
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "20px",
              color: "#8FBAE3",
              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
              },
            }}
          >
            We just don’t find that one size fits all. Each organization is
            built on its’ own set of principles, objectives and work flow
            process. Therefore, when a customer comes to us with a requirement,
            we don’t just offer them a product; we make an effort to understand
            their needs, their processes and then build a holistic solution for
            them with be a combination of products, services and more. With
            special attention to the individual requirements of our clients, we
            aim to deliver them a hassle-free service so that they can forget
            all about IT maintenance and focus on achieving their dreams.
          </Typography>
        </TextColumn>
        <ImageColumn theme={theme}>
          <ResponsiveImage src={Categories1} alt="Bytematic IT Solutions" />
        </ImageColumn>
      </Container>

      <Container
        theme={theme}
        sx={{
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse", // On mobile, text should come first
          },
          [theme.breakpoints.up("md")]: {
            gridTemplateColumns: "1fr 1fr", // Ensure side-by-side layout for md and larger
          },
        }}
      >
        <ImageColumn theme={theme}>
          <ResponsiveImage src={Picture2} alt="Bytematic IT Solutions" />
        </ImageColumn>
        <TextColumn>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "36px",
              fontWeight: "bold",
              color: "#8FBAE3",
              marginBottom: "16px",

              [theme.breakpoints.down("md")]: {
                fontSize: "32px",
                marginBottom: "8px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "24px",
                marginBottom: "8px",
                textAlign: "left",
              },
            }}
          >
            Multi-Brand Hardware Support
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "20px",
              color: "#8FBAE3",

              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
                textAlign: "left",
              },
            }}
          >
            We know that just like every customer is different, their choice of
            preferred hardware providers vary too. We cover products and
            services of all major providers from across the globe. We have
            exclusive tie-up with high level distributors and suppliers to
            ensure that we can always source the best product for you at the
            best prices available in the market.With our extensive range of
            products and services, all offered in custom configurations, we
            assure you the most important aspect of any business - peace of
            mind. We take care of all things IT, from first Byte to the very
            last Byte.
          </Typography>
        </TextColumn>
      </Container>
    </>
  );
};

export default AboutUsContent;
