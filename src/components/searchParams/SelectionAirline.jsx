import React from 'react';

export const SelectionAirline = () => {

    const onSetAirlines = (e) => {
        const valueSort = e.target.value
        console.log(valueSort)
    }

    return (
        <div>
            <h4>Фильтровать</h4>
            <label>
                <input
                    type='checkbox'
                    name='select'
                    value={'selectPolishAirlines'}
                    onChange={onSetAirlines}
                />
                - LOT Polish Airlines
            </label>
            <label>
                <input
                    type='checkbox'
                    name='select'
                    value={'selectAirflotAirlines'}
                    onChange={onSetAirlines}
                />
                - Аэрофлот
            </label>
        </div>
    )
}
