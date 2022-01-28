import { createSlice } from '@reduxjs/toolkit';

import { selectFilterData } from './filterTranfers';
import { filtrationPrice } from './filterPrice';

const slice = createSlice({
  name: 'filterAirlines',
  initialState: {
    data: [],
    type: {},
  },
  reducers: {
    checkAirlines(state, action) {
      const { value, checked } = action.payload;
      if (value && checked) state.type[value] = checked;
    },
    setFilteredData(state, action) {
      const { payload } = action;

      if (Object.keys(state.type).length === 0) {
        const filter = payload.filter(
          ({ flight: { carrier } }) => state.type[carrier.caption] === true,
        );
        state.data = filter;
      }
      state.data = payload;
    },
  },
});

export const { checkAirlines, setFilteredData } = slice.actions;

export const selectionAirlinesData = (state) => state.filterAirlines.data;

export const filtrationAirlines = (payload) => (dispatch, getState) => {
  const data = selectFilterData(getState());
  payload && dispatch(checkAirlines(payload));
  dispatch(setFilteredData(data));
  dispatch(filtrationPrice());
};

export default slice.reducer;
