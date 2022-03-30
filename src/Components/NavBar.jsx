import React from "react";
import { Avatar, Button, Stack, Typography, Box, Grid } from "@mui/material";
import ViewWeekSharpIcon from "@mui/icons-material/ViewWeekSharp";
import { Link } from "react-router-dom";
import { Link as MiuiLink } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ProjectJp2 from "../images/Snapchat-324694748.jpg";
import { useRef } from "react";

const NavBar = () => {
  // Hooks
  const asideRef = useRef();

  // vscode://vscode.github-authentication/did-authenticate?windowid=8&code=078a29f9e0620e0b9984&state=0918a9ee-133a-42b9-b624-edfdb194f7f6

  // https://github.com/Jamesalehandro/Official-website.git

  // Functions
  const handleClick = () => {
    asideRef.current.classList.remove("showSideBar");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFFAEB",
        minHeight: "90px",
        display: "flex",
        alignItems: "center",
        width: "99.9%",
        py: 1,
        // border: "2px solid black",
        position: "relative",
        "@media screen and (max-width: 895px)": {
          backgroundColor: "white",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          width: "99.8%",
          // border: "2px solid black",
        },
      }}
      className="navBox"
    >
      {/* Nav Avatar and button */}
      <Grid container spacing={2} sx={{ position: "relative" }}>
        <Grid
          item
          xs={8}
          sm={8}
          md={5}
          lg={5}
          sx={{
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            // border: "2px solid black",
          }}
        >
          <Avatar
            src={ProjectJp2}
            sx={{
              ml: 5,
              mb: 1.5,
              width: 60,
              height: 60,
              border: "none",
            }}
            alt="Chigbo James"
          />
        </Grid>

        {/* Bars Icon */}
        <Grid
          item
          className="navBtn"
          alignItems={"center"}
          justifyContent={"flex-end"}
          onClick={() => {
            asideRef.current.classList.add("showSideBar");
          }}
          xs={4}
          sm={4}
          md={6}
          lg={6}
          sx={{ pr: 2 }}
          display={{ xs: "grid", sm: "grid", md: "none", lg: "none" }}
        >
          <ViewWeekSharpIcon
            sx={{
              transform: "rotate(90deg)",
              fontSize: "2.5rem",
              transition: "all 0.25s linear",
              background: "transparent",
              borderColor: "transparent",
              color: "#E9B949",
            }}
          />
        </Grid>

        {/* NavLinks */}
        <Grid
          item
          xs={4}
          sm={4}
          md={7}
          lg={7}
          display={{ xs: "none", sm: "none", md: "flex", lg: "flex" }}
          alignItems="center"
          justifyContent={"space-evenly"}
          sx={
            {
              // border: "2px solid black",
            }
          }
        >
          <Typography>
            <Link to={"/officialwebsite"}>Home</Link>
          </Typography>

          <Typography>
            <Link to={"/about"}>About</Link>
          </Typography>

          <Typography>
            <Link to={"/project"}>Projects</Link>
          </Typography>

          <Typography>
            <Link to={"/contact"}>Contact</Link>
          </Typography>
        </Grid>
      </Grid>

      {/* Aside */}
      <Box component={"div"} ref={asideRef} className="aside">
        <div className="btn">
          <Button
            disableElevation={true}
            variant="contained"
            onClick={() => {
              asideRef.current.classList.remove("showSideBar");
            }}
          >
            Close
          </Button>
        </div>

        <Stack
          sx={{ minHeight: "250px", my: 2, textAlign: "center" }}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Typography variant="button" onClick={handleClick}>
            <Link to={"/officialwebsite"}>Home</Link>
          </Typography>

          <Typography variant="overline" onClick={handleClick}>
            <Link to={"/about"}>About</Link>
          </Typography>

          <Typography variant="button" onClick={handleClick}>
            <Link to={"/project"}>Projects</Link>
          </Typography>

          <Typography variant="button" onClick={handleClick}>
            <Link to={"/contact"}>Contact</Link>
          </Typography>
        </Stack>

        <Stack
          sx={{ mt: 7 }}
          direction={"row"}
          alignItems={"center"}
          justifyContent="space-evenly"
        >
          <MiuiLink
            href="https://www.facebook.com/james.ifeanyi.58"
            target={"_blank"}
            rel="noopener"
          >
            <FacebookIcon />
          </MiuiLink>

          <MiuiLink
            href="https://www.instagram.com/jhamesalehandro"
            target={"_blank"}
            rel="noopener"
          >
            <InstagramIcon />
          </MiuiLink>

          <MiuiLink
            href="https://www.twitter.com/Chigbo_James"
            target={"_blank"}
            rel="noopener"
          >
            <TwitterIcon />
          </MiuiLink>

          <MiuiLink
            href="https://www.linkedin.com/in/alejandro-james-571418225/"
            target={"_blank"}
            rel="noopener"
          >
            <LinkedInIcon />
          </MiuiLink>
        </Stack>
      </Box>
    </Box>
  );
};

export default NavBar;
