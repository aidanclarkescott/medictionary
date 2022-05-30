import { Typography, Container, Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        Today
      </Typography>

      <Box sx={{ height: "300px", backgroundColor: "lightgray", borderRadius: "10px" }}></Box>
    </Container>
  );
};

export default Home;
