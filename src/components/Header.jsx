import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged Out");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full h-16 bg-white shadow z-50 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6">

        <h1 className="text-2xl font-bold text-blue-600">RidePool</h1>

        {/* Center Menu */}
        <div className="flex gap-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/Dashboard">DashBoard</Link>
        </div>

        {/* Right Side Auth Buttons */}
        <div className="flex gap-3 items-center">

          {/* If NOT logged in */}
          {!token && (
            <>
              <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded">
                Login
              </Link>
              <Link to="/register" className="px-4 py-2 border border-blue-600 text-blue-600 rounded">
                Register
              </Link>
            </>
          )}

          {/* If logged in */}
          {token && (
            <>
              <span className="font-bold text-blue-600">
                👤 {user?.name || "User"}
              </span>

              <button 
                onClick={logout} 
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}
