import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">Phone: +91 8390000315</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://wa.me/918390000315" className="text-green-400 hover:text-green-300">WhatsApp</a>
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
        </div>
        <div className="text-sm text-gray-500">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;