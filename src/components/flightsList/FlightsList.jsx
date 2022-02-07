import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FlightInfo } from './FlightInfo';
import { selectionSortData } from '../../store/reducers/sortingData';
import { pagination } from '../../store/reducers/pagination';

export const FlightsList = () => {
    const flights = useSelector(selectionSortData)
    const dispatch = useDispatch()

    const onHandleClick = () => {
        dispatch(pagination({ index: 1 }))
    }
    
    return (
        <>
            {flights.map(({flight, flightToken}) => (
                <section key={flightToken}>
                    <FlightInfo {...flight} />
                    <button onClick = {onHandleClick}>
                        Выбрать
                    </button>
                </section>
            ))}
            <button>
                Показать еще
            </button>
        </>
    )
}
