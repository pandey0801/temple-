import React from 'react';

const Hero = () => {
  return (
    <div className="bg-red text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">  Kal Sarp Pooja Booking Service</h1>
        {/* <p className="text-xl mb-8">Live from Trimbakeshwar</p> */}
        <p className="text-lg mb-8">A pandit ji with over 20 years of experience, capable of performing all types of Trimbakeshwar pooja,<br></br> including Kalsarp, Pitra Shanti, Narayan Nagbali, and Maha Mrityunjay Jaap.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Book Now
          </a>
          <a href="https://wa.me/918390000315" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;