import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import Info from './Info/Info';
import { useDetails } from './use-details';

type CountryDetailsProps = {
  name?: string;
  navigate: NavigateFunction;
};

const CountryDetails = ({ name = '', navigate }: CountryDetailsProps) => {
  const { currentCountry, error, status } = useDetails(name);

  return (
    <>
      {status === 'loading' && <h2>Идет загрузка</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info navigate={navigate} {...currentCountry} />}
    </>
  );
};

export default CountryDetails;
