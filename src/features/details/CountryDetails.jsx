import React from 'react';
import Info from '../../features/details/Info/Info';
import { useDetails } from './use-details';

const CountryDetails = ({ name, navigate }) => {
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
