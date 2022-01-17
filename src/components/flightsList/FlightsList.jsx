import React from 'react';
import { useSelector } from 'react-redux';

import { FlightInfo } from './FlightInfo';
import data from '../../data/singl.json';
import { selectData } from '../../store/reducers/dataReducer';

const flights = data.result.flights;

export const FlightsList = () => {

    const state = useSelector(selectData)

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
