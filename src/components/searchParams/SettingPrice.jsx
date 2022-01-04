import React from 'react';

export const SettingPrice = () => {
    const [price, setPrice] = React.useState({
        down: 0,
        up: 0,
    })

    const onSettingPrice = (e) => {
        const valuePrice = e.target.value
        console.log(valuePrice)
    }

    return (
        <div>
            <h4>Цена</h4>
            <label>
                От
                <input
                    type='number'
                    name='price'
                    value={price.down}
                    onChange={(e) => onSettingPrice(e)}
                />
            </label>
            <label>
                До
                <input
                    type='number'
                    name='price'
                    value={price.up}
                    onChange={(e) => onSettingPrice(e)}
                />
            </label>
        </div>
    )
}
