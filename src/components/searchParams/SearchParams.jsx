import React from 'react';

import { Sort, Filter, SettingPrice, SelectionAirline } from './';

export const SearchParams = () => {
    return (
        <div>
            <Sort />
            <Filter />
            <SettingPrice />
            <SelectionAirline />
        </div>
    )
}