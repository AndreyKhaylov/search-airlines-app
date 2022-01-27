import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { settingPriceData, selectionSettingType, selectionSettingData } from '../../store/reducers/settingPriceReducer'
import useDebounce from '../../hook/useDebounce';

const text = {
    title: 'Цена',
    priceFrom: 'От',
    priceTo: 'До'
}

export const SettingPrice = () => {
    const dispatch = useDispatch()
    const selectorType = useSelector(selectionSettingType)
    const selectorData = useSelector(selectionSettingData)

    const [range, setRange] = useState({})

    const debounce = useDebounce((value) => {
        dispatch(settingPriceData(value))
    }, 750)

    const onSettingPrice = (e) => {
        const { name, value } = e.target
        setRange({ ...range, [name]: Number(value) })
        debounce(range)
    }

    console.log('selectorType', selectorType)
    console.log('selectorData', selectorData)

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
