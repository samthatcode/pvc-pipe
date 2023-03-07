import { useState, useEffect } from "react";
import "./App.css";
import { Home, DeliveryInProgress, ConfirmSubmitRequest  } from "./pages";
import { personDetails } from "./data/index.js";
import VerifyModal from "./components/VerifyModal";
import { Route, Routes } from "react-router-dom";
import DeliveryDetails from "./pages/DeliveryDetails";
import DeliveryStatus from "./pages/DeliveryStatus";
// import Verification from "./components/Verification";

function App() {
  const [user, setUser] = useState("samthatcode");
  const [personDetailsDeliveryInput, setpersonDetailsDeliveryInput] = useState(
    {}
  );

  useEffect(() => {
    setpersonDetailsDeliveryInput(personDetails);
  }, []);

  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<DeliveryInProgress person={personDetailsDeliveryInput} />} />
        <Route path="/details" element={<DeliveryDetails />} />
        <Route path="/confirm" element={<ConfirmSubmitRequest person={personDetailsDeliveryInput} />} />
        <Route path="/status" element={<DeliveryStatus />} />
      </Routes>
    </div>
  );
}

export default App;
