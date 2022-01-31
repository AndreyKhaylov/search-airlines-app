import React from 'react';

import { SortData, FilterTransfer, FilterPrice, FilterAirline } from '.';

export const SearchParams = () => {
    return (
        <div>
            <SortData />
            <FilterTransfer />
            <FilterPrice />
            <FilterAirline />
        </div>
    )
}