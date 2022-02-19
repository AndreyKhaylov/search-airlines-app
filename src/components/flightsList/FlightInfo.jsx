import React from 'react';

import { FlightTimeInfo } from './FlightTimeInfo';

import { AppBar, Box, Toolbar, Typography, Divider } from '@mui/material/';

export const FlightInfo = ({ ...flight }) => {
  const price = flight.price.total;

  function flightData(stage) {
    const legs = flight.legs[stage];
    const duration = legs.duration;
    const transfers = legs.segments.length - 1;
    const airline = legs.segments[0].airline.caption;

    const transit = (transit) => {
      let num = 0;

      if (transfers > 0 && transit === 'arrival') {
        num = transfers;
      }

      const segments = legs.segments[num];

      return {
        date: segments[`${transit}Date`],
        city: segments[`${transit}City`]?.caption,
        airport: segments[`${transit}Airport`].caption,
        uid: segments[`${transit}Airport`].uid,
      };
    };

    const departure = transit('departure');
    const arrival = transit('arrival');

    return {
      departure,
      arrival,
      duration,
      transfers,
      airline,
    };
  }

  const flightTo = flightData(0);
  const flightFrom = flightData(1);

  return (
    <>
      <Box>
        <AppBar position='static'>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant='h6' sx={{ fontSize: 18 }}>
                LOGO
              </Typography>
            </Box>
            <Box>
              <Typography variant='h6' sx={{ fontSize: 16, textAlign: 'right' }}>
                {price.amount} {price.currency}
              </Typography>
              <Typography variant='h6' sx={{ fontSize: 12 }}>
                Cтоимость для одного взрослого пассажира
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ padding: 2 }}>
        <FlightTimeInfo info={flightTo} />
        <Divider sx={{ mt: 1, mb: 0.5 }} />
        <Divider sx={{ mt: 0.5, mb: 1 }} />
        <FlightTimeInfo info={flightFrom} />
      </Box>
    </>
  );
};
