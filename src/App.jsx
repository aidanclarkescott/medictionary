import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AddMedication from "./pages/AddMedication";
import MyMedications from "./pages/MyMedications";
import PersonalInfo from "./pages/PersonalInfo";
import { getUser, updateUser } from "./services/user";

function App() {
  const [userToken, setUserToken] = useState("0");
  const [userData, setUserData] = useState({ name: "", age: "", sex: "", conditions: [], medications: [] });

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUser(userToken);

      setUserData(data);
    };

    fetchUserData();
  }, [userToken]);

  const updateInfo = async (newInfo) => {
    const updatedUser = await updateUser(userToken, newInfo);
    setUserData(updatedUser);
  };

  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-medication" element={<AddMedication user={userData} updateUser={updateInfo} />} />
          <Route path="/my-medications" element={<MyMedications user={userData} updateUser={updateInfo} />} />
          <Route path="/personal-info" element={<PersonalInfo user={userData} updateUser={updateInfo} />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
