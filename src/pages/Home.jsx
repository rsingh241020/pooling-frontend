import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50">

      <Header />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-32 px-6">
        <h2 className="text-5xl font-bold">Share Your Ride. Save Money. Save Earth 🌍</h2>
        <p className="mt-6 text-xl max-w-3xl mx-auto">
          RidePool is India’s smartest car pooling platform connecting drivers and passengers
          traveling in the same direction.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded font-bold shadow">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded font-bold">
            Learn More
          </button>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-20 px-10 text-center bg-white">
        <h3 className="text-4xl font-bold">Why RidePool?</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="bg-gray-100 p-8 rounded-xl shadow">
            <h4 className="text-xl font-bold text-blue-600">💸 Save Fuel Cost</h4>
            <p className="mt-3 text-gray-600">
              Share fuel cost with co-travelers and reduce your monthly expenses.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl shadow">
            <h4 className="text-xl font-bold text-purple-600">👥 Meet New People</h4>
            <p className="mt-3 text-gray-600">
              Travel with people going in the same direction. Safe & verified profiles.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl shadow">
            <h4 className="text-xl font-bold text-green-600">🌱 Eco Friendly</h4>
            <p className="mt-3 text-gray-600">
              Reduce carbon footprint by reducing number of cars on roads.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-10 bg-gray-100 text-center">
        <h3 className="text-4xl font-bold">About RidePool</h3>
        <p className="mt-6 max-w-4xl mx-auto text-gray-700 text-lg">
          RidePool is a modern AI-powered ride sharing platform designed to make
          daily commuting affordable and sustainable. Our mission is to reduce
          traffic congestion and pollution by encouraging car pooling.
        </p>

        <p className="mt-4 max-w-4xl mx-auto text-gray-600">
          We provide secure ride matching, real-time search, driver verification,
          and seamless booking experience for passengers and drivers.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-10 bg-white text-center">
        <h3 className="text-4xl font-bold">How It Works</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="p-6 border rounded-xl shadow">
            <h4 className="text-xl font-bold">1️⃣ Register</h4>
            <p className="mt-2 text-gray-600">Create your free account.</p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h4 className="text-xl font-bold">2️⃣ Search or Create Ride</h4>
            <p className="mt-2 text-gray-600">Drivers post rides, passengers search.</p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <h4 className="text-xl font-bold">3️⃣ Book & Travel</h4>
            <p className="mt-2 text-gray-600">Confirm booking and enjoy the ride.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-10 bg-gray-100 text-center">
        <h3 className="text-4xl font-bold">What Users Say</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="bg-white p-6 rounded-xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-3 text-gray-600">
              "RidePool helped me save ₹3000 per month on fuel!"
            </p>
            <p className="mt-2 font-bold">- Rohit Kumar</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-3 text-gray-600">
              "Very easy to find ride partners. Great app!"
            </p>
            <p className="mt-2 font-bold">- Anjali Singh</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-3 text-gray-600">
              "Eco-friendly and budget friendly. Love it!"
            </p>
            <p className="mt-2 font-bold">- Aman Verma</p>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="py-20 px-10 bg-white text-center">
        <h3 className="text-4xl font-bold">Careers at RidePool</h3>
        <p className="mt-4 text-gray-600 text-lg">
          Join us and help build the future of urban mobility.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded shadow">
          View Open Positions
        </button>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-10 bg-gray-900 text-white text-center">
        <h3 className="text-4xl font-bold">Contact Us</h3>
        <p className="mt-4">📧 support@ridepool.com</p>
        <p className="mt-2">📞 +91 98765 43210</p>
      </section>

      <Footer />
    </div>
  );
}
