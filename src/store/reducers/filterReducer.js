import { createSlice } from '@reduxjs/toolkit';

import { selectData } from './dataReducer';

export const slice = createSlice({
  name: 'filter',
  initialState: {
    filteredData: [],
    filteringBy: {
      oneTransfer: false,
      withoutTransfer: false,
    },
  },
  reducers: {
    filterTransfers: (state, action) => {
      const { value, checked } = action.payload;
      state.filteringBy[value] = checked;
    },
    setFilteredData: (state, action) => {
      const data = action.payload;
      const value = state.filteringBy;
      switch (value) {
        case value.oneTransfer === 'true' && value.withoutTransfer === 'true': {
          const filter = data.filter((i) => i);
        }
        case value.oneTransfer === 'true' && value.withoutTransfer === 'false': {
          const filter = data.filter((i) => i);
          state.filteredData = action.payload;
        }
        case value.oneTransfer === 'false' && value.withoutTransfer === 'true': {
          const filter = data.filter((i) => i);
        }
        case value.oneTransfer === 'false' && value.withoutTransfer === 'false': {
          state.filteredData = action.payload;
        }
        default:
          return state;
      }
    },
  },
});

export const { filterTransfers, setFilteredData } = slice.actions;

export const selectFilteredData = (state) => state.filter.filteredData;
export const selectFilteringBy = (state) => state.filter.filteringBy;

export const filterFlights = (payload) => async (dispatch, getState) => {
  const { data } = selectData(getState());
  payload && dispatch(filterTransfers(payload));
};

export default slice.reducer;
