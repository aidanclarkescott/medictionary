import React, { useState } from "react";
import {
  Typography,
  Container,
  TextField,
  Button,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import WeekdayPicker from "../components/WeekDayPicker";

const AddMedication = ({ user, updateUser }) => {
  const [medName, setMedName] = useState("");
  const [dosage, setDosage] = useState("");
  const [numPills, setNumPills] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [frequency, setFrequency] = useState("");
  const [weeklyFrequency, setWeeklyFrequency] = useState({});

  const submitForm = () => {
    if (medName === "" || dosage === "" || numPills === "" || totalAmount === "" || frequency === "") return;
    if (frequency === "Weekly" && !Object.values(weeklyFrequency).some((value) => value)) return;

    let updatedUser;

    if (frequency === "Weekly") {
      updatedUser = {
        ...user,
        medications: [
          ...user.medications,
          { name: medName, dosage, numPills, totalAmount, frequency, weeklyFrequency },
        ],
      };
    } else {
      updatedUser = {
        ...user,
        medications: [...user.medications, { name: medName, dosage, numPills, totalAmount, frequency }],
      };
    }

    updateUser(updatedUser);

    setMedName("");
    setDosage("");
    setNumPills("");
    setTotalAmount("");
    setFrequency("");
    setWeeklyFrequency({});
  };

  const toggleDay = (day) => {
    setWeeklyFrequency({ ...weeklyFrequency, [day]: !weeklyFrequency[day] });
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        Add Medication
      </Typography>
      <Box sx={{ width: "500px", display: "flex", flexDirection: "column" }}>
        <TextField
          placeholder={"Medication Name"}
          value={medName}
          variant="standard"
          onChange={({ target }) => setMedName(target.value)}
          sx={{ paddingBottom: "10px", width: "40%" }}
        />
        <TextField
          placeholder={"Dosage (mg)"}
          value={dosage}
          variant="standard"
          onChange={({ target }) => setDosage(target.value)}
          sx={{ paddingBottom: "10px", width: "40%" }}
        />
        <TextField
          placeholder={"Number of Pills per Dose"}
          value={numPills}
          variant="standard"
          onChange={({ target }) => setNumPills(target.value)}
          sx={{ paddingBottom: "10px", width: "40%" }}
        />
        <TextField
          placeholder={"Total Pills"}
          value={totalAmount}
          variant="standard"
          onChange={({ target }) => setTotalAmount(target.value)}
          sx={{ paddingBottom: "10px", width: "40%" }}
        />
        <FormControl>
          <FormLabel>Frequency</FormLabel>
          <RadioGroup value={frequency} onChange={({ target }) => setFrequency(target.value)}>
            <Box>
              <FormControlLabel value="Monthly" control={<Radio size="small" />} label="Monthly" />
              <FormControlLabel value="Bi-Monthly" control={<Radio size="small" />} label="Bi-Monthly" />
              <FormControlLabel value="Weekly" control={<Radio size="small" />} label="Weekly" />
              <FormControlLabel value="Daily" control={<Radio size="small" />} label="Daily" />
            </Box>
          </RadioGroup>
        </FormControl>
      </Box>

      {frequency === "Weekly" && <WeekdayPicker weeklyFrequency={weeklyFrequency} toggleDay={toggleDay} />}
      <Button variant="contained" onClick={submitForm} sx={{ marginTop: "15px" }}>
        Add Medication
      </Button>
    </Container>
  );
};

export default AddMedication;
