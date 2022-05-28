import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AddMedication from "./pages/AddMedication";

function App() {
  const [medications, setMedications] = useState([]);

  const addMedication = (medication) => {
    setMedications([...medications, medication]);
  };

  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home medications={medications} />} />
          <Route path="/add-medication" element={<AddMedication addMedication={addMedication} />} />
          <Route path="/your-medications" element={<AddMedication medications={medications} />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
