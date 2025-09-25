import React from "react";

export default function NavigationButtons({ onPrev, onNext }) {
  return (
    <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
      <button onClick={onPrev} style={{ padding: "0.5rem 1rem" }}>Prev</button>
      <button onClick={onNext} style={{ padding: "0.5rem 1rem" }}>Next</button>
    </div>
  );
}
