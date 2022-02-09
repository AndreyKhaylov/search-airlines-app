import React from 'react';

import { FlightTimeInfo } from './FlightTimeInfo';

export const FlightInfo = ({...flight}) => {
    const price = flight.price.total;

    function flightData(stage){
        const legs = flight.legs[stage]

        const duration = legs.duration
        const transfers = legs.segments.length - 1
        const airline = {
            name: legs.segments[0].airline.caption,
        }  

        const transit = (transit) => {
            let num = 0;

            if((transfers > 0) && (transit === 'arrival')) {
                num = transfers;
            }

            const segments = legs.segments[num];


            return {
                [`${transit}City`]: segments[`${transit}City`]?.caption,                              
                [`${transit}Airport`]: {
                    name: segments[`${transit}Airport`].caption,
                    uid: segments[`${transit}Airport`].uid,
                },
                [`${transit}Date`]: segments[`${transit}Date`],
            }
        }

        const dep = transit('departure');
        const arvl = transit('arrival');

        return [ dep, arvl, airline, transfers, duration ]
    }

    const flightTo = flightData(0);
    const flightFrom = flightData(1)

    return (
        <div>
            <section>
                <div>LOGO</div>
                <div>
                    <div>{price.amount} {price.currency}</div>
                    <p>Cтоиомсть для одного взрослого пассажира</p>
                </div>
            </section>
            <section>
                <FlightTimeInfo info={flightTo} />
                <div></div>
                <FlightTimeInfo info={flightFrom} />
            </section>
        </div>
    )
}
