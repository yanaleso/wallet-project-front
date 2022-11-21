import { IconContext } from 'react-icons';
import { IoExitOutline } from 'react-icons/io5';
import Logo from 'components/Logo';
import {
  StyledHeader,
  UserBox,
  ButtonExit,
  Text,
  TextName,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <UserBox>
        <TextName>Name</TextName>
        <IconContext.Provider value={{ color: '#BDBDBD', size: '25' }}>
          <ButtonExit>
            <IoExitOutline />
            <Text>Exit</Text>
          </ButtonExit>
        </IconContext.Provider>
      </UserBox>
    </StyledHeader>
  );
};

export default Header;
