import { useState, useEffect } from 'react';
import { Container } from '../Container/Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { ModeSwitcher } from './ModeSwitcher';
import { Title } from './Title';
import { WrapperHeader } from './WrapperHeader';
import { HeaderEl } from './HeaderEl';


const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <HeaderEl>
      <Container>
        <WrapperHeader>
          <Title>Ntrcn</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size='14px' />
            ) : (
              <IoMoon size='14px' />
            )}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
          </ModeSwitcher>
        </WrapperHeader>
      </Container>
    </HeaderEl>
  );
};

export default Header;
