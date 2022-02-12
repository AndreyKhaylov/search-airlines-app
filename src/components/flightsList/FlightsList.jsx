import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FlightInfo } from './FlightInfo';
// import { selectionSortData } from '../../store/reducers/sortingData';
import { pagination, selectData } from '../../store/reducers/pagination';

import Box from '@mui/material/Box';

export const FlightsList = () => {
    // const flights = useSelector(selectionSortData)
    const flights = useSelector(selectData)
    const dispatch = useDispatch()

    const onHandleClick = () => {
        dispatch(pagination(1))
    }

    console.log('flights', flights)
    
    return (
        <Box sx={{ flexDirection: 'column' }}>
            {flights && flights.map(({flight, flightToken}, index) => (
                <section key={index}>
                    <FlightInfo {...flight} />
                    <button>
                        Выбрать
                    </button>
                </section>
            ))}
            <button onClick = {onHandleClick}>
                Показать еще
            </button>
        </Box>
    )
}
