import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import MedicationItem from "../components/MedicationItem";

const MyMedications = ({ medications }) => {
  return (
    <Container>
      <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        My Medications
      </Typography>

      <Grid container spacing={2}>
        {medications.map((medication) => (
          <MedicationItem medication={medication} />
        ))}
      </Grid>
    </Container>
  );
};

export default MyMedications;
