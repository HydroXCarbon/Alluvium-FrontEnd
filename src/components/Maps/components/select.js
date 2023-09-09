import React from 'react';
import { Select } from 'antd';

const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
const button = () => (
    <Select
        showSearch
        placeholder="Select type of building"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
            {
                value: 'house',
                label: 'House',
            },
        ]}
    />
);
export default button;
