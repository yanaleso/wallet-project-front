import { useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { IoExitOutline } from 'react-icons/io5';
import Logo from 'components/Logo';
import { disablePageScroll } from 'scroll-lock';
import {
  Container,
  UserBox,
  ButtonExit,
  Text,
  TextName,
} from './Header.styled';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';

const Header = ({ setIsOpenExitModal }) => {
  const disableScrollOff = () => {
    disablePageScroll();
    setIsOpenExitModal();
  };

  const { firstName } = useSelector(state => state.auth.user);

  return (
    <header>
      <Container>
        <Logo />
        <UserBox>
          <ThemeToggle />
          <TextName>{ firstName }</TextName>
          <IconContext.Provider value={{ color: '#BDBDBD', size: '25' }}>
            <ButtonExit onClick={disableScrollOff}>
              <IoExitOutline />
              <Text>Exit</Text>
            </ButtonExit>
          </IconContext.Provider>
        </UserBox>
      </Container>
    </header>
  );
};

export default Header;
