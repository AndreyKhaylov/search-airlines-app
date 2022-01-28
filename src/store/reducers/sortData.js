import { createSlice } from '@reduxjs/toolkit';

import { selectionSettingData } from './filterPrice';

const slice = createSlice({
  name: 'sortData',
  initialState: {
    data: [],
    sortBy: 'increment',
  },
  reducers: {
    checkType(state, action) {
      const { value } = action.payload;
      if (action.payload) state.sortBy = value;
    },
    setSortedData(state, action) {
      const { payload } = action;

      const quickSort = (array) => {
        if (array.length <= 1) {
          return array;
        }
        let pivotIndex = Math.floor(array.length / 2);
        let pivot = array[pivotIndex].flight.price.total.amount;
        let less = [];
        let greater = [];
        for (let i = 0; i < array.length; i++) {
          if (i === pivotIndex) continue;
          if (array[i].flight.price.total.amount < pivot) {
            less.push(array[i]);
          } else {
            greater.push(array[i]);
          }
        }
        return [...quickSort(less), array[pivotIndex], ...quickSort(greater)];
      };

      if (state.sortBy === 'increment') {
        state.data = quickSort(payload);
      } else if (state.sortBy === 'decrement') {
        state.data = quickSort(payload).reverse();
      } else if (state.sortBy === 'time') {
        state.data = payload.map(({ flight: { legs } }) => legs[0].duration).sort((a, b) => a + b);
      }
      state.data = payload;
    },
  },
});

export const { checkType, setSortedData } = slice.actions;

export const selectionSortData = (state) => state.sortData.data;
export const selectionSortType = (state) => state.sortData.sortBy;

export const sortData = (payload) => (dispatch, getState) => {
  const data = selectionSettingData(getState());
  payload && dispatch(checkType(payload));
  dispatch(setSortedData(data));
};

export default slice.reducer;
