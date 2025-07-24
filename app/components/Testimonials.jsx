import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The pooja performed by Pandit Sunil Guruji brought immense peace to my life. I am forever grateful.",
      name: "Sunita Sharma",
    },
    {
      quote: "I was facing a lot of problems, but after the Kal Sarp Dosh pooja, things have started to improve.",
      name: "Amit Patel",
    },
    {
      quote: "A truly divine experience. Panditji is very knowledgeable and explains everything in detail.",
      name: "Priya Singh",
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-800 font-bold text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;