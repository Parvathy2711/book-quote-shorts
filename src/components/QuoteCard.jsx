import React from "react";

export default function QuoteCard({ quote, onLike }) {
  return (
    <div
      className="quote-card"
      style={{
        textAlign: "center",
        padding: "2rem",
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <p style={{ fontSize: "1.5rem" }}>{quote.text}</p>
      <h4>{quote.author}</h4>
      <h5><em>{quote.book}</em></h5>
      <button onClick={() => onLike(quote._id)}>❤️ {quote.likes}</button>
    </div>
  );
}
