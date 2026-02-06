import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BookRide() {

  const navigate = useNavigate();

  const [rides, setRides] = useState([]);
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  // ✅ FINAL BOOKING LOGIC
  const handleBookRide = async (rideId) => {
    try {
      await API.post("/bookings", {
        rideId: rideId,
        seats: 1
      });

      alert("Your Ride is Booked ✅");
      navigate("/my-bookings");

    } catch (err) {
      console.error("BOOKING ERROR:", err.response?.data || err);
      alert("Booking Failed ❌");
    }
  };

  useEffect(() => {
    console.log("FROM:", from);
    console.log("TO:", to);
    console.log("DATE:", date);

    if (from && to && date) {
      API.get(`/rides/search?from=${from}&to=${to}&date=${date}`)
        .then(res => {
          console.log("RIDES:", res.data);
          setRides(res.data);
        })
        .catch(err => console.error("API ERROR:", err));
    }
  }, [from, to, date]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="p-10 pt-20 flex-grow">
        <h2 className="text-2xl font-bold mb-4">
          Rides from {from} → {to}
        </h2>

        {rides.length === 0 && <p>No rides found</p>}

        {rides.map(ride => (
          <div key={ride.id} className="bg-white p-4 mb-3 rounded shadow">
            <p><b>{ride.fromLocation} → {ride.toLocation}</b></p>
            <p>Date: {ride.rideDate} | Time: {ride.rideTime}</p>
            <p>Seats: {ride.availableSeats}/{ride.totalSeats}</p>
            <p>Price: ₹{ride.price}</p>

            <button
              onClick={() => handleBookRide(ride.id)}
              className="bg-blue-600 text-white px-3 py-1 rounded mt-2"
            >
              Book Ride
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
