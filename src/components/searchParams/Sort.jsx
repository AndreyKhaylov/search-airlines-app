import React from 'react';

export const Sort = () => {
    const [value, setValue] = React.useState('sortByToUpPrice');

    const onSetTypeSort = (e) => {
        const valueSort = e.target.value
        setValue(valueSort)
    }

    return (
        <section>
            <h4>Сортировать</h4>
            <label>
                <input
                    type='radio'
                    name='sort'
                    value={'sortByToUpPrice'}
                    onChange={onSetTypeSort}
                    checked={value === 'sortByToUpPrice'}
                />
                - По возрвстанию цены
            </label>
            <label>
                <input
                    type='radio'
                    name='sort'
                    value={'sortByToDownPrice'}
                    onChange={onSetTypeSort}
                    checked={value === 'sortByToDownPrice'}
                />
                - По убыванию цены
            </label>
            <label>
                <input
                    type='radio'
                    name='sort'
                    value={'sortByTime'}
                    onChange={onSetTypeSort}
                    checked={value === 'sortByTime'}
                />
                - По времени в пути
            </label>
        </section>
    )
}

// export const useInput = initialValue => {
//     const [value, setValue] = useState(initialValue);
//     return [
//     { value, onChange: e => setValue(e.target.value) },
//     () => setValue(initialValue)
//     ];
//     };
