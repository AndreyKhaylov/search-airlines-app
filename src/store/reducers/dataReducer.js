import { createSlice } from '@reduxjs/toolkit';

import data from '../../data/singl.json';

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

const dataServ = data;

export const addDataFlights = () => (dispatch) => {
  dispatch(setDataToState(dataServ));
};

export default slice.reducer;
