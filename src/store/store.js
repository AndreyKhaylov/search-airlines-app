import { configureStore } from '@reduxjs/toolkit';

import dataFlights from './reducers/dataFlights';
import filtrationTranfers from './reducers/filtrationTranfers';
import filtrationAirlines from './reducers/filtrationAirlines';
import filtrationPrice from './reducers/filtrationPrice';
import sortingData from './reducers/sortingData';
import pagination from './reducers/pagination';

export const store = configureStore({
  reducer: {
    dataFlights,
    filtrationTranfers,
    filtrationAirlines,
    filtrationPrice,
    sortingData,
    pagination,
  },
});
