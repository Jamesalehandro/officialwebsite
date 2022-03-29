import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Divider></Divider>
      <Box
        component={"div"}
        sx={{
          minHeight: "63vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#FFFAEB",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "3rem",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
            mt: 4,
            pb: 1,
            letterSpacing: "0.15rem",
            textDecoration: "underline #E9B949",
            fontFamily: "Roboto, sans-serif",
            "@media screen and (min-width:895px)": {
              lineHeight: 1,
              fontSize: "4rem",
              fontWeight: 400,
            },
          }}
        >
          About me
        </Typography>

        <Typography
          variant="body1"
          sx={{
            width: "50%",
            mt: 5,
            fontSize: "1.1rem",
            fontFamily: "Roboto, sans-serif",
            textAlign: "justify",
            color: "gray",
          }}
        >
          Hello, I am Chigbo Ifeanyi and I am a frond end web developer. I live
          and work in Enugu State, NIgeria. I spend most of my day,
          experimenting with HTML, CSS and JavaScript and react. I enjoy coding
          because it helps to keep me focused and the challenge of learning
          something new everyday.
        </Typography>
      </Box>
      <Divider></Divider>
    </>
  );
};

export default About;
