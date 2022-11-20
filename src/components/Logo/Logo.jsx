import logo from '../../images/logo.png'
import logoBig from '../../images/logoBig.png'
import { LogoBox, LogoWallet } from './Logo.styled';
import Media from 'react-media';

const Logo = () => {
  return (
    <LogoBox>
      <Media queries={{ small: { maxWidth: 767 } }}>
        {matches =>
          matches.small ? (
            <LogoWallet src={logo} alt="logo" />
          ) : (
            <LogoWallet src={logoBig} alt="logo" />
          )
        }
      </Media>
      Wallet
    </LogoBox>
  );
};

export default Logo;
