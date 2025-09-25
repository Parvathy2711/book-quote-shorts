import React, { useState, useEffect } from "react";
import quotesData from "./data/quotes.json";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = () => {
    setCurrentIndex((prev) => (prev + 1) % quotesData.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(advance, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const currentQuote = quotesData[currentIndex];

  return (
    <div className="App">
      <h1 className="app-heading">Book Quote Shorts</h1>
      <div className="quote-card">
        <p className="quote-text">"{currentQuote.text}"</p>
        <p className="quote-author">- {currentQuote.author}</p>
        <p className="quote-book"><em>{currentQuote.book}</em></p>
      </div>
      <div className="controls">
        <button onClick={() => setCurrentIndex((prev) => (prev - 1 + quotesData.length) % quotesData.length)}>⬅ Prev</button>
        <button onClick={() => setIsPaused(!isPaused)}>{isPaused ? "▶ Resume" : "⏸ Pause"}</button>
        <button onClick={advance}>Next ➡</button>
      </div>
    </div>
  );
}

export default App;
