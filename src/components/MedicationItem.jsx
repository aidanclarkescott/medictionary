import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const MedicationItem = ({ medication }) => {
  return (
    <Grid item>
      <Box
        sx={{
          height: "200px",
          width: "180px",
          backgroundColor: "lightgray",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          padding: "15px",
        }}
      >
        <Typography variant="body1">Name: {medication.name}</Typography>
        <Typography variant="body1">Dosage (mg): {medication.dosage}</Typography>
        <Typography variant="body1">Dosage (pills): {medication.numPills}</Typography>
        <Typography variant="body1">Amount Remaining: {medication.totalAmount}</Typography>
        <Typography variant="body1">Frequency: {medication.frequency}</Typography>
      </Box>
    </Grid>
  );
};

export default MedicationItem;
