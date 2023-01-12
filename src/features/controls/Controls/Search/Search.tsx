import { IoSearch } from 'react-icons/io5';
import { InputContainer } from './InputContainer';
import { Input } from './Input';
import { useSearch } from '../../use-search';

const Search = () => {
  const [search, handleSearch] = useSearch();

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handleSearch} value={search} />
    </InputContainer>
  );
};

export default Search;
