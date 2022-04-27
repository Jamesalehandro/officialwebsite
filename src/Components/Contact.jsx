import { Box, Container, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Contact = () => {
  // Initial values
  const initialState = { email: "", message: "" };

  // Hooks
  const [details, setDetails] = useState(initialState);
  const navigate = useNavigate();

  // Functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (details.email && details.message) {
      swal({
        title: "Done!",
        text: "Thank You for contacting me. ",
        icon: "success",
        timer: 2000,
        button: false,
      });
      setTimeout(() => {
        navigate("/officialwebsite");
      }, 2500);
    } else {
      swal({
        title: "Failed",
        text: "Please Fill in the Spaces. ",
        icon: "error",
        timer: 2000,
        button: false,
      });
    }
  };

  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "63vh",
        position: "relative",
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
        Contact Me
      </Typography>
      <Box
        component={"form"}
        sx={{
          width: "90%",
          minHeight: "40vh",
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          type={"email"}
          name={"email"}
          variant="outlined"
          required
          label="Email"
          value={details.email}
          onChange={handleChange}
          sx={{
            my: 6,
            width: "100%",
          }}
        />

        <TextField
          type={"text"}
          variant="outlined"
          multiline
          required
          value={details.message}
          name={"message"}
          onChange={handleChange}
          label="Message"
          sx={{ mt: 1, width: "100%" }}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disableElevation
          onClick={handleSubmit}
          sx={{
            m: 1,
            padding: "0.5rem 1rem",
            textTransform: "capitalize",
            transition: "all 0.5s ease-in-out",
            borderRadius: "0.25rem",
            background: "transparent",
            color: "#645cff",
            border: "1px solid #645cff",
            mt: 2,
            ":hover": {
              boxShadow: "0 0 0 2rem #645cff inset",
              color: "#fff",
              borderRadius: "0.5rem",
            },
          }}
        >
          Send a Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
