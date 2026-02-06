import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateRide from "./pages/CreateRide";
import BookRide from "./pages/BookRide";
import MyBookings from "./pages/MyBookings";
import Profile from "./pages/Profile";
import MyRides from "./pages/MyRides";

export default function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute><Dashboard /></ProtectedRoute>
      } />

      <Route path="/create-ride" element={
        <ProtectedRoute><CreateRide /></ProtectedRoute>
      } />

      <Route path="/book-ride" element={
        <ProtectedRoute><BookRide /></ProtectedRoute>
      } />

      <Route path="/my-bookings" element={
        <ProtectedRoute><MyBookings /></ProtectedRoute>
      } />

      <Route path="/profile" element={
        <ProtectedRoute><Profile /></ProtectedRoute>
      } />
      <Route path="/my-rides" element={
  <ProtectedRoute><MyRides /></ProtectedRoute>
} />


    </Routes>
  );
}
