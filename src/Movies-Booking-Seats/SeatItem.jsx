import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { toggleSeat, addToCart } from './Redux/movieSlice';
import './css/MoviesBooking.css'

const SeatItem = () => {
  const { tickets } = useSelector((state) => state.movies);
  const [isToggleOn, setToggle] = useState(false)

  const {selectedSeat} = useSelector((state) => state.movies)
  const dispatch = useDispatch();
  const handleSelect = (seat) => {
    dispatch(toggleSeat(seat))
    dispatch(addToCart(seat));
    handleToggle() 
  };
  const handleToggle = () => {
 
    if (!selectedSeat) return null
    if (selectedSeat) {
      setToggle(!isToggleOn)
    }
    console.log(isToggleOn,selectedSeat)
  }
  
  return (
    <>
      {tickets.map((ticket) => {
        return (
          <div className="row-seats" key={ticket.row}>
            {ticket.seats.map((seat) => {
              return (
                <div 
                  key={seat.name}
                  className={classnames({
                    occupied : seat.occupied === true , 
                    seat,               
                    })}
                  
                  style={{ textAlign: 'center', }}
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
