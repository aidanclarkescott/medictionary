import React, { useState } from "react";
import { Typography, Container, TextField, Button, Box } from "@mui/material";

const AddMedication = ({ addMedication }) => {
  const [medName, setMedName] = useState();
  const [dosage, setDosage] = useState();
  const [numPills, setNumPills] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [frequency, setFrequency] = useState();

  const submitForm = () => {
    if (medName === "" || dosage === "" || numPills === "" || totalAmount === "" || frequency === "") return;

    addMedication({ name: medName, dosage, numPills, totalAmount, frequency });

    setMedName("");
    setDosage("");
    setNumPills("");
    setTotalAmount("");
    setFrequency("");
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        Add Medication
      </Typography>
      <Box sx={{ width: "20%", display: "flex", flexDirection: "column" }}>
        <TextField
          placeholder={"Medication Name"}
          value={medName}
          variant="standard"
          onChange={({ target }) => setMedName(target.value)}
          sx={{ paddingBottom: "10px" }}
        />
        <TextField
          placeholder={"Dosage (mg)"}
          value={dosage}
          variant="standard"
          onChange={({ target }) => setDosage(target.value)}
          sx={{ paddingBottom: "10px" }}
        />
        <TextField
          placeholder={"Number of Pills per Dose"}
          value={numPills}
          variant="standard"
          onChange={({ target }) => setNumPills(target.value)}
          sx={{ paddingBottom: "10px" }}
        />
        <TextField
          placeholder={"Total Pills"}
          value={totalAmount}
          variant="standard"
          onChange={({ target }) => setTotalAmount(target.value)}
          sx={{ paddingBottom: "10px" }}
        />
        <TextField
          placeholder={"Frequency"}
          value={frequency}
          variant="standard"
          onChange={({ target }) => setFrequency(target.value)}
          sx={{ paddingBottom: "10px" }}
        />
      </Box>
      <Button variant="contained" onClick={submitForm}>
        Add Medication
      </Button>
    </Container>
  );
};

export default AddMedication;
