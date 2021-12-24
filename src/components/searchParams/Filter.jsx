import React from 'react';

export const Filter = () => {

    const onSetTypeFilter = (e) => {
        const valueSort = e.target.value
        console.log(valueSort)
    }

    return (
        <div>
            <h4>Фильтровать</h4>
            <label>
                <input
                    type='checkbox'
                    name='filter'
                    value={'filterOneTransfer'}
                    onChange={onSetTypeFilter}
                />
                - 1 пересадка
            </label>
            <label>
                <input
                    type='checkbox'
                    name='filter'
                    value={'filterWithoutTransfer'}
                    onChange={onSetTypeFilter}
                />
                - без пересадок
            </label>
        </div>
    )
}