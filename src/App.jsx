import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AddMedication from "./pages/AddMedication";
import MyMedications from "./pages/MyMedications";
import PersonalInfo from "./pages/PersonalInfo";

function App() {
  const [medications, setMedications] = useState([]);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {}, [user]);

  const addMedication = (medication) => {
    setMedications([...medications, medication]);
  };

  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home medications={medications} />} />
          <Route path="/add-medication" element={<AddMedication addMedication={addMedication} />} />
          <Route path="/my-medications" element={<MyMedications medications={medications} />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
