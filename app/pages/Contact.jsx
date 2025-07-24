import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
              <input type="tel" id="phone" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full px-3 py-2 border rounded-lg"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </form>
          <div className="text-center mt-8">
            <a href="https://wa.me/918390000315" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;