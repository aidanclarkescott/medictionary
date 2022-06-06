import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import WeekDayDisplay from "./WeekDayDisplay";

const MedicationItem = ({ medication, deleteHandler }) => {
  return (
    <Grid item>
      <Box
        sx={{
          height: 200,
          width: 200,
          backgroundColor: "lightgray",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "15px",
        }}
      >
        <Box>
          <Typography variant="body1">Name: {medication.name}</Typography>
          <Typography variant="body1">Dosage (mg): {medication.dosage}</Typography>
          <Typography variant="body1">Dosage (pills): {medication.numPills}</Typography>
          <Typography variant="body1">Amount Remaining: {medication.totalAmount}</Typography>
          <Typography variant="body1">Frequency: {medication.frequency}</Typography>
          {medication.frequency === "Weekly" && (
            <WeekDayDisplay weeklyFrequency={medication.weeklyFrequency} />
          )}
        </Box>
        <Box>
          <Button variant="contained" size="small" onClick={() => deleteHandler(medication.name)}>
            Delete
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default MedicationItem;
