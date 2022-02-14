import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filtrationAirlines } from '../../store/reducers/filtrationAirlines';
import { selectData } from '../../store/reducers/dataFlights';

import { FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material/';

const AIRLINE = 'Авикомпания';

export const FilterAirline = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectData)
    const arr = [] // array of unique airlines
    
    const onSetAirlines = (e) => {
        const { checked, value } = e.target
        dispatch(filtrationAirlines({ value, checked }))
    }

    return (
        <FormControl sx={{ mt: 4 }} >
            <FormLabel >{ AIRLINE }</FormLabel>
            <FormGroup sx={{ m: 2 }}>
                {
                    data.map(({ flight: { carrier }}, i) => { 
                        if(!arr.includes(carrier.caption)) {
                            arr.push(carrier.caption)
                            return (
                                <FormControlLabel 
                                    key={ i }
                                    value={ carrier.caption }
                                    onChange={ onSetAirlines }
                                    control={ <Checkbox size="small"/> }
                                    label={ `- (${carrier.airlineCode}) ${carrier.caption}` }
                                    labelPlacement="end"
                                />
                            )
                        }
                        return null 
                    })
                }
            </FormGroup>
        </FormControl>
    )
}

// this.props.comments
//   .filter(commentReply => commentReply.replyTo === comment.id)
//   .map((commentReply, idx) => <CommentItem key={idx} className="SubComment"/>);
