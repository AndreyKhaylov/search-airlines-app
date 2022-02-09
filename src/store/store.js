import { configureStore } from '@reduxjs/toolkit';

import {
  dataFlights,
  filtrationTranfers,
  filtrationAirlines,
  filtrationPrice,
  sortingData,
  pagination,
} from './reducers';

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
