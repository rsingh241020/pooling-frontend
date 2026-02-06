import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await API.post("/users/register", {
        name,
        email,
        password,
        phone
      });

      alert("Registration Successful 🎉");
      navigate("/login");

    } catch (err) {
      console.error(err);
      alert("Registration Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT (IMPORTANT pt-20) */}
      <div className="flex-grow pt-20 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">

          <h2 className="text-3xl font-bold text-center text-blue-600">
            Create Account
          </h2>

          <form onSubmit={handleRegister} className="mt-6 space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded focus:outline-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded focus:outline-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded focus:outline-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded focus:outline-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition"
            >
              {loading ? "Registering..." : "Register"}
            </button>

          </form>

          <p className="text-center mt-4 text-sm">
            Already have an account?
            <span 
              className="text-blue-600 cursor-pointer ml-1 font-bold"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
