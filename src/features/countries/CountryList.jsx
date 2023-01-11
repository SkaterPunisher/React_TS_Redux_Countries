import List from '../../components/List/List';
import Card from '../../components/List/Card/Card';

import { useNavigate } from 'react-router-dom';
import { useCountries } from './use-countries';

const CountryList = () => {
  const navigate = useNavigate();

  const [countries, { status, error }] = useCountries();

  return (
    <>
      {error && <h2>Невозможно получить данные</h2>}
      {status === 'loading' && <h2>Идет загрузка данных</h2>}
      {status === 'received' && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Регион',
                  description: c.region,
                },
                {
                  title: 'Столица',
                  description: c.capital,
                },
              ],
            };
            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export default CountryList;
