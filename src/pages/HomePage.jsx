import axios from 'axios';
import { useState, useEffect } from 'react';
import List from '../components/List/List';
import Card from '../components/List/Card/Card';
import Controls from '../components/Controls/Controls';
import { ALL_COUNTRIES } from '../config';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);
  return (
    <>
      <Controls />
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
    </>
  );
};

export default HomePage;
