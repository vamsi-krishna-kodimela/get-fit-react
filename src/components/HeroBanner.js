/* eslint-disable quotes */
import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/header-bg.jpg";

const HeroBanner = ({ children }) => (
  <Box
    height="100vh"
    style={{
      backgroundColor: "#000000",
      backgroundImage: `url(${HeroBannerImage})`,
      backgroundPosition: "right top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    {children}
    <Container
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        color="#EEEEEE"
        mt="30px"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
        color="#EEEEEE"
      >
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Explore Exercises
        </a>
      </Stack>
    </Container>
  </Box>
);

export default HeroBanner;
