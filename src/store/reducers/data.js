import { createSlice } from '@reduxjs/toolkit';

import { data } from '../../data/singl.json';

export const dataReducer = createSlice({
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

const dataServ = data;

export const addDataFlights = () => {
  dispatch(setDataToState(dataServ));
};
