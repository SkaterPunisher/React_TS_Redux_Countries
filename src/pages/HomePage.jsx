import { useEffect } from 'react';
import List from '../components/List/List';
import Card from '../components/List/Card/Card';
import Controls from '../components/Controls/Controls';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllCountriesInfo,
  selectVisibleCountries,
} from '../store/countries/countries-selectors';
import { loadCountries } from '../store/countries/countries-actions';
import { selectControls } from '../store/controls/controls-selectors';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { region, search } = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );
  const { status, error, qty } = useSelector(selectAllCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return (
    <>
      <Controls />

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

export default HomePage;
