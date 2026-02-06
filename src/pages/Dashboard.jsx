import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    navigate(`/book-ride?from=${from}&to=${to}&date=${date}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <Header />

      <div className="flex-grow px-4 sm:px-6 md:px-8 pt-24 pb-10">

        {/* Greeting */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Hi {user?.name || "User"} 👋
        </h1>

        {/* SEARCH RIDE CARD */}
        <div className="bg-white p-4 sm:p-6 rounded shadow mb-6">

          <h2 className="text-lg sm:text-xl font-bold mb-4">
            Find a Ride
          </h2>

          <div className="flex flex-col md:flex-row gap-3">

            <input
              placeholder="From"
              className="border p-2 rounded w-full"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />

            <input
              placeholder="To"
              className="border p-2 rounded w-full"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <input
              type="date"
              className="border p-2 rounded w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto"
            >
              Search Ride
            </button>

          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">

          <div
            onClick={() => navigate("/create-ride")}
            className="bg-green-600 text-white p-5 sm:p-6 rounded shadow cursor-pointer text-center text-sm sm:text-base"
          >
            🚗 Create Ride
          </div>

          <div
            onClick={() => navigate("/my-bookings")}
            className="bg-purple-600 text-white p-5 sm:p-6 rounded shadow cursor-pointer text-center text-sm sm:text-base"
          >
            📌 Book Ride
          </div>

          <div
            onClick={() => navigate("/profile")}
            className="bg-gray-800 text-white p-5 sm:p-6 rounded shadow cursor-pointer text-center text-sm sm:text-base"
          >
            👤 Profile
          </div>

        </div>

        {/* USER STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="font-bold text-lg sm:text-xl">
              My Rides
            </h3>
            <p className="text-xl sm:text-2xl">3</p>
          </div>

          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="font-bold text-lg sm:text-xl">
              My Bookings
            </h3>
            <p className="text-xl sm:text-2xl">2</p>
          </div>

          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="font-bold text-lg sm:text-xl">
              Wallet
            </h3>
            <p className="text-xl sm:text-2xl">₹0</p>
          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}
