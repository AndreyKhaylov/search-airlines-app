import { createSlice } from '@reduxjs/toolkit';

import { requestAPI } from '../../api/request';

import { filtrationTranfers } from './filtrationTranfers';

export const slice = createSlice({
  name: 'dataFlights',
  initialState: {
    isLoading: false,
    data: [],
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

export const selectData = (state) => state.dataFlights.data;

export const addDataToState = () => async (dispatch) => {
  const response = await requestAPI();
  dispatch(setDataToState(response.flights));
  dispatch(filtrationTranfers());
};

export default slice.reducer;
