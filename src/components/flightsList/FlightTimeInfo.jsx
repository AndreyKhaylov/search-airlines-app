import React from 'react';

export const FlightTimeInfo = ({info}) => {
    

    return (
        <div>
            <section>
                <span>{info[0].departureCity}</span>
                <span>{info[0].departureAirport.name}</span>
                <span>({info[0].departureAirport.uid})</span>
                <span>-&gt; </span>
                <span>{info[1].arrivalCity}</span>
                <span>{info[1].arrivalAirport.name}</span>
                <span>({info[1].arrivalAirport.uid})</span>
            </section>
            <section>
                <span>{info[0].departureDate}</span>
                <span>{info[4]}</span>
                <span>{info[1].arrivalDate}</span>
            </section>
            <section>
                <span>{info[3]} пересадка</span>
                <span></span>
            </section>
            <section>
                <span>{info[3]} пересадка</span>
                <span></span>
            </section>
            <section>Рейс выполняет: {info[2].name}</section>
        </div>
    )
}
