
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../ui/Button/Button';

import CountryDetails from '../features/details/CountryDetails';

const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Назад
      </Button>
      <CountryDetails name={name} navigate={navigate} />
    </div>
  );
};

export default Details;
