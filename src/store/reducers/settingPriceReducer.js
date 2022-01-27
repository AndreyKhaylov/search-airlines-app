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
      const { down, up } = action.payload;
      if (down && up) {
        state.range = action.payload;
      } else {
        state.range[Object.keys(action.payload)] = down || up;
      }
    },
    setFilterPrice(state, action) {
      const { payload } = action;
      const { down, up } = state.range;
      const filtering = payload.filter(
        ({ flight: { price } }) => down <= +price.total.amount && +price.total.amount <= up,
      );
      state.data = filtering;
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
