// import React from 'react';
// import blog from '../data/blogs.json'
// import { Swiper } from 'swiper/types';
// import { Navigation } from 'swiper/modules';
// import { SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router';

import React from 'react';
import blog from '../data/blogs.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'; // ✅ correct

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';

const Procedure = () => {
  console.log("blog data ing",blog)

    const packages = [
     
    ];


  return (

    <>
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Information</h2>

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
          {blog.map((pkg, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" /> */}
                <div className="p-6">
                  <p className="text-orange-500 text-xl font-bold mb-4 ">{pkg.title}</p>
                  <p className="text-gray-700 mb-4">{pkg.slug}</p>
                  <p className="text-gray-600 mb-4">{pkg.summary}</p>
  
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
    </>
  );
};

export default Procedure;