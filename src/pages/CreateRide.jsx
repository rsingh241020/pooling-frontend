import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CreateRide() {

  const navigate = useNavigate(); // 🔥 ADD THIS

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("");
  const [price, setPrice] = useState("");

  const handleCreateRide = async () => {
    try {
      await API.post("/rides", {
        fromLocation: from,
        toLocation: to,
        rideDate: date,
        rideTime: time,
        totalSeats: seats,
        price: price
      });

      alert("Ride Created Successfully 🚗");

      // 🔥 REDIRECT HERE
      //navigate("/dashboard"); 
      navigate("/my-rides");

    } catch (err) {
      console.error(err);
      alert("Failed to create ride");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="p-10 pt-20 flex-grow">
        <h2 className="text-2xl font-bold mb-4">Create Ride</h2>

        <div className="bg-white p-6 rounded shadow w-96 space-y-3">
          <input placeholder="From" className="border p-2 w-full" onChange={e => setFrom(e.target.value)} />
          <input placeholder="To" className="border p-2 w-full" onChange={e => setTo(e.target.value)} />
          <input type="date" className="border p-2 w-full" onChange={e => setDate(e.target.value)} />
          <input type="time" className="border p-2 w-full" onChange={e => setTime(e.target.value)} />
          <input placeholder="Seats" className="border p-2 w-full" onChange={e => setSeats(e.target.value)} />
          <input placeholder="Price ₹" className="border p-2 w-full" onChange={e => setPrice(e.target.value)} />

          <button
            onClick={handleCreateRide}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Create Ride
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
