import { NavigateFunction } from 'react-router-dom';
import { Country } from 'types/country';


export type InfoProps = Country & {
    navigate: NavigateFunction;
};
