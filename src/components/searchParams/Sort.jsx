import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sortData, selectionSortType} from '../../store/reducers/sortData';

const title = {
    title: 'Сортировать',
    incrementPrice: '- По возрвстанию цены',
    decrementPrice: '- По убыванию цены',
    time: '- По времени в пути'
};

const sortBy = {
    incrementPrice: 'increment',
    decrementPrice: 'decrement',
    time: 'time',
};

export const Sort = () => {
    const dispatch = useDispatch()
    const sortingType = useSelector(selectionSortType)

    const onSetTypeSort = (e) => {
        const { value } = e.target;
        dispatch(sortData({ value }))
    };

    return (
        <section>
            <h4>{ title.title }</h4>
            <label>
                <input
                    type='radio'
                    name='sort'
                    value={sortBy.incrementPrice}
                    onChange={onSetTypeSort}
                    checked={sortingType === sortBy.incrementPrice}
                />
                { title.incrementPrice }
            </label>
            <label>
                <input
                    type='radio'
                    name='sort'
                    value={sortBy.decrementPrice}
                    onChange={onSetTypeSort}
                    checked={sortingType === sortBy.decrementPrice}
                />
                 { title.decrementPrice }
            </label>
            <label>
                <input
                    type='radio'
                    name='sort'
                    value={sortBy.time}
                    onChange={onSetTypeSort}
                    checked={sortingType === sortBy.time}
                />
                { title.time }
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
