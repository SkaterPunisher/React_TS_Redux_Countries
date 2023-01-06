import { useEffect } from 'react';
import { Container } from '../Container/Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { ModeSwitcher } from './ModeSwitcher';
import { Title } from './Title';
import { WrapperHeader } from './WrapperHeader';
import { HeaderEl } from './HeaderEl';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../store/theme/them-actions';
import { clearControls } from '../../store/controls/controls-actions';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const cleanUp = () => {
    dispatch(clearControls());
  };

  return (
    <HeaderEl>
      <Container>
        <WrapperHeader>
          <Title onClick={cleanUp}>Ntrcn</Title>
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
