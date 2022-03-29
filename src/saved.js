<Stack sx={{ border: "2px solid black" }}>
  <Divider></Divider>
  <Typography>I am James</Typography>
  <Typography>A front End Developer with React</Typography>
  <div className="sectionOneBtn">
    <Button>Hire me</Button>
  </div>

  <Stack direction={"row"} alignItems={"center"}>
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
</Stack>;

{
  /* Image side */
}

<Button
  sx={{
    textTransform: "capitalize",
    background: "#E9B949",
    color: "hsl(209, 61%, 16%)",
    padding: "0.375rem 0.75rem",
    fontSize: " 0.875rem",
    boxShadow: " 0 1px 3px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s linear",
    WebkitTransition: "all 0.3s linear",
    borderRadius: "0.5rem",
    border: "none",
    "@media screen and (max-width:895px)": {
      color: "#513C06",
      backgroundColor: "#E9B949",
    },
  }}
  variant="outlined"
>
  <Link to={"/contact"}>Hire me</Link>
</Button>;
