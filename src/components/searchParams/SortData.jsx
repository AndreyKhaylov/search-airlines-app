import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sortingData, selectionSortType} from '../../store/reducers/sortingData';

import { FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material/';

const title = {
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

    return (
        <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">{ title.title }</FormLabel>
            <FormGroup sx={{ m: 2 }}>
                <FormControlLabel
                    control={
                        <Checkbox   value={ sortBy.incrementPrice }
                                    onChange={ onSetTypeSort }
                                    checked={ sortingType === sortBy.incrementPrice }
                        />
                    }
                    label={ title.incrementPrice }
                />
                <FormControlLabel
                    control={
                        <Checkbox   value={ sortBy.decrementPrice }
                                    onChange={ onSetTypeSort }
                                    checked={ sortingType === sortBy.decrementPrice } 
                        />
                    }
                    label={ title.decrementPrice }
                />
                <FormControlLabel
                    control={
                        <Checkbox   value={ sortBy.time }
                                    onChange={ onSetTypeSort }
                                    checked={ sortingType === sortBy.time }   
                        />
                    }
                    label={ title.time }
                />
            </FormGroup>
        </FormControl>
    )
}

// export const useInput = initialValue => {
//     const [value, setValue] = useState(initialValue);
//     return [
//     { value, onChange: e => setValue(e.target.value) },
//     () => setValue(initialValue)
//     ];
//     };
