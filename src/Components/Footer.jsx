import React from "react";
import { Link as MiuiLink, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "25vh",
        backgroundColor: "#FFFAEB",
        // border: "2px solid black",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={5}
        mb={2}
        // mr={11}
        width={"97%"}
        // border={"1px solid black"}
        sx={{
          //   border: "2px solid green",
          "@media screen and (max-width:768px)": {
            mr: 5,
          },

          "@media screen and (min-width:895px)": {
            // mr: 19,
          },
        }}
      >
        <MiuiLink
          sx={{ pr: 3 }}
          href="https://www.facebook.com/james.ifeanyi.58"
          target={"_blank"}
          rel="noopener"
        >
          <FacebookIcon />
        </MiuiLink>

        <MiuiLink
          sx={{ pr: 3 }}
          href="https://www.instagram.com/jhamesalehandro"
          target={"_blank"}
          rel="noopener"
        >
          <InstagramIcon />
        </MiuiLink>

        <MiuiLink
          sx={{ pr: 3 }}
          href="https://www.twitter.com/Chigbo_James"
          target={"_blank"}
          rel="noopener"
        >
          <TwitterIcon />
        </MiuiLink>

        <MiuiLink
          sx={{ pr: 3 }}
          href="https://www.linkedin.com/in/alejandro-james-571418225/"
          target={"_blank"}
          rel="noopener"
        >
          <LinkedInIcon />
        </MiuiLink>
      </Stack>

      <Typography
        variant="body1"
        sx={{
          // border: "2px solid black",
          fontWeight: "600",
          textTransform: "capitalize",
          fontFamily: "Roboto, sans-serif",
          fontSize: "1.1rem",
          textAlign: "center",
        }}
      >
        &copy;2022 <span> Chigbo Ifeanyi James</span>. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
