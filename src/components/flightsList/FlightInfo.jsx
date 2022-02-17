import React from 'react';

import { FlightTimeInfo } from './FlightTimeInfo';

import { AppBar, Box, Toolbar, Typography, Divider } from '@mui/material/';

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
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" sx={{ fontSize: 18 }}>
                                LOGO
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ fontSize: 16, textAlign: "right" }}>
                                { price.amount } { price.currency }
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: 12 }}>
                                Cтоимость для одного взрослого пассажира
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ padding: 2 }}>
                <FlightTimeInfo info={ flightTo } />
                <Divider sx={{ mt: 1, mb: 1 }}/>
                <FlightTimeInfo info={ flightFrom } />
            </Box>
        </>
    )
}
