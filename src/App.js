import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FlightsList, SearchParams } from './components';
import { addDataToState } from './store/reducers/dataFlights';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDataToState());
  });

  return (
    <div>
      <SearchParams />
      <FlightsList />
    </div>
  );
}

export default App;
