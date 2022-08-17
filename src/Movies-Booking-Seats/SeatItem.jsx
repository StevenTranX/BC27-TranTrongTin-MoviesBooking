import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { selectSeat, addToCart } from './Redux/movieSlice';
const SeatItem = () => {
  const { tickets } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const handleSelect = (seat) => {
    dispatch(selectSeat(seat));
    dispatch(addToCart(seat));
  };
  return (
    <>
      {tickets.map((ticket) => {
        return (
          <div className="row-seats" key={ticket.row}>
            {ticket.seats.map((seat) => {
              return (
                <div
                  key={seat.name}
                  className="seat"
                  style={{ textAlign: 'center' }}
                  onClick={() => handleSelect(seat)}
                >
                  <span className="seatInner">{seat.name}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default SeatItem;
