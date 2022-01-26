import React from 'react';

import { settingPriceData } from '../../store/reducers/settingPriceReducer'

export const SettingPrice = () => {
    // const [range, setPrice] = React.useState({
    //     down: 0,
    //     up: 0,
    // })

    const onSettingPrice = (e) => {
        const { value } = e.target
        dispatch(settingPriceData(range))
    }

    return (
        <div>
            <h4>Цена</h4>
            <label>
                От
                <input
                    type='number'
                    name='range'
                    value={range.down}
                    onChange={(e) => onSettingPrice(e)}
                />
            </label>
            <label>
                До
                <input
                    type='number'
                    name='range'
                    value={range.up}
                    onChange={(e) => onSettingPrice(e)}
                />
            </label>
        </div>
    )
}
