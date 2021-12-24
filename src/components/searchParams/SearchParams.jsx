import React from 'react';

import { Sort } from './Sort';
import { Filter } from './Filter';
import { SettingPrice } from './SettingPrice';
import { SelectionAirline } from './SelectionAirline';

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