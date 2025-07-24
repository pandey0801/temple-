import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import card1 from '../assets/about-guruji.jpg';
import card2 from '../assets/kalsarp-2.jpg';
import card3 from '../assets/kalsarp-home-section.jpg';
import { Link } from 'react-router';

const Services = () => {
  const packages = [
    {
      id:1,
      title: 'Online Pooja',
      price: '₹2100',
      image: card1,
      description: 'A basic Kal Sarp Dosh pooja for individuals, performed online with live video support.',
    },
    {
      id:2,
      title: 'kalsarp puja',
      price: '₹5100',
      image: card2,
      description: 'Special pooja with additional rituals offerings.',
    },
    {
      id:3,
      title: 'Narayan nagbali puja',
      price: '₹11000',
      image: card3,
      description: 'Special pooja with additional rituals offerings.',
    },
    {
      id:4,
      title: 'pitra dosh ',
      price: '₹15000',
      image: card2,
      description: 'Includes all rituals, VIP seating, and prasad.',
    },
    {
      id:5,
      title: 'Mahamrityunjay',
      price: '₹3100',
      image: card1,
      description: 'Join from anywhere with live video support.',
    },
    {
      id:6,
      title: 'rahu katu santi',
      price: '₹8000',
      image: card3,
      description: 'Tailored pooja based on individual needs and preferences.',
    },
    { 

      id:7,
      title: 'nav ghar santi',
      price: '₹8000',
      image: card3,
      description: 'Tailored pooja based on individual needs and preferences.',
    },
    {
      id:8,
      title: 'nav grah jap',
      price: '₹8000',
      image: card3,
      description: 'Tailored pooja based on individual needs and preferences.',
    },
    {
      id:9,
      title: 'rudra abishk',
      price: '₹8000',
      image: card3,
      description: 'Tailored pooja based on individual needs and preferences.',
    },{
      title: 'Santan Parapti Pooja ',
      price: '₹8000',
      image: card3,
      description: 'Tailored pooja based on individual needs and preferences.',
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {packages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  {/* <h3 className="text-xl font-bold mb-4">{pkg.price}</h3> */}
                  <p className="text-orange-500 text-xl font-bold mb-4 ">{pkg.title}</p>
                  <p className="text-gray-700 mb-4">{pkg.price}</p>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  {/* <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                    Book Now
                  </a> */}
                  <Link
                    to={`/services/${pkg.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
