import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearDetails,
  loadCountryByName,
  selectDetails,
} from './details-slice';

export const useDetails = (name) => {
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));
    //при размонтировании или при переходе вызывается функция ниже
    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return { currentCountry, error, status };
};
