import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FlightInfo } from './FlightInfo';
import { pagination, selectData } from '../../store/reducers/pagination';
import { CustomButton } from '../button/button';

import Box from '@mui/material/Box';

const title = {
  selectBtn: 'Выбрать',
  showBtn: 'Показать еще',
};

export const FlightsList = () => {
  const flights = useSelector(selectData);
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(pagination(1));
  };

  return (
    <Box sx={{ flexDirection: 'column' }}>
      {flights &&
        flights.map(({ flight, flightToken }, idx) => (
          <section key={idx}>
            <FlightInfo {...flight} />
            <CustomButton onClick={() => console.log('select', flightToken)}>
              {title.selectBtn}
            </CustomButton>
          </section>
        ))}
      <CustomButton onClick={onHandleClick}>{title.showBtn}</CustomButton>
    </Box>
  );
};
