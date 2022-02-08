import { createSlice } from '@reduxjs/toolkit';

import { selectionSortData } from './sortingData';

export const slice = createSlice({
  name: 'pagination',
  initialState: {
    isLoading: false,
    data: [],
    portionData: [],
    index: 1,
    showNumEL: 3,
  },
  reducers: {
    fetchLoading(state, action) {
      state.isLoading = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
    setIndex(state, action) {
      state.index = state.index + action.payload;
    },
    showFlights(state) {
      const { portionData, index, showNumEL, data } = state;

      if (index) {
        for (let i = (index - 1) * (showNumEL - 1); i <= index * (showNumEL - 1); i++) {
          portionData.push(data[i]);
        }
      }
    },
  },
});

export const { fetchLoading, setData, setIndex, showFlights } = slice.actions;

export const selectData = (state) => state.pagination.portionData;

export const pagination = (payload) => (dispatch, getState) => {
  const data = selectionSortData(getState());
  dispatch(setData(data));
  payload && dispatch(setIndex(payload));
  dispatch(showFlights());
};

export default slice.reducer;
