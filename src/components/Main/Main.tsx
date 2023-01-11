import { ReactNode } from 'react';
import { Container } from '../Container/Container';
import { WrapperMain } from './WrapperMain';

type MainProps = {
  children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <WrapperMain>
      <Container>{children}</Container>
    </WrapperMain>
  );
};

export default Main;
