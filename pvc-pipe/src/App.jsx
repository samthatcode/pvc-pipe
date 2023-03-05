import { useState } from "react";
import "./App.css";
import { Home } from './pages'
import { DeliveryInProgress } from "./pages";

function App() {
  const [user, setUser] = useState("samthatcode");

  return (
    <div className="font-poppins">
      <Home />
      {/* <DeliveryInProgress /> */}
    </div>
  );
}

export default App;
