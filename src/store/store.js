import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './reducers/dataReducer';
import filterReducer from './reducers/filterReducer';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    filter: filterReducer,
  },
});
