// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="container mx-auto px-4 text-center">
//         <p className="mb-4">Phone: +91 8390000315</p>
//         <div className="flex justify-center space-x-4 mb-4">
//           <a href="https://wa.me/918390000315" className="text-green-400 hover:text-green-300">WhatsApp</a>
//           <a href="#" className="hover:text-gray-400">Facebook</a>
//           <a href="#" className="hover:text-gray-400">Instagram</a>
//         </div>
//         <div className="text-sm text-gray-500">
//           <a href="#" className="hover:text-gray-400">Privacy Policy</a>
//           <span className="mx-2">|</span>
//           <a href="#" className="hover:text-gray-400">Terms of Service</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  FaCheckCircle,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  // FaXTwitter,
  FaPinterest
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Column 1: How to Reach */}
        <div>
          <h2 className="text-2xl font-bold mb-4">How To Reach Trimbakeshwar Mandir</h2>
          <p className="text-gray-300 mb-6">
            To reach Trimbakeshwar Temple in Maharashtra, you can fly to Nashik Airport (39 km away from Mandir) or take a train to Nashik Road Railway Station (28 km away from Mandir). From Nashik, local city buses or taxis provide direct transport to Trimbak Village. It is also well-connected by road from Mumbai and Pune.
          </p>
          <div className="bg-orange-500 px-6 py-3 w-fit text-black font-bold">
            Enquire Us: +918600003956
          </div>
        </div>

        {/* Column 2: Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Use Full Links</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-orange-500" /> Home</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-orange-500" /> Privacy Policy</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-orange-500" /> Terms and Conditions</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-orange-500" /> Contact Guruji</li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Contact</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3"><FaMapMarkerAlt /> Trimbakeshwar Temple, Nashik</li>
            <li className="flex items-center gap-3"><FaEnvelope /> trimbakmandir@gmail.com</li>
            <li className="flex items-center gap-3">🕒 24×7 Availability</li>
            <li className="flex items-center gap-3"><FaPhoneAlt /> +91 8600003956</li>
          </ul>

          <div className="mt-6">
            <p className="mb-2 font-semibold text-white">Follow Us :</p>
            <div className="flex gap-4 text-2xl text-white">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
              {/* <FaXTwitter /> */}
              <FaPinterest />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-5 right-5">
        <button
          className="bg-orange-600 text-white px-4 py-2 font-semibold rounded"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
