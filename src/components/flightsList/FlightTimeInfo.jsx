import React from 'react';

import { styled } from '@mui/material/styles';
import { Divider, Box, Stack } from '@mui/material';
import { ArrowRightAltIcon } from '@mui/icons-material';
import Icon from '@mui/material/Icon';
import Chip from '@mui/material/Chip';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  minWidth: 550,
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const Item = styled('div')(({ theme }) => ({
  margin: theme.spacing(0.1),
  color: theme.palette.text.secondary,
}));

export function FlightTimeInfo({ info }) {
  const { departure, arrival, duration, transfers, airline } = info;
  return (
    <Root>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction='row' spacing={1}>
          <Item>{departure.city},</Item>
          <Item>{departure.airport}</Item>
          <Item>({departure.uid})</Item>
        </Stack>
        <Chip icon={<ArrowRightAltIcon />} label='Arrow right icon' />
        <Stack direction='row' spacing={1}>
          <Item>{arrival.city},</Item>
          <Item>{arrival.airport}</Item>
          <Item>({arrival.uid})</Item>
        </Stack>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Item>{departure.date}</Item>
        <Item>{duration}</Item>
        <Item>{arrival.date}</Item>
      </Box>
      <Divider>
        <Item>{`пересадок: ${transfers}`}</Item>
      </Divider>
      <Item>{`Рейс выполняет: ${airline}`}</Item>
    </Root>
  );
}
