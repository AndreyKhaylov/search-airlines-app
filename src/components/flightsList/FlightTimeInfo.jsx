import React from 'react';

import { styled } from '@mui/material/styles';
import { Divider, Stack } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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

const Box = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: theme.spacing(0.5),
}));

export function FlightTimeInfo({ info }) {
  const { departure, arrival, duration, transfers, airline } = info;

  const time = duration / 60;
  const hour = Math.floor(time);
  const minute = Math.round(60 / ((time - Math.trunc(time)) * 10));

  return (
    <Root>
      <Box>
        <Stack direction='row' spacing={1}>
          <Item>{departure.city},</Item>
          <Item>{departure.airport}</Item>
          <Item sx={{ color: '#1976d2' }}>({departure.uid})</Item>
        </Stack>
        <ArrowRightAltIcon color='secondary' />
        <Stack direction='row' spacing={1}>
          <Item>{arrival.city},</Item>
          <Item>{arrival.airport}</Item>
          <Item sx={{ color: '#1976d2' }}>({arrival.uid})</Item>
        </Stack>
      </Box>
      <Box>
        <Item>{departure.date}</Item>
        <Item>
          <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
          {`${hour}ч ${minute}мин`}
        </Item>
        <Item>{arrival.date}</Item>
      </Box>
      <Divider>
        <Item sx={{ color: '#e67e22' }}>{`пересадок: ${transfers}`}</Item>
      </Divider>
      <Item>{`Рейс выполняет: ${airline}`}</Item>
    </Root>
  );
}
