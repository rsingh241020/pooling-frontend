import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged Out");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          RidePool
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/Dashboard">DashBoard</Link>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-3 items-center">

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

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 flex flex-col gap-4 font-medium">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
          <Link to="/Dashboard" onClick={() => setMenuOpen(false)}>DashBoard</Link>

          <hr />

          {!token && (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded text-center"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded text-center"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}

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
      )}
    </nav>
  );
}
