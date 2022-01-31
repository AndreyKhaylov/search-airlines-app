import React from 'react';
import { useSelector } from 'react-redux';

import { FlightInfo } from './FlightInfo';
import { selectionSortData } from '../../store/reducers/sortingData';

export const FlightsList = () => {
    const flights = useSelector(selectionSortData)
    
    return (
        <>
            {flights.map(({flight, flightToken}) => (
                <section key={flightToken}>
                    <FlightInfo {...flight} />
                    <button>
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
