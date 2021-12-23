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
            code: legs.segments[0].airline.airlineCode,
        }  

        const transit = (transit) => {
            let num = 0;

            if((transfers > 0) && (transit === 'arrival')) {
                num = transfers;
            }
            return {
                city: {
                    [`${transit}`]: legs.segments[num][`${transit}City`].caption,
                },              
                airport: {
                    [`${transit}`]: {
                        name: legs.segments[num][`${transit}Airport`].caption,
                        uid: legs.segments[num][`${transit}Airport`].uid,
                    },
                },
                date: {
                    [`${transit}`]: legs.segments[num][`${transit}Date`],
                },
            }
        }

        const dep = transit('departure')
        const arvl = transit('arrival')

        const date = [dep.date, dep.date]
        const location = [dep, arvl]

        return [ location, date, transfers, airline, duration ]
    }

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
                <FlightTimeInfo 
                    info={flightData(0)}
                />
                <div></div>
                <FlightTimeInfo 
                    info={flightData(1)}
                />
            </section>
        </div>
    )
}
