import React from 'react';

import { SortData, FilterTransfer, FilterPrice, FilterAirline } from '.';

import Box from '@mui/material/Box';

export const SearchParams = () => {
  return (
    <Box
      sx={{
        width: 400,
        bgcolor: '#c5c5c5',
        padding: '2em',
      }}>
      <SortData />
      <FilterTransfer />
      <FilterPrice />
      <FilterAirline />
    </Box>
  );
};
