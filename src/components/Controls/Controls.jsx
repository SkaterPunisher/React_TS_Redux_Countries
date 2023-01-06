import { CustomSelect } from './CustomSelect';
import Search from './Search/Search';
import { WrapperControls } from './WrapperControls';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegion } from '../../store/controls/controls-selectors';
import { setRegion } from '../../store/controls/controls-actions';

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

const Controls = ({ onSearch }) => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const handleSelect = (reg) => {
    dispatch(setRegion(reg?.value || ''));
  };

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
