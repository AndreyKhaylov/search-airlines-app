import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { filterAirlines } from '../../store/reducers/selectionReducer';
import { selectData } from '../../store/reducers/dataReducer';

export const SelectionAirline = () => {
    const dispatch = useDispatch()
    const selector = useSelector(selectData)

    console.log('@@@ data', selector)

    const onSetAirlines = (e) => {
        const { checked, value } = e.target
        dispatch(filterAirlines({ value, checked }))
    }

    return (
        <div>
            <h4>Авикомпания</h4>
            <label>
                <input
                    type='checkbox'
                    name='select'
                    value={'Air France'}
                    onChange={onSetAirlines}
                />
                - Air France
            </label>
            <label>
                <input
                    type='checkbox'
                    name='select'
                    value={'KLM'}
                    onChange={onSetAirlines}
                />
                - KLM
            </label>
            <label>
                <input
                    type='checkbox'
                    name='select'
                    value={'Аэрофлот - российские авиалинии'}
                    onChange={onSetAirlines}
                />
                - Аэрофлот - российские авиалинии
            </label>
        </div>
    )
}
