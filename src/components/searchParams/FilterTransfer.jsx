import React from 'react';
import { useDispatch } from 'react-redux';

import { filtrationTranfers } from '../../store/reducers/filtrationTranfers';

import { FormLabel, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material/';

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
    const { title, value, label } = data
    const dispatch = useDispatch();
    
    const onSetTypeFilter = (e) => {
        const { value, checked } = e.target
        dispatch(filtrationTranfers({ value, checked }))
    }
    
    const controlProps = (value, label) => ({
        value: value,
        onChange: onSetTypeFilter,
        control: <Checkbox size="small"/>,
        label: label,
        labelPlacement: "end",
    })

    return (
        <FormControl sx={{ mt: 2 }} >
            <FormLabel>{ title }</FormLabel>
            <FormGroup sx={{ m: 2 }}>
                <FormControlLabel  
                    {...controlProps(
                        value[1], label[1] )} 
                />
                <FormControlLabel  
                    {...controlProps(
                        value[0], label[0] )} 
                />
            </FormGroup>
        </FormControl>
    )
}