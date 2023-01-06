// import { useEffect } from 'react';
import { useState } from 'react';
import { CustomSelect } from './CustomSelect';
import Search from './Search/Search';
import { WrapperControls } from './WrapperControls';

const option = [
  {
    value: 'Africa',
    label: 'Африка',
  },
  {
    value: 'America',
    label: 'Америка',
  },
  {
    value: 'Asia',
    label: 'Азия',
  },
  {
    value: 'Europe',
    label: 'Европа',
  },
  {
    value: 'Oceania',
    label: 'Океания',
  },
];

const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  // useEffect(() => {
  //   const regionValue = region?.value || '';
  //   // onSearch(search, regionValue);

  //   // eslint-disable-next-line
  // }, [search, region]);

  return (
    <WrapperControls>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={option}
        placeholder='По региону'
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </WrapperControls>
  );
};

export default Controls;
