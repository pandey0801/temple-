import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Kal Sarp Dosh?",
      answer: "Kal Sarp Dosh is a planetary alignment in a person's horoscope that can cause various life challenges.",
    },
    {
      question: "When should the pooja be performed?",
      answer: "The pooja is most effective when performed on specific auspicious days. Please contact us for more details.",
    },
    {
      question: "How long does the pooja take?",
      answer: "The pooja typically takes around 2-3 hours to complete.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="mt-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;