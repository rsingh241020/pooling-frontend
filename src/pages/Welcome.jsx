import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-80 text-center">
        <h1 className="text-xl font-bold mb-6">Pooling App 🚗</h1>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-blue-600 text-white py-2 rounded mb-3"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}
