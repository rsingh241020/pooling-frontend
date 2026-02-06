import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">

      <Header />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center 
                          py-20 md:py-32 px-4 sm:px-6">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Share Your Ride. Save Money. Save Earth 🌍
        </h2>

        <p className="mt-6 text-base sm:text-lg md:text-xl 
                      max-w-xl md:max-w-3xl mx-auto">
          RidePool is India’s smartest car pooling platform connecting drivers
          and passengers traveling in the same direction.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row 
                        justify-center gap-4">

          <button className="bg-white text-blue-600 px-6 py-3 
                             rounded font-bold shadow w-full sm:w-auto">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 
                             rounded font-bold w-full sm:w-auto">
            Learn More
          </button>

        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-16 md:py-20 px-4 sm:px-10 text-center bg-white">

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Why RidePool?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                        gap-6 md:gap-10 mt-10 md:mt-12">

          <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow">
            <h4 className="text-lg md:text-xl font-bold text-blue-600">
              💸 Save Fuel Cost
            </h4>
            <p className="mt-3 text-gray-600 text-sm md:text-base">
              Share fuel cost with co-travelers and reduce expenses.
            </p>
          </div>

          <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow">
            <h4 className="text-lg md:text-xl font-bold text-purple-600">
              👥 Meet New People
            </h4>
            <p className="mt-3 text-gray-600 text-sm md:text-base">
              Travel with verified profiles safely.
            </p>
          </div>

          <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow">
            <h4 className="text-lg md:text-xl font-bold text-green-600">
              🌱 Eco Friendly
            </h4>
            <p className="mt-3 text-gray-600 text-sm md:text-base">
              Reduce carbon footprint and traffic.
            </p>
          </div>

        </div>
      </section>

      {/* CAREERS */}
      <section className="py-16 md:py-20 px-4 sm:px-10 bg-white text-center">

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Careers at RidePool
        </h3>

        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl mx-auto">
          Join us and help build the future of urban mobility.
        </p>

        <button
          onClick={() => navigate("/careers")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white 
                     rounded shadow w-full sm:w-auto"
        >
          View Open Positions
        </button>
      </section>

      {/* CONTACT */}
      <section className="py-16 md:py-20 px-4 sm:px-10 
                          bg-gray-900 text-white text-center">

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Contact Us
        </h3>

        <p className="mt-4 text-sm sm:text-base">
          📧 support@ridepool.com
        </p>

        <p className="mt-2 text-sm sm:text-base">
          📞 +91 7903651757
        </p>

      </section>

      <Footer />

    </div>
  );
}
