import { createSlice } from '@reduxjs/toolkit';

import { selectionSortData } from './sortingData';

export const slice = createSlice({
  name: 'pagination',
  initialState: {
    isLoading: false,
    data: [],
    index: 1,
    onPageNumElem: 3,
  },
  reducers: {
    fetchLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIndex(state, action) {
      state.index = state.index + action.payload;
    },
    showFlights(state, action) {
      const { index, onPageNumElem } = state;
      const { payload } = action;

      if (index) {
        for (let i = 0; i <= index * (onPageNumElem - 1); i++) {
          state.data = [...state.data, payload[i]];
        }
      }
    },
  },
});

export const { fetchLoading, setData, setIndex, showFlights } = slice.actions;

export const selectData = (state) => state.pagination.data;

export const pagination = (payload) => (dispatch, getState) => {
  const data = selectionSortData(getState());
  payload && dispatch(setIndex(payload));
  data && dispatch(showFlights(data));
};

export default slice.reducer;
