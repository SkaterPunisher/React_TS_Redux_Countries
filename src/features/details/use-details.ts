import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { selectDetails } from './details-selectors';
import { clearDetails, loadCountryByName } from './details-slice';

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
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
