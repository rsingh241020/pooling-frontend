import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="p-10 pt-20 flex-grow">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>

        <div className="bg-white p-6 rounded shadow w-96">
          <p><b>Name:</b> {user?.name}</p>
          <p><b>Email:</b> {user?.email}</p>
          <p><b>Phone:</b> {user?.phone}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
