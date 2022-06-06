import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import MedicationItem from "../components/MedicationItem";

const MyMedications = ({ user, updateUser }) => {
  const deleteMedication = (name) => {
    const newUser = {
      ...user,
      medications: user.medications.filter((medication) => medication.name !== name),
    };
    updateUser(newUser);
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        My Medications
      </Typography>

      <Grid container spacing={2}>
        {user.medications.map((medication, idx) => (
          <MedicationItem key={idx} medication={medication} deleteHandler={deleteMedication} />
        ))}
      </Grid>
    </Container>
  );
};

export default MyMedications;
