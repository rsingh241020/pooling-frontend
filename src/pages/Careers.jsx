import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Header />

      <div className="p-10 pt-20 flex-grow max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Careers at RidePool
        </h2>

        <p className="text-lg text-center text-gray-700 mb-10">
          Join our team and help shape the future of smart and sustainable mobility 🚗
        </p>

        {/* Why Join Us */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h3 className="text-2xl font-bold mb-3">🌟 Why Join RidePool?</h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Work on real-world full-stack products</li>
            <li>Learn modern tech stack and scalable systems</li>
            <li>Collaborative and innovative team culture</li>
            <li>Growth-oriented startup environment</li>
          </ul>
        </div>

        {/* Open Positions */}
        <h3 className="text-2xl font-bold mb-4">🚀 Open Positions</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Job Card */}
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold">Frontend Developer</h4>
            <p className="text-gray-600 mt-2">React, Tailwind CSS</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Apply Now
            </button>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold">Backend Developer</h4>
            <p className="text-gray-600 mt-2">Spring Boot, PostgreSQL</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Apply Now
            </button>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-bold">UI/UX Designer</h4>
            <p className="text-gray-600 mt-2">Figma, Product Design</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Apply Now
            </button>
          </div>

        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 rounded shadow mt-10 text-center">
          <h3 className="text-2xl font-bold mb-2">📩 Contact Us</h3>
          <p className="text-gray-600">
            Send your resume to <b>careers@ridepool.com</b>
          </p>
        </div>

      </div>

      <Footer />

    </div>
  );
}
