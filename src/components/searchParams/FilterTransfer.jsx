import React from 'react';
import { useDispatch } from 'react-redux';

import { filtrationTranfers } from '../../store/reducers/filtrationTranfers';

const data = {
    title: 'Фильтровать',
    value: {
        0: 'withoutTransfer',
        1: 'oneTransfer',
    },
    label: {
        0: '- без пересадок',
        1: '- 1 пересадка'
    }
}

export const FilterTransfer = () => {
    const dispatch = useDispatch();

    const onSetTypeFilter = (e) => {
        const { value, checked } = e.target
        dispatch(filtrationTranfers({ value, checked }))
    }

    return (
        <div>
            <h4>{data.title}</h4>
            <label>
                <input
                    type='checkbox'
                    name='filter'
                    value={data.value[1]}
                    onChange={onSetTypeFilter}
                />
                {data.label[1]}
            </label>
            <label>
                <input
                    type='checkbox'
                    name='filter'
                    value={data.value[0]}
                    onChange={onSetTypeFilter}
                />
                {data.label[0]}
            </label>
        </div>
    )
}