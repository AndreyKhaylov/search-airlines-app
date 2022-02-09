import { createSlice } from '@reduxjs/toolkit';

import { sortingData } from './sortingData';
import { selectionAirlinesData } from './filtrationAirlines';

const slice = createSlice({
  name: 'filtrationPrice',
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

export const selectionSettingData = (state) => state.filtrationPrice.data;
export const selectionSettingType = (state) => state.filtrationPrice.range;

export const filtrationPrice = (payload) => (dispatch, getState) => {
  const data = selectionAirlinesData(getState());
  payload && dispatch(checkRange(payload));
  dispatch(setFilterPrice(data));
  dispatch(sortingData());
};

export default slice.reducer;
