import React from 'react';

export const FlightTimeInfo = ({info}) => {
    
    const [ location, date, transfers, airline, duration ] = info
    console.log('location', location)

    return (
        <div>
            {/* {
                location.map((location, i) => {
                    <div key={i}>
                        <span>
                            <p>{location.city.departure}</p>
                            <p>{airport.name.departure}</p>
                            <p>{airport.uid.departure}</p>
                            <p>`&gt;`</p>
                            <p>{city.arrival}</p>
                            <p>{airport.name.arrival}</p>
                            <p>{airport.uid.arrival}</p>
                        </span>
                    </div>
                })
            }
            {
                date.map((date, i) => {
                    <span key={i}>
                        <p>{date.departure}</p>
                        <p>`&gt;` {duration}</p>
                        <p>{date.arrival}</p>
                    </span>
                })
            }
            <div>{(transfers !== 0) && transfers}</div>
            <div>Рейс выполняет: {airline.code} {airline.name}</div> */}
        </div>
    )
}
