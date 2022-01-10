import React from 'react';

import { Sort, FilterTransfer, SettingPrice, SelectionAirline } from './';

export const SearchParams = () => {
    return (
        <div>
            <Sort />
            <FilterTransfer />
            <SettingPrice />
            <SelectionAirline />
        </div>
    )
}