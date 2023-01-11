import { useRegion } from '../use-region';
import { CustomSelect } from './CustomSelect';
import Search from './Search/Search';
import { WrapperControls } from './WrapperControls';

const optionsMap = [
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
        value={optionsMap[region]}
        onChange={handleSelect}
      />
    </WrapperControls>
  );
};

export default Controls;
