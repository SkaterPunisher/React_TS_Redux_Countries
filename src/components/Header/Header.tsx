import { Container } from '../Container/Container';
import { Title } from './Title';
import { WrapperHeader } from './WrapperHeader';
import { HeaderEl } from './HeaderEl';

import ThemeSwitcher from '../../features/theme/ThemeSwitcher';
import { useClearup } from '../../features/controls/use-cleanup';

const Header = () => {
  const cleanUp = useClearup();

  return (
    <HeaderEl>
      <Container>
        <WrapperHeader>
          <Title onClick={cleanUp}>Главная</Title>
          <ThemeSwitcher />
        </WrapperHeader>
      </Container>
    </HeaderEl>
  );
};

export default Header;
