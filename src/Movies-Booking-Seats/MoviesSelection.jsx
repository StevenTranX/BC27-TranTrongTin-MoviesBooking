import React from 'react';

const MoviesSelection = () => {
  return (
    <div className="movie-container">
      <label>Pick a movie:</label>
      <select id="movie">
        <option value={650}>Parasite (₹650)</option>
        <option value={850}>Joker (₹850)</option>
        <option value={550}>Jumanji: Next Level (₹550)</option>
        <option value={750}>Dolittle (₹750)</option>
      </select>
    </div>
  );
};
export default MoviesSelection;
