import { createSlice } from '@reduxjs/toolkit';

import { sortData } from './sortData';
import { selectionAirlinesData } from './filterAirlines';

const slice = createSlice({
  name: 'filterPrice',
  initialState: {
    data: [],
    range: {
      down: 0,
      up: 500000,
    },
  },
  reducers: {
    checkRange(state, action) {
      const { payload } = action;
      const { range } = state;
      if (payload.down) range.down = payload.down;
      if (payload.up) range.up = payload.up;
    },
    setFilterPrice(state, action) {
      const { payload } = action;
      const { down, up } = state.range;
      const filter = payload.filter(
        ({ flight: { price } }) => down <= +price.total.amount && +price.total.amount <= up,
      );
      state.data = filter;
    },
  },
});

export const { checkRange, setFilterPrice } = slice.actions;

export const selectionSettingData = (state) => state.filterPrice.data;
export const selectionSettingType = (state) => state.filterPrice.range;

export const filtrationPrice = (payload) => (dispatch, getState) => {
  const data = selectionAirlinesData(getState());
  payload && dispatch(checkRange(payload));
  dispatch(setFilterPrice(data));
  dispatch(sortData());
};

export default slice.reducer;
