import { createSlice } from '@reduxjs/toolkit';

import { selectionSortData } from './sortingData';

export const slice = createSlice({
  name: 'pagination',
  initialState: {
    isLoading: false,
    data: [],
    portionData: [],
    index: 1,
  },
  reducers: {
    fetchLoading: (state, action) => ({
      isLoading: action.payload,
    }),
    setData: (state, action) => ({
      data: action.payload,
    }),
    setIndex: (state, action) => ({
      index: state.index + action.payload.index,
    }),
    showFlights(state, action) {
      const { payload } = action;
    },
  },
});

export const { fetchLoading, setData, setIndex } = slice.actions;

export const selectData = (state) => state.pagination.portionData;

export const pagination = (payload) => (dispatch, getState) => {
  const data = selectionSortData(getState());
  dispatch(setData(data));
};

export default slice.reducer;
