import { createSlice } from '@reduxjs/toolkit';

import { selectionAirlinesData } from './selectionReducer';

const slice = createSlice({
  name: 'sort',
  initialState: {
    data: [],
    sortBy: 'increment',
  },
  reducers: {
    checkType(state, action) {
      const { value } = action.payload;
      state.sortBy = value;
    },
    setSortedData(state, action) {
      const { payload } = action;

      // function compareNumeric(a, b) {
      //   if (a > b) return 1;
      //   if (a == b) return 0;
      //   if (a < b) return -1;
      // }

      if (state.sortBy === 'increment') {
        state.data = payload
          .map(({ flight: { price } }) => price.total.amount)
          .sort((a, b) => a + b);
      } else if (state.sortBy === 'decrement') {
        state.data = payload
          .map(({ flight: { price } }) => price.total.amount)
          .sort((a, b) => a - b);
      } else if (state.sortBy === 'time') {
        state.data = payload.map(({ flight: { legs } }) => legs[0].duration).sort((a, b) => a + b);
      } else {
        return state;
      }
    },
  },
});

export const { checkType, setSortedData } = slice.actions;

export const selectionSortData = (state) => state.data;

export const sortData = (payload) => (dispatch, getState) => {
  const { data } = selectionAirlinesData(getState());
  payload && dispatch(checkType(payload));
  dispatch(setSortedData(data));
};

export default slice.reducer;
