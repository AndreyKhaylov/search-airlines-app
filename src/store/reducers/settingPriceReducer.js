import { createSlice } from '@reduxjs/toolkit';

import { selectionSortData } from './selectionReducer';

const slice = createSlice({
  name: 'settingPrice',
  initialState: {
    data: [],
    range: {
      down: 0,
      up: 0,
    },
  },
  reducers: {
    checkRange(state, action) {
      const { value } = action.payload;
    },
    setFilterPrice(state, action) {
      const { payload } = action;
    },
  },
});

export const { checkRange, setFilterPrice } = slice.actions;

export const selectionSettingData = (state) => state.settingPrice.data;
export const selectionSettingType = (state) => state.settingPrice.sortBy;

export const settingPriceData = (payload) => (dispatch, getState) => {
  const { data } = selectionSortData(getState());
  payload && dispatch(checkType(payload));
  dispatch(setSortedData(data));
};

export default slice.reducer;
