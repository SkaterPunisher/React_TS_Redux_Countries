import { CountryInfo } from 'types/country';

export type CardProps = CountryInfo & {
  onClick: () => void;
};
