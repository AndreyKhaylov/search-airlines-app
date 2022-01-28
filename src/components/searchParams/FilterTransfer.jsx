import React from 'react';
import { useDispatch } from 'react-redux';

import { filtrationTranfers } from '../../store/reducers/filterTranfers';

export const FilterTransfer = () => {
    const dispatch = useDispatch();

    const onSetTypeFilter = (e) => {
        const { checked, value } = e.target
        dispatch(filtrationTranfers({ value, checked }))
    }

    return (
        <div>
            <h4>Фильтровать</h4>
            <label>
                <input
                    type='checkbox'
                    name='filter'
                    value={'oneTransfer'}
                    onChange={onSetTypeFilter}
                />
                - 1 пересадка
            </label>
            <label>
                <input
                    type='checkbox'
                    name='filter'
                    value={'withoutTransfer'}
                    onChange={onSetTypeFilter}
                />
                - без пересадок
            </label>
        </div>
    )
}