import { useState, useEffect } from "react";
import "./App.css";
import { Home } from "./pages";
import { DeliveryInProgress } from "./pages";
import { personDetails } from "./data/index.js";

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
      {/* <Home /> */}

      <DeliveryInProgress person={personDetailsDeliveryInput} />
    </div>
  );
}

export default App;
