import { Link, ImgNav, List, ListMob, LinkMob } from './Navigation.stuled';
import homeSvg from '../../images/home.svg';
import statisticSvg from '../../images/statistic.svg';
import { useMedia } from 'react-use';
import currencySvg from '../../images/currency.svg';

const Navigation = () => {
  const isMobie = useMedia('(max-width: 767px)');
  return (
    <div>
      {isMobie ? (
        <ListMob>
          <LinkMob to="/home">
            <img src={homeSvg} alt="Statistic" />
          </LinkMob>
          <LinkMob to="/statistic">
            <img src={statisticSvg} alt="Statistic" />
          </LinkMob>
          <LinkMob to="/currency">
            <img src={currencySvg} alt="Statistic" />
          </LinkMob>
        </ListMob>
      ) : (
        <List>
          <Link to="/home">
            <ImgNav src={homeSvg} alt="Home image" />
            <p>Home</p>
          </Link>
          <Link to="/statistic">
            <ImgNav src={statisticSvg} alt="Statistic image" />
            <p>Statistic</p>
          </Link>
        </List>
      )}
    </div>
  );
};

export default Navigation;
