import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RideList() {

  const [rides, setRides] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  useEffect(() => {
    setLoading(true);
    setError("");

    let url = "/rides"; // default all rides

    // ✅ Search filter
    if (from && to && date) {
      url = `/rides/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`;
    }

    API.get(url)
      .then(res => {
        console.log("Backend Data:", res.data);
        setRides(res.data);
      })
      .catch(err => {
        console.error("API Error", err);
        setError("Failed to fetch rides");
      })
      .finally(() => setLoading(false));

  }, [from, to, date]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Header />

      <div className="p-6 pt-20 flex-grow">

        <h2 className="text-2xl font-bold mb-4">
          {from && to 
            ? `Rides from ${from} → ${to} (${date})` 
            : "Available Rides"}
        </h2>

        {/* Loading */}
        {loading && <p className="text-blue-600">Loading rides...</p>}

        {/* Error */}
        {error && <p className="text-red-600">{error}</p>}

        {/* No Data */}
        {!loading && rides.length === 0 && (
          <p className="text-gray-600">No rides found 🚫</p>
        )}

        {/* Ride Cards */}
        {rides.map((ride) => (
          <div key={ride.id} className="bg-white p-4 mb-3 rounded shadow hover:shadow-lg transition">

            <p className="font-bold text-lg">
              {ride.fromLocation} → {ride.toLocation}
            </p>

            <p>Date: {ride.rideDate} | Time: {ride.rideTime}</p>
            <p>Seats: {ride.availableSeats}/{ride.totalSeats}</p>
            <p>Price: ₹{ride.price}</p>
            <p>Driver: {ride.driverName}</p>

            {/* BOOK BUTTON */}
            <button 
              onClick={() => navigate(`/book/${ride.id}`)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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
