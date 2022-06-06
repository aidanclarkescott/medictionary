import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import UpdateInfoModal from "../modals/UpdateInfoModal";

const PersonalInfo = ({ user, updateUser }) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [sex, setSex] = useState(user.sex);
  const [conditions, setConditions] = useState(user.conditions);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setName(user.name);
    setAge(user.age);
    setSex(user.sex);
    setConditions(user.conditions);
  }, [user]);

  return (
    <Container>
      <Typography variant="h2" sx={{ paddingBottom: "20px" }}>
        My Information
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">Name: {name}</Typography>
        <Typography variant="body1">Age: {age}</Typography>
        <Typography variant="body1">Sex: {sex}</Typography>
        <Typography variant="body1">Conditions:</Typography>
        <Box>
          <ul style={{ margin: 0 }}>
            {conditions?.map((condition, index) => (
              <li key={index}>
                <Typography variant="body1">{condition}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>

      <Button variant="contained" onClick={() => setOpen(true)} sx={{ marginTop: "10px" }}>
        Update Information
      </Button>

      <UpdateInfoModal open={open} setClosed={() => setOpen(false)} user={user} updateInfo={updateUser} />
    </Container>
  );
};

export default PersonalInfo;
