import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filtrationPrice } from '../../store/reducers/filtrationPrice';
import useDebounce from '../../hook/useDebounce';

const text = {
    title: 'Цена',
    priceFrom: 'От',
    priceTo: 'До'
}

export const FilterPrice = () => {
    const dispatch = useDispatch()
    const [range, setRange] = useState({})

    const debounce = useDebounce((value) => {
        dispatch(filtrationPrice(value))
    }, 750)

    const onSettingPrice = (e) => {
        const { name, value } = e.target
        setRange({ ...range, [name]: Number(value) })
        debounce(range)
    }

    return (
        <div>
            <h4>{text.title}</h4>
            <label>
                {text.priceFrom}
                <input
                    type='number'
                    name='down'
                    value={range.down}
                    onChange={(e) => onSettingPrice(e)}
                />
            </label>
            <label>
                {text.priceTo}
                <input
                    type='number'
                    name='up'
                    value={range.up}
                    onChange={(e) => onSettingPrice(e)}
                />
            </label>
        </div>
    )
}
