import { createSlice } from '@reduxjs/toolkit';

import { requestAPI } from '../../api/request';

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

export const addDataToState = () => (dispatch) => {
  requestAPI().then(({ flights }) => dispatch(setDataToState(flights)));
};

export default slice.reducer;
