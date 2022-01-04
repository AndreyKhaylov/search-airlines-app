import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filter',
  initialState: {
    filteredData: [],
    filteringBy: '',
  },
  reducers: {
    filterTransfers: (state, action) => {
      filteredData: action.payload.data;
      filteringBy: action.payload.name;
    },
  },
});

export const { filterTransfers } = slice.actions;

export const selectFilter = (state) => state.filter.filteredData;

export const filter = () => {};

export default slice.reducer;
