import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { Link as MiuiLink } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { Link } from "react-router-dom";
import James from "../images/James.jpg";
import Video from "../videos/connect.mp4";
import ProjectJp from "../images/project-1.jpeg";
import ProjectJp2 from "../images/Snapchat-324694748.jpg";

const Home = () => {
  return (
    <Box
      maxWidth={"100%"}
      component={"div"}
      // sx={{ border: "2px solid red" }}
      className="homePage"
    >
      {/*Intro */}
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        sx={{
          width: "100%",
          minHeight: "350px",
          backgroundColor: "#FFFAEB",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          sx={{
            my: 25,
            mx: 10,
            "@media screen and (min-width:768px)": {
              mx: 6,
              my: 1,
              mb: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              // border: "2px solid black",
            },

            "@media screen and (max-width:768px)": {
              my: 5,
              display: "flex",
              mx: 19,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },

            "@media screen and (min-width:895px)": {
              mx: 1,
              my: 25,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            },
          }}
        >
          <Stack>
            <Typography
              variant="h1"
              sx={{
                fontSize: "3rem",
                lineHeight: 1.25,
                marginBottom: "0.75rem",
                mt: 4,
                pb: 3,
                letterSpacing: "0.15rem",
                fontFamily: "Roboto, sans-serif",
                "@media screen and (min-width:895px)": {
                  lineHeight: 1,
                  fontSize: "4rem",
                  fontWeight: 400,
                },
              }}
            >
              I am James
              <div className="underlineService"></div>
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "20px",
                mb: 5,
                fontWeight: " bold ",
                color: "#617DA0",
                "@media screen and (min-width:895px)": {
                  lineHeight: 1,
                  fontSize: "1rem",
                },
              }}
            >
              Front End Developer with React
            </Typography>
            <div className="sectionOneBtn">
              <button className="introBtn">
                <Link to={"/contact"}>Hire Me </Link>
              </button>
            </div>
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            mt={5}
            mb={2}
            mr={11}
            sx={{
              "@media screen and (max-width:768px)": {
                mr: 11,
              },

              "@media screen and (min-width:895px)": {
                mr: 19,
              },
            }}
            justifyContent={"flex-start"}
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
        </Grid>

        {/* Section one Img */}
        <Grid>
          <Box
            sx={{
              mt: 2,
              position: "relative",
              mb: 7,
            }}
          >
            <div className="backOfImage">
              <Avatar
                src={James}
                variant="square"
                sx={{
                  borderRadius: "0.4rem",
                  width: 300,
                  height: 400,
                  "@media screen and (max-width:460px)": {
                    width: 250,
                    height: 300,
                  },
                }}
              />
            </div>
          </Box>
        </Grid>
      </Grid>

      {/* About me */}
      <Grid
        container
        sx={{
          py: 10,
          // pl: 0,
          pr: 3,
          mt: 0.1,
          mb: 2,
          backgroundColor: "white",
          // border: "2px solid coral",
          width: "100%",
        }}
        direction={"row"}
        alignItems={"center"}
      >
        {/* About me Image */}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          sx={{
            mr: 4,
            ml: 40,
            "@media screen and (max-width:768px)": {
              ml: 8,
              mb: 5,
            },

            "@media screen and (min-width:768px)": {
              ml: 8,
              mb: 5,
            },
          }}
        >
          <div className="aboutBackImage">
            <Avatar
              src={ProjectJp2}
              alt="Chigbo James"
              variant="square"
              sx={{
                borderRadius: "0.4rem",
                width: 300,
                height: 400,
                mb: 2,
                transition: "all 1s ease-in",
                ":hover": {
                  transform: "rotateY(360deg)",
                },
                "@media screen and (max-width:460px)": {
                  width: 250,
                  height: 300,
                },

                "@media screen and (min-width:768px)": {
                  width: 285,
                  height: 400,
                },
              }}
            />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          sx={{
            // border: "2px solid black",
            ml: 6,
            px: 1,
            "@media screen and (max-width: 768px)": {
              boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "3rem",
              lineHeight: 1.25,
              marginBottom: "0.75rem",
              mt: 2,
              fontWeight: 400,
              pb: 1,
              letterSpacing: "0.15rem",
              fontFamily: "Roboto, sans-serif",
              "@media screen and (min-width:895px)": {
                lineHeight: 1,
                fontSize: "3rem",
                fontWeight: 900,
              },
            }}
          >
            About
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              fontFamily: "Roboto, sans-serif",
              letterSpacing: "0.04rem",
              color: "black",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            quisquam totam excepturi expedita commodi optio accusantium
            similique modi officia nulla quod quam earum obcaecati eligendi
            quae, sit rerum, eveniet deleniti.
          </Typography>

          <Button variant="outlined" size="medium" sx={{ my: 4 }}>
            <Link to={"/about"}> About Me</Link>
          </Button>
        </Grid>
      </Grid>

      {/* My services */}
      <Grid
        container
        sx={{
          justifyContent: "center",
          backgroundColor: "#F1F5F8",
          minHeight: "700px",
          // border: "2px solid black",
        }}
      >
        <Grid
          item
          sx={{
            alignItems: "center",
            justifyContent: "center",
            my: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontFamily: "Roboto, sans-serif",
              mt: 5,
            }}
          >
            MY SERVICES
            <div className="underlineService"></div>
          </Typography>
        </Grid>

        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F1F5F8",
            mb: 10,
          }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "25%",
              minHeight: "100px",
              mr: 5,
              my: 10,
              px: 1,
              "@media screen and (max-width:992px)": {
                width: "80%",
                mx: 2,
                my: 2,
              },
            }}
          >
            <Avatar
              sx={{
                width: 70,
                height: 70,
                backgroundColor: "white",
              }}
              variant="square"
              className="icon"
            >
              <DesignServicesIcon
                sx={{
                  width: 35,
                  height: 35,
                  color: "#000",
                }}
              />
            </Avatar>
            <Typography
              variant="h4"
              sx={{
                textTransform: "capitalize",
                fontSize: "1.4rem",
                fontWeight: "bold",
                fontFamily: "Roboto, sans-serif",
                my: 2,
                px: 1,
              }}
            >
              Front End Web Design
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "0.9rem",
                fontFamily: "Roboto, sans-serif",
                textAlign: "justify",
                px: 1,
                py: 1,
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quod
              nemo excepturi amet debitis, libero iure voluptatibus blanditiis
              non exercitationem ipsum corrupti inventore, dolores incidunt
              harum ea vero nobis minus quia nam placeat. Ex quas ea praesentium
              ipsum, error soluta vero corrupti eveniet, esse, dolorum numquam
              sint autem culpa cupiditate.
            </Typography>
          </Paper>

          <Paper
            sx={{
              display: "flex",
              width: "25%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100px",
              mr: 5,
              px: 1,
              "@media screen and (max-width:992px)": {
                width: "80%",
                mx: 2,
                my: 2,
              },
            }}
          >
            <Avatar
              variant="square"
              className="icon"
              sx={{
                width: 70,
                height: 70,
                backgroundColor: "white",
              }}
            >
              <LanguageIcon sx={{ width: 35, height: 35, color: "#000" }} />
            </Avatar>

            <Typography
              sx={{
                textTransform: "capitalize",
                fontSize: "1.4rem",
                fontWeight: "bold",
                fontFamily: "Roboto, sans-serif",
                my: 2,
                px: 1,
              }}
            >
              Web Development
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "0.9rem",
                fontFamily: "Roboto, sans-serif",
                textAlign: "justify",
                py: 1,
                px: 1,
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quod
              nemo excepturi amet debitis, libero iure voluptatibus blanditiis
              non exercitationem ipsum corrupti inventore, dolores incidunt
              harum ea vero nobis minus quia nam placeat. Ex quas ea praesentium
              ipsum, error soluta vero corrupti eveniet, esse, dolorum numquam
              sint autem culpa cupiditate.
            </Typography>
          </Paper>

          <Paper
            sx={{
              width: "25%",
              minHeight: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mr: 5,
              px: 1,
              "@media screen and (max-width:992px)": {
                width: "80%",
                mx: 2,
                my: 2,
              },
            }}
          >
            <Avatar
              sx={{
                width: 70,
                height: 70,
                backgroundColor: "white",
              }}
              variant="square"
              className="icon"
            >
              <PhoneAndroidIcon
                sx={{ width: 35, height: 35, color: "black" }}
              />
            </Avatar>

            <Typography
              variant="h4"
              sx={{
                textTransform: "capitalize",
                fontSize: "1.4rem",
                fontWeight: "bold",
                fontFamily: "Roboto, sans-serif",
                my: 2,
                px: 1,
              }}
            >
              App Design
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "0.9rem",
                fontFamily: "Roboto, sans-serif",
                textAlign: "justify",
                py: 1,
                px: 1,
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quod
              nemo excepturi amet debitis, libero iure voluptatibus blanditiis
              non exercitationem ipsum corrupti inventore, dolores incidunt
              harum ea vero nobis minus quia nam placeat. Ex quas ea praesentium
              ipsum, error soluta vero corrupti eveniet, esse, dolorum numquam
              sint autem culpa cupiditate.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Contact me */}
      <Box
        className="connect"
        sx={{
          width: "99.9%",
          minHeight: "40vh",
          display: "flex",
          placeItems: "center",
          position: "relative",
          margin: " 5rem 0",
          padding: "10rem 0 5rem 0",
          // border: "2px solid black",
          "::after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            opacity: 0.7,
            zIndex: -1,
          },
        }}
      >
        <video
          controls
          autoPlay
          muted
          loop
          className="videoContainer"
          poster={`${James}`}
        >
          <source src={`${Video}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-banner">
          <Stack>
            <Typography
              variant="h1"
              sx={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                marginBottom: "0.75rem",
                textTransform: "capitalize",
                mt: 2,
                fontWeight: " bold",
                pb: 1,
                letterSpacing: "0.15rem",
                fontFamily: "Roboto, sans-serif",
                "@media screen and (min-width:895px)": {
                  lineHeight: 1,
                  fontSize: "2rem",
                  fontWeight: 600,
                },
              }}
            >
              Let's create your dream website
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                fontFamily: "Roboto, sans-serif",
                letterSpacing: "0.04rem",
                color: "black",
                mt: 2,
                wordBreak: "break-all",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              beatae minus alias quos ducimus, nemo a harum autem ipsum vero
              repudiandae minima cupiditate eius, dolore laudantium tempora
              optio, molestiae temporibus.
            </Typography>

            <div className="btn">
              <Button
                disableElevation={true}
                color={"secondary"}
                variant="outlined"
                sx={{ mt: 2, color: "black" }}
              >
                <Link to={"/contact"}>Contact Me</Link>
              </Button>
            </div>
          </Stack>
        </div>
      </Box>

      {/* Skills */}
      <Grid
        container
        sx={{
          backgroundColor: "#FCEEC5",
          textAlign: "center",
          mt: 7,
          pt: 3,
        }}
        direction={"column"}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "1.5rem",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
            textTransform: "capitalize",
            mt: 4,
            fontWeight: " bold",
            pb: 1,
            letterSpacing: "0.15rem",
            fontFamily: "Roboto, sans-serif",
            "@media screen and (min-width:895px)": {
              lineHeight: 1,
              fontSize: "3rem",
              fontWeight: 600,
            },
          }}
        >
          Skills
        </Typography>

        {/* Revisit Divider */}
        <Divider
          sx={{
            fontSize: "1.5rem",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
            textTransform: "capitalize",
            mt: 2,
            fontWeight: " bold",
            pb: 1,
            letterSpacing: "0.15rem",
            fontFamily: "Roboto, sans-serif",
            "@media screen and (min-width:895px)": {
              lineHeight: 1,
              fontSize: "2rem",
              fontWeight: 600,
              color: "green",
            },
          }}
        >
          Front End
        </Divider>

        <Grid item sx={{ mb: 8, mt: 2, backgroundColor: "#FCEEC5" }}>
          <Stack>
            <div className="skill">
              <p>HTML/CSS</p>
              <div className="skillContainer">
                <div className="skillValue value75"></div>
                <p className="skillValueText">75%</p>
              </div>
            </div>

            <div className="skill">
              <p>JavaScript</p>
              <div className="skillContainer">
                <div className="skillValue value50"></div>
                <p className="skillValueText skillText50">50%</p>
              </div>
            </div>

            <div className="skill">
              <p>React</p>
              <div className="skillContainer">
                <div className="skillValue value50"></div>
                <p className="skillValueText skillText50">50%</p>
              </div>
            </div>
          </Stack>
        </Grid>
      </Grid>

      {/* Projects */}
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        sx={{
          minHeight: "52vh",
          backgroundColor: "#F1F5F8",
          width: "100%",
          mb: -2.8,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            fontFamily: "Roboto, sans-serif",
            my: 6,
          }}
        >
          Projects
        </Typography>

        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "99%",
            minHeight: "300px",
            mx: 2,
            mb: 5,

            // Landscape phones and potrait tablets
            "@media  (max-width: 767px)": {
              width: "96%",
              flexDirection: "column",
            },
            // Potrait tablets and small desktops
            "@media (min-width:768px) and (max-width: 991px)": {
              flexDirection: "flex",
            },
            // Landscape tablets and medium desktops
            "@media(min-width:992px) and (max-width: 1199px)": {
              flexDirection: "flex",
            },

            "@media(min-width:1200px) )": {
              flexDirection: "flex",
            },
          }}
        >
          <Stack
            sx={{
              position: "relative",
              minHeight: "27rem",
              width: "22%",
              backgroundColor: "white",
              mr: 3,
              mb: 4,
              mt: 2,
              borderRadius: "0.5rem",

              // Landscape phones and potrait tablets
              "@media  (max-width: 767px)": {
                width: "90%",
                mr: 0,
              },
              // Potrait tablets and small desktops
              "@media (min-width:768px) and (max-width: 991px)": {
                mr: 3,
                width: "32%",
              },
              // Landscape tablets and medium desktops
              "@media(min-width:992px) and (max-width: 1199px)": {
                width: "32%",
              },

              "@media(min-width:1200px) )": {
                width: "32%",
              },
            }}
          >
            <Avatar
              src={ProjectJp}
              variant="square"
              sx={{
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
                width: "100%",
                height: 230,
                mb: 2,

                "@media screen and (min-width:768px)": {
                  width: "100%",
                  height: 200,
                },
              }}
            />
            <Typography
              variant="h4"
              sx={{
                textTransform: "capitalize",
                fontSize: "1.4rem",
                fontWeight: "bold",
                fontFamily: "Roboto, sans-serif",
                my: 1,
                px: 1,
              }}
            >
              Meme Generator
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "0.9rem",
                fontFamily: "Roboto, sans-serif",
                textAlign: "justify",
                px: 1,
                py: 1,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              recusandae inventore odit, nobis mollitia itaque, temporibus esse
              veritatis rerum aliquid culpa earum ut? Earum, debitis?
            </Typography>

            <div className="ava">
              <Avatar src={ProjectJp2} />
              <Button size="small">Source Codes</Button>
            </div>
          </Stack>

          <Stack
            sx={{
              // border: "4px solid red",
              position: "relative",
              minHeight: "27rem",
              backgroundColor: "white",
              mr: 3,
              mb: 4,
              mt: 2,
              width: "20%",
              borderRadius: "0.5rem",
              // Potrait phones and smaller
              "@media (max-width: 468px)": {
                width: "90%",
                mr: 0,
                my: 2,
              },
              // Landscape phones and potrait tablets
              "@media  (max-width: 767px)": {
                width: "90%",
                mr: 0,
                mt: 1,
              },
              // Potrait tablets and small desktops
              "@media (min-width:768px) and (max-width: 991px)": {
                width: "30%",
              },
              // Landscape tablets and medium desktops
              "@media(min-width:992px) and (max-width: 1199px)": {
                width: "30%",
              },

              "@media(min-width:1200px) )": {
                width: "30%",
              },
            }}
          >
            <Avatar
              src={ProjectJp}
              variant="square"
              sx={{
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
                height: 230,
                width: "100%",
                mb: 2,
                "@media screen and (max-width:460px)": {
                  width: "100%",
                  height: 300,
                },

                "@media screen and (min-width:768px)": {
                  width: "100%",
                  height: 200,
                },
              }}
            />
            <Typography
              variant="h4"
              sx={{
                textTransform: "capitalize",
                fontSize: "1.4rem",
                fontWeight: "bold",
                fontFamily: "Roboto, sans-serif",
                my: 1,
                px: 1,
              }}
            >
              Meme Generator
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "0.9rem",
                fontFamily: "Roboto, sans-serif",
                textAlign: "justify",
                px: 1,
                py: 1,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              recusandae inventore odit, nobis mollitia itaque, temporibus esse
              veritatis rerum aliquid culpa earum ut? Earum, debitis?
            </Typography>
            <div className="ava">
              <Avatar src={ProjectJp2} />
              <Button size="small">Source Codes</Button>
            </div>
          </Stack>

          <Stack
            sx={{
              // border: "4px solid red",
              position: "relative",
              minHeight: "27rem",
              width: "20%",
              backgroundColor: "white",
              borderRadius: "0.5rem",
              mb: 4,
              mt: 2,
              mr: 3,
              // Potrait phones and smaller
              "@media (max-width: 468px)": {
                width: "90%",
                mr: 0,
                mb: 2,
              },
              // Landscape phones and potrait tablets
              "@media  (max-width: 767px)": {
                width: "90%",
                mr: 0,
                mb: 2,
              },
              // Potrait tablets and small desktops
              "@media (min-width:768px) and (max-width: 991px)": {
                width: "30%",
              },
              // Landscape tablets and medium desktops
              "@media(min-width:992px) and (max-width: 1199px)": {
                width: "30%",
              },

              "@media(min-width:1200px) )": {
                width: "30%",
              },
            }}
          >
            <Avatar
              src={ProjectJp}
              variant="square"
              sx={{
                borderRadius: "0rem",
                width: "100%",
                height: 230,
                mb: 2,
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
                "@media screen and (max-width:460px)": {
                  width: "100%",
                  height: 300,
                },

                "@media screen and (min-width:768px)": {
                  width: "100%",
                  height: 200,
                },
              }}
            />
            <Typography
              variant="h4"
              sx={{
                textTransform: "capitalize",
                fontSize: "1.4rem",
                fontWeight: "bold",
                fontFamily: "Roboto, sans-serif",
                my: 1,
                px: 1,
              }}
            >
              Meme Generator
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "0.9rem",
                fontFamily: "Roboto, sans-serif",
                textAlign: "justify",
                px: 1,
                py: 1,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              recusandae inventore odit, nobis mollitia itaque, temporibus esse
              veritatis rerum aliquid culpa earum ut? Earum, debitis?
            </Typography>
            <div className="ava">
              <Avatar src={ProjectJp2} />
              <Button size="small">Source Codes</Button>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
