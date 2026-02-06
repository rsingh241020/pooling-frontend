import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Header />

      <div className="p-10 pt-20 flex-grow max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">
          About RidePool
        </h2>

        <p className="text-lg text-gray-700 text-center mb-8">
          RidePool is a smart car pooling platform designed to help people share rides, 
          reduce travel costs, and protect the environment.
        </p>

        {/* Mission Section */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h3 className="text-2xl font-bold mb-3">🚀 Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to make transportation affordable, eco-friendly, and social by 
            connecting drivers with passengers traveling in the same direction.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <h4 className="text-xl font-bold">💸 Save Money</h4>
            <p className="text-gray-600 mt-2">Split fuel costs with co-riders.</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <h4 className="text-xl font-bold">🌍 Eco Friendly</h4>
            <p className="text-gray-600 mt-2">Reduce carbon footprint by sharing rides.</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <h4 className="text-xl font-bold">🤝 Community</h4>
            <p className="text-gray-600 mt-2">Meet people traveling the same route.</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold mb-3">🛠 Technology Stack</h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Frontend: React + Tailwind CSS</li>
            <li>Backend: Spring Boot + JWT Security</li>
            <li>Database: PostgreSQL</li>
          </ul>
        </div>

      </div>

      <Footer />

    </div>
  );
}
