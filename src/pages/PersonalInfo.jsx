import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import UpdateInfoModal from "../modals/UpdateInfoModal";
import { getUser, updateUser } from "../services/user";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [conditions, setConditions] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUser("0");
      console.log(data);

      setName(data.name);
      setAge(data.age);
      setSex(data.sex);
      setConditions(data.conditions);
    };

    fetchUserData();
  }, []);

  const updateInfo = async (newInfo) => {
    const updatedUser = await updateUser("0", newInfo);
    setName(updatedUser.name);
    setAge(updatedUser.age);
    setSex(updatedUser.sex);
    setConditions(updatedUser.conditions);
  };

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

      <UpdateInfoModal
        open={open}
        setClosed={() => setOpen(false)}
        name={name}
        age={age}
        sex={sex}
        conditions={conditions}
        updateInfo={updateInfo}
      />
    </Container>
  );
};

export default PersonalInfo;
