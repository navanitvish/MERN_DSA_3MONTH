// QuoteGenerator.js
import React, { useState } from "react";

const QuoteGenerator = ({ quotes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleGenerateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="p-4 border-dashed border-2 border-blue-500 text-center h-80 ">
      <div className="mb-4 bg-gradient-to-b from-gray-200 to-gray-100 p-4 ">
        <p className="text-2xl mb-4 font-bold " style={{ fontStyle: "italic" }}>
          "{quotes[currentIndex].text}"
        </p>
        <p>
          <strong>- {quotes[currentIndex].author}</strong>
        </p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 mt-20 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={handleGenerateQuote}
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;
