import React from 'react';

import { FlightTimeInfo } from './FlightTimeInfo';

import { AppBar, Box, Toolbar, Typography } from '@mui/material/';

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
    const flightFrom = flightData(1);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 18 }}>
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 16 }}>
                                { price.amount } { price.currency }
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 12 }}>
                                Cтоимость для одного взрослого пассажира
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <FlightTimeInfo info={flightTo} />
                <FlightTimeInfo info={flightFrom} />
            </Box>
        </>
    )
}
