import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fetch quotes from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/quotes")
      .then((res) => setQuotes(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Function to advance quotes
  const advance = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  }, [quotes.length]);

  // Auto-play effect with pause option
  useEffect(() => {
    if (isPaused) return; // stop autoplay if paused

    const interval = setInterval(() => {
      advance();
    }, 5000);

    return () => clearInterval(interval);
  }, [advance, isPaused]);

  if (quotes.length === 0) {
    return <div className="App">Loading...</div>;
  }

  const currentQuote = quotes[currentIndex];

  return (
    <div className="App">
      <h1 className="app-heading">Book Quote Shorts</h1>
      <div className="quote-card">
        <p className="quote-text">"{currentQuote.text}"</p>
        <p className="quote-author">- {currentQuote.author}</p>
        <p className="quote-book"><em>{currentQuote.book}</em></p>
      </div>

      <div className="controls">
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length)
          }
        >
          ⬅ Prev
        </button>

        <button onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? "▶ Resume" : "⏸ Pause"}
        </button>

        <button onClick={advance}>Next ➡</button>
      </div>
    </div>
  );
}

export default App;
