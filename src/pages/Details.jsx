import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useEffect } from 'react';
import { Button } from '../ui/Button/Button';
import Info from '../components/Info/Info';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetails } from '../store/details/details-selector';
import {
  clearDetails,
  loadCountryByName,
} from '../store/details/details-actions';

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    //при размонтировании или при переходе вызывается функция ниже
    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Назад
      </Button>
      {status === 'loading' && <h2>Идет загрузка</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info navigate={navigate} {...currentCountry} />}
    </div>
  );
};

export default Details;
