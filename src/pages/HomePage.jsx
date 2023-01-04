import axios from 'axios';
import { useEffect } from 'react';
import List from '../components/List/List';
import Card from '../components/List/Card/Card';
import Controls from '../components/Controls/Controls';
import { ALL_COUNTRIES } from '../config';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HomePage = ({ setCountries, countries }) => {
  const navigate = useNavigate();

  const [filtredCountries, setFiltredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltredCountries(data);
  };

  useEffect(() => {
    if (!countries.lenght)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);
  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filtredCountries.map((c) => {
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
