import React from 'react';

const Procedure = () => {
  const steps = [
    'Ganesh Puja',
    'Rahu/Ketu Jaap',
    'Havan',
    'Prasad',
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pooja Procedure</h2>
        <div className="flex justify-center">
          <ol className="list-decimal list-inside text-lg">
            {steps.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Procedure;