import React, { useState } from "react";
import { Typography, Container, TextField, Button } from "@mui/material";

const AddMedication = ({ addMedication }) => {
  const [medName, setMedName] = useState("");
  const [dosage, setDosage] = useState("");
  const [numPills, setNumPills] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const submitForm = () => {
    if (medName === "" || dosage === "" || numPills === "" || totalAmount === "") return;

    addMedication({ name: medName, dosage, numPills, totalAmount });

    setMedName("");
    setDosage("");
    setNumPills("");
    setTotalAmount("");
  };

  return (
    <Container>
      <Typography variant="h2">Add Medication</Typography>
      <TextField
        placeholder={"Medication Name"}
        value={medName}
        variant="standard"
        onChange={({ target }) => setMedName(target.value)}
        sx={{ paddingBottom: "10px" }}
      />
      <br />
      <TextField
        placeholder={"Dosage (mg)"}
        value={dosage}
        variant="standard"
        onChange={({ target }) => setDosage(target.value)}
        sx={{ paddingBottom: "10px" }}
      />
      <br />
      <TextField
        placeholder={"Number of Pills per Dose"}
        value={numPills}
        variant="standard"
        onChange={({ target }) => setNumPills(target.value)}
        sx={{ paddingBottom: "10px" }}
      />
      <br />
      <TextField
        placeholder={"Total Pills"}
        value={totalAmount}
        variant="standard"
        onChange={({ target }) => setTotalAmount(target.value)}
        sx={{ paddingBottom: "10px" }}
      />
      <br />
      <Button variant="contained" onClick={submitForm}>
        Add Medication
      </Button>
    </Container>
  );
};

export default AddMedication;
