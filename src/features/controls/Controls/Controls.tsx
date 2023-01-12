import { Region } from 'types/regions';
import { useRegion } from '../use-region';
import { CustomSelect } from './CustomSelect';
import Search from './Search/Search';
import { WrapperControls } from './WrapperControls';

const optionsMap: Record<Region, { value: Region; label: Region }> = {
  Africa: {
    value: 'Africa',
    label: 'Africa',
  },
  America: {
    value: 'America',
    label: 'America',
  },
  Asia: {
    value: 'Asia',
    label: 'Asia',
  },
  Europe: {
    value: 'Europe',
    label: 'Europe',
  },
  Oceania: {
    value: 'Oceania',
    label: 'Oceania',
  },
};
const options = Object.values(optionsMap);

const Controls = () => {
  const [region, handleSelect] = useRegion();

  return (
    <WrapperControls>
      <Search />
      <CustomSelect
        options={options}
        placeholder='По региону'
        isClearable //по Х можем очищать поле ввода
        isSearchable={false} //запрещаем поиск по вводу в него
        value={region ? optionsMap[region] : ''}
        onChange={handleSelect}
      />
    </WrapperControls>
  );
};

export default Controls;
