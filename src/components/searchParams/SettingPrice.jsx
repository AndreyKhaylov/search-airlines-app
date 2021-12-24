import React from 'react';

export const SettingPrice = () => {
    const [price, setPrice] = useState({
        down: null,
        up: null,
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
