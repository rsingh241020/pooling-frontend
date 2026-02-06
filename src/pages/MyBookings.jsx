import { useEffect, useState } from "react";
import API from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyBookings() {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/bookings/my")
      .then(res => {
        console.log("MY BOOKINGS:", res.data);
        setBookings(res.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="p-6 pt-20 flex-grow max-w-3xl mx-auto">

        <h2 className="text-2xl font-bold mb-6 text-center">
          🚕 My Booked Rides
        </h2>

        {loading && <p className="text-center">Loading...</p>}

        {!loading && bookings.length === 0 && (
          <p className="text-center text-gray-500">
            No bookings found 🚫
          </p>
        )}

        {bookings.map(b => (
          <div
            key={b.id}
            className="bg-white p-5 mb-5 rounded-xl shadow-lg border"
          >

            {/* ROUTE */}
            <h3 className="text-lg font-bold mb-2">
              {b.ride.fromLocation} → {b.ride.toLocation}
            </h3>

            <div className="text-sm text-gray-700 space-y-1">
              <p>📅 Date: {b.ride.rideDate}</p>
              <p>⏰ Time: {b.ride.rideTime}</p>
              <p>💺 Seats Booked: {b.seatsBooked}</p>
              <p>💰 Price: ₹{b.ride.price}</p>
            </div>

            {/* DRIVER CARD */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-green-700 mb-1">
                🚗 Driver Details
              </p>

              <p>👤 {b.ride.driver.name}</p>
              <p>📧 {b.ride.driver.email}</p>
              <p>📱 {b.ride.driver.phone}</p>

              {/* ACTION BUTTONS */}
              <div className="flex gap-3 mt-3 flex-wrap">

                {/* CALL */}
                <a
                  href={`tel:${b.ride.driver.phone}`}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                >
                  📞 Call
                </a>

                {/* WHATSAPP */}
                <a
                  href={`https://wa.me/91${b.ride.driver.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                >
                  💬 WhatsApp
                </a>

                {/* EMAIL */}
                <a
                  href={`mailto:${b.ride.driver.email}`}
                  className="bg-gray-800 text-white px-3 py-1 rounded text-sm"
                >
                  ✉ Email
                </a>

              </div>
            </div>

          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
