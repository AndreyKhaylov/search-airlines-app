import { createSlice } from '@reduxjs/toolkit';

import { selectData } from './dataFlights';
import { filtrationAirlines } from './filterAirlines';

export const slice = createSlice({
  name: 'filterTranfers',
  initialState: {
    data: [],
    oneTransfer: false,
    withoutTransfer: false,
  },
  reducers: {
    filterTransfers(state, action) {
      const { value, checked } = action.payload;
      if (value && checked) state[value] = checked;
    },
    setFilteredData(state, action) {
      const { payload } = action;
      const tr__1 = state.oneTransfer;
      const tr__0 = state.withoutTransfer;

      const filterTranfers = (T = 0) => {
        T = T + 1; // T - number of transfers
        const legs = (f, L) => f.legs[L].segments.length; // L(e.g. legs) - flight direction, to - "0", back - "1"
        return payload.filter(({ flight }) => legs(flight, 0) === T && legs(flight, 1) === T);
      };

      if (tr__1 === true && tr__0 === true) {
        state.data = payload;
      } else if (tr__1 === true && tr__0 === false) {
        state.data = filterTranfers(1);
      } else if (tr__1 === false && tr__0 === true) {
        state.data = filterTranfers(0);
      } else if (tr__1 === false && tr__0 === false) {
        state.data = payload;
      } else {
        return state;
      }
    },
  },
});

export const { filterTransfers, setFilteredData } = slice.actions;

export const selectFilterData = (state) => state.filterTranfers.data;

export const filtrationTranfers = (payload) => (dispatch, getState) => {
  const data = selectData(getState());
  payload && dispatch(filterTransfers(payload));
  dispatch(setFilteredData(data));
  dispatch(filtrationAirlines());
};

export default slice.reducer;
