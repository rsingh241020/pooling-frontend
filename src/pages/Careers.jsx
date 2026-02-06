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
          Join our mission to build smart and sustainable mobility solutions 🚗
        </p>

        {/* Why Join Us */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h3 className="text-2xl font-bold mb-3">🌟 Why RidePool?</h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Work on real-world full-stack products</li>
            <li>Learn modern tech stack</li>
            <li>Innovative startup environment</li>
            <li>Growth & learning opportunities</li>
          </ul>
        </div>

        {/* Resume Section Only */}
        <div className="grid grid-cols-1 gap-6">

          <div className="bg-white p-8 rounded-xl shadow-md border text-center">

            <h4 className="text-2xl font-bold text-gray-800">
              📄 Send Your Resume
            </h4>

            <p className="text-gray-600 mt-3">
              Currently we don’t have open positions,
              but you can share your resume for future opportunities.
            </p>

            <a
              href="mailto:hrridepool@gmail.com"
              className="inline-block mt-5 text-blue-600 font-semibold text-lg hover:text-blue-800"
            >
              hrridepool@gmail.com
            </a>

          </div>

        </div>

        {/* Contact */}
        <div className="bg-white p-6 rounded shadow mt-10 text-center">
          <h3 className="text-2xl font-bold mb-2">📩 Contact Us</h3>
          <p className="text-gray-600">
            For career queries mail us at <b>hrridepool@gmail.com</b>
          </p>
        </div>

      </div>

      <Footer />

    </div>
  );
}
