import React from 'react';
import { useSelector } from 'react-redux';

import { FlightInfo } from './FlightInfo';
import data from '../../data/singl.json';
import { selectionSettingData } from '../../store/reducers/filtrationPrice';

const flights = data.result.flights;

export const FlightsList = () => {

    const flightsT = useSelector(selectionSettingData)
    console.log('flightsT', flightsT)

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
