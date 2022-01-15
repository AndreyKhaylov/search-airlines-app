import { createSlice } from '@reduxjs/toolkit';

import { selectFilterData } from './filterReducer';

const slice = createSlice({
  name: 'selectionAirlines',
  initialState: {
    data: [],
    type: {},
  },
  reducers: {
    checkAirlines(state, action) {
      const { value, checked } = action.payload;
      state.type[value] = checked;
    },
    setFilteredData(state, action) {
      const { data } = action.payload;

      // const filterAirlines = (T = 0) => {
      //     const legs = (f, L) => f.legs[L].segments.length; // L(e.g. legs) - flight direction, to - "0", back - "1"
      //     return payload.filter(({ flight }) => legs(flight, 0) === T && legs(flight, 1) === T);
      //   };

      //   if (tr__1 === true && tr__0 === true) {
      //     state.data = payload;
      //   } else if (tr__1 === true && tr__0 === false) {
      //     state.data = filterAirlines(1);
      //   } else if (tr__1 === false && tr__0 === true) {
      //     state.data = filterAirlines(0);
      //   } else if (tr__1 === false && tr__0 === false) {
      //     state.data = payload;
      //   } else {
      //     return state;
      //   }
    },
  },
});

export const { checkAirlines, setFilteredData } = slice.actions;

export const selectFilterData = (state) => state.selectionAirlines.data;

export const filterAirlines = (payload) => (dispatch, getState) => {
  const { data } = selectFilterData(getState());
  payload && dispatch(checkAirlines(payload));
  dispatch(setFilteredData(data));
};

export default slice.reducer;
