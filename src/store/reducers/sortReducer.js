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
    },
  },
});

export const { checkType, setSortedData } = slice.actions;

export const selectionSortData = (state) => state.data;

export const sortData = (payload) => (dispatch, getState) => {
  const { data } = selectionAirlinesData(getState());
  payload && dispatch(checkAirlines(payload));
  dispatch(setSortedData(data));
};

export default slice.reducer;
