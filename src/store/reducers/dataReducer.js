import { createSlice } from '@reduxjs/toolkit';

import { requestAPI } from '../../api/request';

import { filterFlights } from './filterReducer';

export const slice = createSlice({
  name: 'data',
  initialState: {
    isLoading: false,
    data: {},
  },
  reducers: {
    fetchLoading: () => ({
      isLoading: false,
    }),
    setDataToState: (state, action) => ({
      isLoading: false,
      data: action.payload,
    }),
  },
});

export const { fetchLoading, setDataToState } = slice.actions;

export const selectData = (state) => state.data;

export const addDataToState = () => async (dispatch) => {
  const response = await requestAPI();
  dispatch(setDataToState(response.flights));
  dispatch(filterFlights());
};

export default slice.reducer;
