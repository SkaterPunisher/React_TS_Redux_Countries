import { selectControls } from 'features/controls/controls-selectors';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { Country } from 'types/country';
import {
  selectAllCountriesInfo,
  selectVisibleCountries,
} from './countries-selectors';
import { loadCountries } from './countries-slice';

export const useCountries = (): [
  Country[],
  ReturnType<typeof selectAllCountriesInfo>
] => {
  const dispatch = useAppDispatch();

  const { region, search } = useSelector(selectControls);
  const countries = useSelector((state: RootState) =>
    selectVisibleCountries(state, { search, region })
  );
  const { status, error, qty } = useSelector(selectAllCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
