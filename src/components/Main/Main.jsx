import styled from 'styled-components';
import { Container } from '../Container/Container';
import { WrapperMain } from './WrapperMain';

const Main = ({ children }) => {
  return (
    <WrapperMain>
      <Container>{children}</Container>
    </WrapperMain>
  );
};

export default Main;
