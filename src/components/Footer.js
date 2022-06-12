/* eslint-disable quotes */
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <FitnessCenterIcon
        style={{
          width: "48px",
          height: "48px",
          margin: "0px 20px",
          color: "#FF2625",
        }}
      />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Designed &amp; Developed by @VamsiKrishnaKodimela
    </Typography>
  </Box>
);

export default Footer;
