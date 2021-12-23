import React from 'react';

import { FlightInfo } from './FlightInfo';
import data from '../../data/singl.json';

const flight = data.result.flights;

export const FlightsList = () => {
    return (
        <>
            {flight.map(({flight, flightToken}) => (
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
