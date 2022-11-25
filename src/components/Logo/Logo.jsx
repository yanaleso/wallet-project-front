import logo from '../../images/logo.png';
import logoBig from '../../images/logoBig.png';
import { LogoBox, LogoWallet } from './Logo.styled';
import { useMedia } from 'react-use';

const Logo = () => {
  const isWide = useMedia('(min-width: 768px)');

  return (
    <LogoBox>
      {isWide ? (
        <LogoWallet src={logoBig} alt="logo" />
      ) : (
        <LogoWallet src={logo} alt="logo" />
      )}
      Wallet
    </LogoBox>
  );
};

export default Logo;
