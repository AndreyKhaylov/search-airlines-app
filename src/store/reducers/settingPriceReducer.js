import { createSlice } from '@reduxjs/toolkit';

// import { selectionSortData } from './sortReducer';
import { selectData } from './dataReducer';

const slice = createSlice({
  name: 'setting',
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

export const selectionSettingData = (state) => state.setting.data;
export const selectionSettingType = (state) => state.setting.range;

export const settingPriceData = (payload) => (dispatch, getState) => {
  // const { data } = selectionSortData(getState());
  const { data } = selectData(getState());
  dispatch(checkRange(payload));
  dispatch(setFilterPrice(data));
};

export default slice.reducer;
