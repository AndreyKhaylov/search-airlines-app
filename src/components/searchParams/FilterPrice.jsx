import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filtrationPrice } from '../../store/reducers/filtrationPrice';
import useDebounce from '../../hook/useDebounce';

import { FormLabel, FormControl, Box, TextField } from '@mui/material/';

const data = {
    title: 'Цена',
    label: { 0: 'От', 1: 'До' },
    name: { 0: 'down', 1: 'up' },
}

export const FilterPrice = () => {
    const dispatch = useDispatch()
    const [range, setRange] = useState({})

    const { title, label, name} = data

    const debounce = useDebounce((value) => {
        dispatch(filtrationPrice(value))
    }, 750)

    const onSettingPrice = (e) => {
        const { name, value } = e.target
        setRange({ ...range, [name]: Number(value) })
    }
    
    debounce(range)

    const controlProps = (name, label, range) => ({
        name: name,
        label: label,
        type: "number",
        value: range,
        onChange: onSettingPrice,
        defaultValue:'0',
        InputLabelProps: {
            shrink: true,
        },
        size: "small",
    })

    return (
        <FormControl sx={{ mt: 2 }}>
            <FormLabel id='input-group-label'>{ title }</FormLabel>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    mt: 4,
                    '& .MuiTextField-root': { width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    {...controlProps(
                        name[0], label[0], range[name[0]])}
                />
                <TextField
                    {...controlProps(
                        name[1], label[1], range[name[1]])}
                />
            </Box>
        </FormControl>
    )
}
