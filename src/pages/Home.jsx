import { Typography, Container, Box } from "@mui/material";
import React from "react";

const Home = ({ medications }) => {
  return (
    <Container>
      <Typography variant="h2">Today</Typography>
      {medications.map((medication) => (
        <>
          <Box>
            <Typography variant="body">{medication.name}</Typography>
            <Typography variant="body">{medication.dosage}</Typography>
            <Typography variant="body">{medication.numPills}</Typography>
            <Typography variant="body">{medication.totalAmount}</Typography>
          </Box>
          <br />
        </>
      ))}
    </Container>
  );
};

export default Home;
