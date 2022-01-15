import React from 'react';

import { useDispatch } from 'react-redux';

import { filterAirlines } from '../../store/reducers/selectionReducer';

export const SelectionAirline = () => {
    const dispatch = useDispatch()

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
                    value={'polishAirlines'}
                    onChange={onSetAirlines}
                />
                - LOT Polish Airlines
            </label>
            <label>
                <input
                    type='checkbox'
                    name='select'
                    value={'airflotAirlines'}
                    onChange={onSetAirlines}
                />
                - Аэрофлот
            </label>
        </div>
    )
}
