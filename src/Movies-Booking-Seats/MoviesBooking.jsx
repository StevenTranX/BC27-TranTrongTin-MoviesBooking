import React from 'react';
// import './Scss/_moviesbooking.scss';
import movieScreen from './Images/screen-thumb.png';
import './css/MoviesBooking.css';
import MoviesSelection from './MoviesSelection';
import SeatList from './SeatList';
import SeatDetails from './SeatDetails';
const MoviesBooking = () => {
  return (
    <div>
      <MoviesSelection />
      <SeatDetails />
      <ul className="showcase">
        <li>
            <div className="seat"></div>
            <small>N/A</small>
        </li>
        <li>
            <div className="seat selected"></div>
            <small>Selected</small>
        </li>
        <li>
            <div className="seat occupied"></div>
            <small>Occupied</small>
        </li>
    </ul>
      <div className="container">
        <div className="movie-screen">
          <img src={movieScreen} alt="screen" />
        </div>
        <SeatList />
      </div>
    </div>
  );
};

export default MoviesBooking;
