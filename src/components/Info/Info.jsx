import { InfoImg } from './InfoImg';
import { InfoList } from './InfoList';
import { InfoListGroup } from './InfoListGroup';
import { InfoListItem } from './InfoListItem';
import { InfoMeta } from './InfoMeta';
import { InfoTag } from './InfoTag';
import { InfoTagGroup } from './InfoTagGroup';
import { InfoTitle } from './InfoTitle';
import { WrapperInfo } from './WrapperInfo';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNeighbors } from '../../store/details/details-selector';
import { loadNeighborsByBorder } from '../../store/details/details-actions';

const Info = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    navigate,
  } = props;
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return (
    <WrapperInfo>
      <InfoImg src={flag} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>

        <InfoListGroup>
          <InfoList>
            <InfoListItem>
              <b>Название:</b> {nativeName}
            </InfoListItem>
            <InfoListItem>
              <b>Население:</b> {population}
            </InfoListItem>
            <InfoListItem>
              <b>Регион:</b> {region}
            </InfoListItem>
            <InfoListItem>
              <b>Соседние регионы:</b> {subregion}
            </InfoListItem>
            <InfoListItem>
              <b>Столица:</b> {capital}
            </InfoListItem>
          </InfoList>
          <InfoList>
            <InfoListItem>
              <b>Домэйн:</b>{' '}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </InfoListItem>
            <InfoListItem>
              <b>Валюта:</b>{' '}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </InfoListItem>
            <InfoListItem>
              <b>Языки:</b>{' '}
              {languages.map((l) => (
                <span key={l.name}>{l.name} </span>
              ))}
            </InfoListItem>
          </InfoList>
        </InfoListGroup>
        <InfoMeta>
          <b>Соседние страны</b>
          {!borders.length ? (
            <span>Нет соседних стран</span>
          ) : (
            <InfoTagGroup>
              {neighbors?.map((countryName) => (
                <InfoTag
                  onClick={() => navigate(`/country/${countryName}`)}
                  key={countryName}
                >
                  {countryName}
                </InfoTag>
              ))}
            </InfoTagGroup>
          )}
        </InfoMeta>
      </div>
    </WrapperInfo>
  );
};

export default Info;
