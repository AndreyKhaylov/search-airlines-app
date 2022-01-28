import { configureStore } from '@reduxjs/toolkit';

import dataFlights from './reducers/dataFlights';
import filterTranfers from './reducers/filterTranfers';
import filterAirlines from './reducers/filterAirlines';
import filterPrice from './reducers/filterPrice';
import sortData from './reducers/sortData';

export const store = configureStore({
  reducer: {
    dataFlights,
    filterTranfers,
    filterAirlines,
    filterPrice,
    sortData,
  },
});
