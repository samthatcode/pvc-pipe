import { useState, useEffect } from "react";
import "./App.css";
import { Home, DeliveryInProgress, ConfirmSubmitRequest } from "./pages";
import { personDetails } from "./data/index.js";
import VerifyModal from "./components/VerifyModal";
import { Route, Routes } from "react-router-dom";
import DeliveryDetails from "./pages/DeliveryDetails";
import DeliveryStatus from "./pages/DeliveryStatus";
// import Verification from "./components/Verification";
import axios from "axios";

function App() {
  const [personDetailsInput, setpersonDetailsInput] = useState({});

  useEffect(() => {
    // setpersonDetailsInput(personDetails);
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const data = response.data.results[0];
        setpersonDetailsInput({
          firstName: data.name.first,
          lastName: data.name.last,
          photo: data.picture.large,
          sex: data.gender,
          phoneNumber: data.phone,
          vinNo: generateVinNo(),
          dob: new Date(data.dob.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          state: data.location.state,
          lga: data.location.city,
          code: generateRandomNumber(),
          address: `${data.location.street.name}, ${data.location.street.number}`,
          pickupLocation: `${data.location.street.name}, ${data.location.street.number}`,
        });
      })
      .catch((error) => console.error(error));
  }, []);

  // Generates a random unique 10-character VIN number
  function generateVinNo() {
    const chars = "0123456789";
    let vin = "";
    while (vin.length < 10) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      if (vin.indexOf(randomChar) === -1) {
        vin += randomChar;
      }
    }
    return vin;
  }

  // function to get Delimition code
  function generateRandomNumber() {
    const firstTwo = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");
    const secondTwo = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");
    const thirdTwo = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0");
    const lastThree = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    return `${firstTwo}-${secondTwo}-${thirdTwo}-${lastThree}`;
  }

  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/track"
          element={<DeliveryInProgress person={personDetailsInput} />}
        />
        <Route path="/details" element={<DeliveryDetails />} />
        <Route
          path="/confirm"
          element={<ConfirmSubmitRequest person={personDetailsInput} />}
        />
        <Route path="/status" element={<DeliveryStatus />} />
      </Routes>
    </div>
  );
}

export default App;
