import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './reducers/dataReducer';
import filterReducer from './reducers/filterReducer';
import selectionReducer from './reducers/selectionReducer';
import sortReducer from './reducers/sortReducer';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    filter: filterReducer,
    selection: selectionReducer,
    sort: sortReducer,
  },
});
