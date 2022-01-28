import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filtrationAirlines } from '../../store/reducers/filterAirlines';
import { selectData } from '../../store/reducers/dataFlights';

const AIRLINE = 'Авикомпания';

export const SelectionAirline = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectData)
    const arr = [] // array of unique airlines
    
    const onSetAirlines = (e) => {
        const { checked, value } = e.target
        dispatch(filtrationAirlines({ value, checked }))
    }

    return (
        <div>
            <h4>{AIRLINE}</h4>
            {
                data.map(({ flight: { carrier }}, i) => {
                    if(!arr.includes(carrier.caption)) {
                        arr.push(carrier.caption)
                        return (
                            <div key={i}>
                                <label>
                                    <input
                                        type='checkbox'
                                        name='select'
                                        value={carrier.caption}
                                        onChange={onSetAirlines}
                                    />
                                    - ({carrier.airlineCode}) {carrier.caption}
                                </label>
                            </div>
                        )
                    }  
                })
            }
        </div>
    )
}
