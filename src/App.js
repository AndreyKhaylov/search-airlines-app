import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FlightsList, SearchParams } from './components';
import { addDataToState } from './store/reducers/dataFlights';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDataToState());
  });

  return (
    <Container width='90%'>
      <Box sx={{ display: 'flex' }}>
        <SearchParams />
        <FlightsList />
      </Box>
    </Container>
  );
}

export default App;
