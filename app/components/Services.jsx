import React from 'react';
// C:\Drishtee\poja\project\app\assets\about-guruji.jpg
// C:\Drishtee\poja\project\app\assets\kalsarp-gallery-2.webp
// C:\Drishtee\poja\project\app\assets\kalsarp-2.jpg
// C:\Drishtee\poja\project\app\assets\kalsarp-home-section.jpg


import card1 from '../assets/about-guruji.jpg';
import card2 from '../assets/kalsarp-2.jpg';
import card3 from '../assets/kalsarp-home-section.jpg';

const Services = () => {
  const packages = [
    {
      title: 'Basic Pooja',
      price: '₹2100',
      image: card1,
      description: 'A basic Kal Sarp Dosh pooja for individuals.',
    },
    {
      title: 'Family Pooja',
      price: '₹5100',
      image: card2,
      description: 'A comprehensive pooja for the entire family.',
    },
    {
      title: 'Special Pooja',
      price: '₹11000',
      image: card3,
      description: 'special pooja with additional rituals offerings.',
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-gray-700 mb-4">{pkg.price}</p>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;