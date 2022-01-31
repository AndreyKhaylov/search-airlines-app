import { createSlice } from '@reduxjs/toolkit';

import { selectFilterData } from './filtrationTranfers';
import { filtrationPrice } from './filtrationPrice';

const slice = createSlice({
  name: 'filtrationAirlines',
  initialState: {
    data: [],
    type: {},
  },
  reducers: {
    checkAirlines(state, action) {
      const { value, checked } = action.payload;
      if (action.payload) state.type[value] = checked;
    },
    setFilteredData(state, action) {
      const { payload } = action;

      if (Object.keys(state.type).length !== 0) {
        const filter = payload.filter(
          ({ flight: { carrier } }) => state.type[carrier.caption] === true,
        );
        state.data = filter;
      } else {
        state.data = payload;
      }
    },
  },
});

export const { checkAirlines, setFilteredData } = slice.actions;

export const selectionAirlinesData = (state) => state.filtrationAirlines.data;

export const filtrationAirlines = (payload) => (dispatch, getState) => {
  const data = selectFilterData(getState());
  payload && dispatch(checkAirlines(payload));
  dispatch(setFilteredData(data));
  dispatch(filtrationPrice());
};

export default slice.reducer;
