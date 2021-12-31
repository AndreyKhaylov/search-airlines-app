import { createSlice } from '@reduxjs/toolkit';

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
  await fetch('http://localhost:3001/result/')
    .then((res) => res.json())
    .then(({ flights }) => dispatch(setDataToState(flights)))
    .catch((err) => console.log('error', err));
};

export default slice.reducer;
