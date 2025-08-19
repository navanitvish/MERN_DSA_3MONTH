
import './App.css'

// App.js
import QuoteGenerator from "./QuoteGenerator";

const App = () => {
  const quotesArray = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1 className='text-3xl font-bold m-4 text-red-600'>Quote Generator</h1>
      <QuoteGenerator quotes={quotesArray} />
    </div>
  );
};

export default App;
