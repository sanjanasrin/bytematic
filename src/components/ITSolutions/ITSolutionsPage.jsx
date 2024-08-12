import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import Categories1 from "../Assets/Categories1.svg";
import Picture1 from "../Assets/PictureIT3.svg";
import Picture2 from "../Assets/PictureIT2.svg";
import Picture3 from "../Assets/IT1.svg";
import Picture4 from "../Assets/IT2.svg";
import Picture5 from "../Assets/IT3.svg";
import Picture6 from "../Assets/IT4.svg";
import Picture7 from "../Assets/IT5.svg";

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
  position: "relative", // Add relative positioning to parent container
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
  borderRadius: "16px", // Adds rounded corners
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds shadow for a little zing
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

const OverlayBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "46px", // Adjust top position
  left: "50px", // Adjust left position
  backgroundColor: "#685FD4",
  color: "white",
  padding: "8px 16px",
  borderRadius: "8px",
  [theme.breakpoints.down("md")]: {
    top: "20px",
    left: "8px",
    padding: "4px 8px",
  },
  [theme.breakpoints.down("sm")]: {
    top: "20px",
    left: "8px",
    padding: "4px 8px",
  },
}));

const OverlayBox2 = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "46px",
  right: "50px",
  backgroundColor: "#685FD4",
  color: "white",
  padding: "8px 16px",
  borderRadius: "8px",
  [theme.breakpoints.down("md")]: {
    top: "20px",
    right: "8px",
    padding: "4px 8px",
  },
  [theme.breakpoints.down("sm")]: {
    top: "20px",
    right: "8px",
    padding: "4px 8px",
  },
}));

const ITSolutionsPage = () => {
  const theme = useTheme();

  return (
    <>
      <Container theme={theme}>
        <TextColumn>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "48px",
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
            Enabling IT Services
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
            The ecosystem of an organization consists of a large number of IT
            products and solutions and each of these components requires
            on-going support to ensure the smooth functioning of the IT
            Infrastructure. Our Support Services group offers a range of basic
            and enhanced services towards supporting the various building blocks
            of your IT infrastructure.
          </Typography>
        </TextColumn>
        <ImageColumn theme={theme}>
          <ResponsiveImage src={Picture1} alt="Bytematic IT Solutions" />
          <OverlayBox>Enhanced Services</OverlayBox>
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
          <OverlayBox2>Service Support</OverlayBox2>
        </ImageColumn>
        <TextColumn>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "48px",
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
            Your Partner in Solving IT Services
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
            With a deep understanding of the dynamics of the IT industry and
            focus on client needs, we support our customers in their endeavors
            by offering long-lasting IT Support. Our success has largely been
            driven by our unwavering commitment to delivery, great people with
            great skills, keeping abreast of technology trends, embracing and
            understanding new disruptive paradigms and how these will impact our
            clients and our extended service support
          </Typography>
        </TextColumn>
      </Container>

      <Container theme={theme}>
        <TextColumn>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "48px",
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
            Annual Maintenance Contract
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
            Resource availability is paramount to minimize the downtime to
            derive maximum benefits. Hunting around for replacement components
            matching the requisite specifications and troubleshooting can often
            be very time consuming. With our AMC Plans, stay assured of seamless
            service support with prompt troubleshooting to resolve any issues
            that crop up.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "26px",
              color: "#8FBAE3",
              fontWeight: "bold",
              marginTop: "20px",
              [theme.breakpoints.down("md")]: {
                fontSize: "16px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "16px",
              },
            }}
          >
            Types of support offered under our comprehensive AMC:
          </Typography>

          <Typography
            component="div"
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "20px",
              color: "#8FBAE3",
              marginTop: "10px",
              lineHeight: 1.5, // Adjust the line height as needed
              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
              },
            }}
          >
            <ul style={{ marginTop: "8px" }}>
              <li>Hardware Support</li>
              <li>Software Support</li>
              <li>Preventive Maintenance</li>
              <li>Asset Management</li>
            </ul>
          </Typography>
        </TextColumn>
        <ImageColumn theme={theme}>
          <ResponsiveImage src={Picture3} alt="Bytematic IT Solutions" />
          <OverlayBox>Maintenance</OverlayBox>
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
          <ResponsiveImage src={Picture4} alt="Bytematic IT Solutions" />
          <OverlayBox2>Efficiency</OverlayBox2>
        </ImageColumn>
        <TextColumn>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "48px",
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
            Building an efficient IT Infrastructure
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
            Having an efficient and robust IT infrastructure is imperative to
            stay competitive in the current highly connected world. The multiple
            IT products in use and services availed by an organization need to
            be seamless connected and run in sync to meet the changing needs of
            the business entity.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "20px",
              color: "#8FBAE3",
              marginTop: "20px",
              [theme.breakpoints.down("md")]: {
                fontSize: "14px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
                textAlign: "left",
              },
            }}
          >
            We understand that no two companies are the same. Every company runs
            on a different business idea, with different driving forces and
            varying priorities. Accordingly, their IT needs vary as well. This
            is the reason we ensure every business transaction is preceded by a
            Technical Consultation to understand the client’s organization and
            their IT needs so as to provide the best solutions possible in a
            customized package.
          </Typography>
        </TextColumn>
      </Container>

      <Container theme={theme}>
        <TextColumn>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "48px",
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
            Planning, deployment and optimizing of IT Infrastructure
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
            Once a decision is made on the ideal approach to be taken, we
            provide comprehensive services including procurement of the various
            IT components – ranging from server stacks, workstations and
            associated peripherals to network components like routers, to
            software packages including specified OS, enterprise software and
            maintenance thereof. We will ensure efficient deployment of your IT
            resources to minimise downtime and maximise efficiency so that you
            can focus on reaching your milestones without having to worry about
            the IT infrastructure.
          </Typography>
        </TextColumn>
        <ImageColumn theme={theme}>
          <ResponsiveImage src={Picture5} alt="Bytematic IT Solutions" />
          <OverlayBox>Planning,Optimizing</OverlayBox>
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
          <ResponsiveImage src={Picture6} alt="Bytematic IT Solutions" />
          <OverlayBox2>Consultation</OverlayBox2>
        </ImageColumn>
        <TextColumn>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "48px",
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
            Technical Consultation
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
            Through our Technical Consultation, we present the client with
            various options available to meet their technical requirements and
            provide guidance on selecting the most suitable technology platform
            as per the client’s needs, so as to ensure optimal utilization of
            resources and minimal downtime. With scalable cloud-based solutions,
            worries about dead capital investment are a thing of the past.
          </Typography>
        </TextColumn>
      </Container>

      <Container theme={theme}>
        <TextColumn>
          <Typography
            sx={{
              fontFamily: "Jost, sans-serif",
              fontSize: "48px",
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
            Customer Support
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
            We at Bytematic strive for customer delight. Our dedicated helpdesk
            team would be a single point of contact for any Product Support
            calls related to desktops, laptops, peripherals, servers and storage
            devices covered under warranty, AMCs or trade calls. Our entire team
            is technically trained and capable of supporting the respective
            products and efficient enough to handle any complex problems and
            escalations. Working constantly towards efficiency and reliability
            on TAT has been our motive, to ensure a stable and smooth
            operational environment for the customers.
          </Typography>
        </TextColumn>
        <ImageColumn theme={theme}>
          <ResponsiveImage src={Picture7} alt="Bytematic IT Solutions" />
          <OverlayBox> Customer Support</OverlayBox>
        </ImageColumn>
      </Container>
    </>
  );
};

export default ITSolutionsPage;
