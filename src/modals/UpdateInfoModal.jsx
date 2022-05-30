import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const UpdateInfoModal = ({ name, age, sex, conditions, open, setClosed, updateInfo }) => {
  const [newName, setNewName] = useState(name);
  const [newAge, setNewAge] = useState(age);
  const [newSex, setNewSex] = useState(sex);
  const [newCondition, setNewCondition] = useState("");
  const [newConditions, setNewConditions] = useState(conditions);

  useEffect(() => {
    setNewName(name);
    setNewAge(age);
    setNewSex(sex);
    setNewConditions(conditions);
  }, [name, age, sex, conditions]);

  const submitForm = () => {
    updateInfo({ name: newName, age: newAge, sex: newSex, conditions: newConditions });
    setNewCondition("");
    setClosed();
  };

  const closeModal = () => {
    setNewCondition("");
    setClosed();
  };

  const addCondition = () => {
    if (
      newCondition === "" ||
      newConditions.map((c) => c.trim().toLowerCase()).includes(newCondition.trim().toLowerCase())
    )
      return;
    setNewConditions([...newConditions, newCondition]);
    setNewCondition("");
  };

  const removeCondition = (condition) => {
    if (condition === "") return;
    setNewConditions(newConditions.filter((c) => c !== condition));
  };

  return (
    <Modal open={open} onClose={closeModal}>
      <Box sx={modalStyle}>
        <Box sx={{ display: "flex", flexDirection: "column", maxHeight: "90%" }}>
          <TextField
            placeholder={"Name"}
            value={newName}
            variant="standard"
            onChange={({ target }) => setNewName(target.value)}
            sx={{ paddingBottom: "10px" }}
          />
          <TextField
            placeholder={"Age"}
            value={newAge}
            variant="standard"
            onChange={({ target }) => setNewAge(target.value)}
            sx={{ paddingBottom: "10px" }}
          />
          <FormControl>
            <FormLabel>Sex</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={newSex}
              onChange={({ target }) => setNewSex(target.value)}
            >
              <Box>
                <FormControlLabel value="Female" control={<Radio size="small" />} label="Female" />
                <FormControlLabel value="Male" control={<Radio size="small" />} label="Male" />
                <FormControlLabel value="Other" control={<Radio size="small" />} label="Other" />
              </Box>
            </RadioGroup>
          </FormControl>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              placeholder={"New Condition"}
              value={newCondition}
              variant="standard"
              onChange={({ target }) => setNewCondition(target.value)}
              sx={{ width: "60%", paddingBottom: "10px" }}
            />
            <Button variant="contained" size="medium" sx={{ height: "80%" }} onClick={addCondition}>
              Add Condition
            </Button>
          </Box>

          <Typography variant="h6" sx={{ marginBottom: "5px" }}>
            Conditions:
          </Typography>
          <Box sx={{ height: "30%", overflow: "auto" }}>
            {newConditions.map((condition, index) => (
              <Box key={index}>
                <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <Typography variant="body1">{condition}</Typography>
                  <Button variant="contained" size="small" onClick={() => removeCondition(condition)}>
                    Remove
                  </Button>
                </Box>
                <hr />
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <Button variant="contained" onClick={submitForm}>
            Save Changes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UpdateInfoModal;
