import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sortingData, selectionSortType} from '../../store/reducers/sortingData';

import { FormLabel, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material/';

const text = {
    title: 'Сортировать',
    incrementPrice: '- По возрастанию цены',
    decrementPrice: '- По убыванию цены',
    time: '- По времени в пути'
};

const sortBy = {
    incrementPrice: 'increment',
    decrementPrice: 'decrement',
    time: 'time',
};

export const SortData = () => {
    const dispatch = useDispatch()
    const sortingType = useSelector(selectionSortType)

    const onSetTypeSort = (e) => {
        const { value } = e.target;
        dispatch(sortingData({ value }))
    };

    const controlProps = (sortBy, text) => ({
        value: sortBy ,
        onChange: onSetTypeSort ,
        checked: sortingType === sortBy,
        control: <Radio size="small"/>,
        label: text,
    })

    return (
        <FormControl>
            <FormLabel id='radio-buttons-group-label'>{ text.title }</FormLabel>
            <RadioGroup sx={{ m: 2 }} 
                        aria-labelledby="radio-buttons-group-label"
                        name="radio-buttons-group">
                <FormControlLabel 
                    { ...controlProps(
                        sortBy.incrementPrice,
                        text.incrementPrice
                    )}
                />
                <FormControlLabel
                    { ...controlProps(
                        sortBy.decrementPrice,
                        text.decrementPrice
                    )}
                />
                <FormControlLabel
                    { ...controlProps(
                        sortBy.time,
                        text.time
                    )}
                />
            </RadioGroup>
        </FormControl>
    )
}
