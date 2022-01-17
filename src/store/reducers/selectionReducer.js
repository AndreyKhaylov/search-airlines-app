import { createSlice } from '@reduxjs/toolkit';

import { selectFilterData } from './filterReducer';

const slice = createSlice({
  name: 'airlines',
  initialState: {
    data: [],
    type: {},
  },
  reducers: {
    checkAirlines(state, action) {
      const { value, checked } = action.payload;
      state.type[value] = checked;
    },
    setFilteredData(state, action) {
      const { payload } = action;

      if (state.type.noSuchProperty === undefined) {
        const filter = payload.filter(
          ({ flight: { carrier } }) => state.type[carrier.caption] === true,
        );
        state.data = filter;
      } else {
        return state;
      }
    },
  },
});

export const { checkAirlines, setFilteredData } = slice.actions;

export const selectionAirlinesData = (state) => state.data;

export const filterAirlines = (payload) => (dispatch, getState) => {
  const { data } = selectFilterData(getState());
  console.log('data', data);
  payload && dispatch(checkAirlines(payload));
  dispatch(setFilteredData(data));
};

export default slice.reducer;
