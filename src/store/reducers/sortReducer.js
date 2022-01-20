import { createSlice } from '@reduxjs/toolkit';

import { selectData } from './dataReducer';

const slice = createSlice({
  name: 'sort',
  initialState: {
    data: [],
    sortBy: 'increment',
  },
  reducers: {
    checkType(state, action) {
      const { value } = action.payload;
      state.sortBy = value;
    },
    setSortedData(state, action) {
      const { payload } = action;
      // function compareNumeric(a, b) {
      //   if (a > b) return 1;
      //   if (a == b) return 0;
      //   if (a < b) return -1;
      // }
      const quickSort = (array) => {
        if (array.length <= 1) {
          return array;
        }
        let pivotIndex = Math.floor(array.length / 2);
        let pivot = array[pivotIndex];
        let less = [];
        let greater = [];
        for (let i = 0; i < array.length; i++) {
          if (i === pivotIndex) continue;
          if (array[i] < pivot) {
            less.push(array[i]);
          } else {
            greater.push(array[i]);
          }
        }
        return [...quickSort(less), pivot, ...quickSort(greater)];
      };

      if (state.sortBy === 'increment') {
        state.data = quickSort(payload);
      } else if (state.sortBy === 'decrement') {
        state.data = payload
          .map(({ flight: { price } }) => price.total.amount)
          .sort((a, b) => a - b);
      } else if (state.sortBy === 'time') {
        state.data = payload.map(({ flight: { legs } }) => legs[0].duration).sort((a, b) => a + b);
      } else {
        return state;
      }
    },
  },
});

export const { checkType, setSortedData } = slice.actions;

export const selectionSortData = (state) => state.sort.data;
export const selectionSortType = (state) => state.sort.sortBy;

export const sortData = (payload) => (dispatch, getState) => {
  const { data } = selectData(getState());
  payload && dispatch(checkType(payload));
  dispatch(setSortedData(data));
};

export default slice.reducer;
