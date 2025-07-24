import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2">
            <img src="https://via.placeholder.com/500" alt="Pandit Sunil Guruji" className="rounded-lg shadow-md" />
          </div>
          <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold mb-4 text-stone-950">About Pandit Sunil Guruji</h2>
            <p className="text-gray-700 mb-4">
              Pandit Sunil Guruji is a renowned priest with over 20 years of experience performing Kal Sarp Dosh poojas at Trimbakeshwar. He has dedicated his life to helping devotees overcome the challenges of this dosh and find peace and prosperity.
            </p>
            <p className="text-gray-700">
              His deep knowledge of Vedic rituals and his compassionate approach have made him a trusted guide for thousands of people from all over the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;