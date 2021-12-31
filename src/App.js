import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FlightsList, SearchParams } from './components';
import { addDataFlights } from './store/reducers/dataReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDataFlights());
  }, []);

  return (
    <div>
      <SearchParams />
      <FlightsList />
    </div>
  );
}

export default App;
