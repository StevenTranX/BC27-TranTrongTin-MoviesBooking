import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [
    {
      row: 'A',
      seats: [
        {
          name: 'A1',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'A2',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'A3',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'A4',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'A5',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'A6',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'A7',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'A8',
          price: 75000,
          occupied: false,
          selected : false,
        },
      ],
    },
    {
      row: 'B',
      seats: [
        {
          name: 'B1',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'B2',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'B3',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'B4',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'B5',
          price: 75000,
          occupied: true,
          selected : false,
        },
        {
          name: 'B6',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'B7',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'B8',
          price: 75000,
          occupied: true,
          selected : false,
        },
      ],
    },
    {
      row: 'C',
      seats: [
        {
          name: 'C1',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'C2',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'C3',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'C4',
          price: 75000,
          occupied: true,
          selected : false,
        },
        {
          name: 'C5',
          price: 75000,
          occupied: true,
          selected : false,
        },
        {
          name: 'C6',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'C7',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'C8',
          price: 75000,
          occupied: false,
          selected : false,
        },
      ],
    },
    {
      row: 'D',
      seats: [
        {
          name: 'D1',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'D2',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'D3',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'D4',
          price: 75000,
          occupied: false,
          selected : false,
        },
        {
          name: 'D5',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'D6',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'D7',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'D8',
          price: 75000,
          occupied: false,selected : false,
        },
      ],
    },
    {
      row: 'E',
      seats: [
        {
          name: 'E1',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'E2',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'E3',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'E4',
          price: 75000,
          occupied: true,selected : false,
        },
        {
          name: 'E5',
          price: 75000,
          occupied: true,selected : false,
        },
        {
          name: 'E6',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'E7',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'E8',
          price: 75000,
          occupied: false,selected : false,
        },
      ],
    },
    {
      row: 'F',
      seats: [
        {
          name: 'F1',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'F2',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'F3',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'F4',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'F5',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'F6',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'F7',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'F8',
          price: 75000,
          occupied: false,selected : false,
        },
      ],
    },
    {
      row: 'G',
      seats: [
        {
          name: 'G1',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'G2',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'G3',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'G4',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'G5',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'G6',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'G7',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'G8',
          price: 75000,
          occupied: false,selected : false,
        },
      ],
    },
    {
      row: 'H',
      seats: [
        {
          name: 'H1',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'H2',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'H3',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'H4',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'H5',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'H6',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'H7',
          price: 75000,
          occupied: false,selected : false,
        },
        {
          name: 'H8',
          price: 75000,
          occupied: false,selected : false,
        },
      ],
    },
  ],
  selectedSeat: null,
  cart: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    toggleSeat: (state = initialState, action) => {
 
    },
    addToCart: (state = initialState, action) => {
      const index = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );
   
      if (index === -1) {
        state.cart.push(action.payload);
      } else return;
    },
    removeSeat: (state = initialState, action) => {
      const newCart = state.cart.filter((seat) => seat.name !== action.payload);
      state.cart = newCart;
    },
  },
});

export const { toggleSeat, addToCart, removeSeat } = moviesSlice.actions;

export default moviesSlice.reducer;
