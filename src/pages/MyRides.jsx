import { useEffect, useState } from "react";
import API from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyRides() {

  const [rides, setRides] = useState([]);

  useEffect(() => {
    API.get("/rides/my")
      .then(res => {
        console.log("MY RIDES:", res.data);
        setRides(res.data);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="p-10 pt-20 flex-grow">
        <h2 className="text-2xl font-bold mb-4">My Created Rides</h2>

        {rides.length === 0 && <p>No rides created</p>}

        {rides.map(r => (
          <div key={r.id} className="bg-white p-4 mb-3 rounded shadow">
            <p><b>{r.fromLocation} → {r.toLocation}</b></p>
            <p>Date: {r.rideDate} | Time: {r.rideTime}</p>
            <p>Seats: {r.availableSeats}/{r.totalSeats}</p>
            <p>Price: ₹{r.price}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
