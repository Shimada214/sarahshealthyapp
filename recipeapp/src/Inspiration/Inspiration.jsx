import React, { useState, useEffect } from "react";
import './Inspiration.css';
import quotes from './quotes.json';


function Inspiration() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const today = new Date();
    const quoteIndex = today.getDate() % quotes.length;
    setQuote(quotes[quoteIndex]);
  }, []);

  return (
    <div className="quote-day">
      <h2 id="inspiration">Quote of the Day</h2>
      <p className="quote">"{quote.quote}"</p>
      <p className="book">- {quote.book}</p>
    </div>
  );
}

  
export default Inspiration;