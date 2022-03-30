<Grid
  container
  direction={"column"}
  alignItems={"center"}
  sx={{
    border: "2px solid green",
    minHeight: "50vh",
    backgroundColor: "#F1F5F8",
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
      width: "100%",
      minHeight: "300px",
      mx: 2,
      mb: 5,
      // Potrait phones and smaller
      "@media (max-width: 468px)": {
        flexDirection: "column",
      },
      // Landscape phones and potrait tablets
      "@media  (max-width: 767px)": {
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
        width: "20%",
        backgroundColor: "white",
        mr: 3,
        mb: 4,
        mt: 2,
        borderRadius: "0.5rem",
        // Potrait phones and smaller
        "@media (max-width: 468px)": {
          width: "90%",
          mr: 0,
        },
        // Landscape phones and potrait tablets
        "@media  (max-width: 767px)": {
          width: "90%",
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
          fontSize: "1rem",
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
        mr: 3,
        mb: 4,
        mt: 2,
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
            width: 250,
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
          fontSize: "1rem",
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
            width: 250,
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
          fontSize: "1rem",
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
</Grid>;
