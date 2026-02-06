import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Auto redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Enter Email & Password");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/users/login", {
        email,
        password
      });

      console.log("Login Response:", response.data);

      // Save Token + User
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));

      alert("Login Success 🎉");
      navigate("/dashboard");

    } catch (err) {
      console.error("Login Failed", err);
      alert(err.response?.data?.message || "Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="bg-white p-8 rounded-xl shadow-xl w-96">

          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Welcome Back
          </h2>

          <input
            className="w-full border p-2 mb-3 rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full border p-2 mb-4 rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center mt-4 text-sm">
            Don’t have an account?
            <span 
              className="text-blue-600 cursor-pointer ml-1 font-bold"
              onClick={() => navigate("/register")}
            >
              Register Now
            </span>
          </p>

        </div>
      </div>

      <Footer />
    </div>
  );
}
