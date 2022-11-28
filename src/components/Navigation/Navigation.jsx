import {
  Link,
  List,
  ListMob,
  LinkMob,
  HomeSvg,
  StatisticSvg,
  CurrencySvg,
} from './Navigation.stuled';
import { useMedia } from 'react-use';

const Navigation = () => {
  const isMobie = useMedia('(max-width: 767px)');
  return (
    <div>
      {isMobie ? (
        <ListMob>
          <LinkMob to="/home">
            <HomeSvg />
          </LinkMob>
          <LinkMob to="/statistic">
            <StatisticSvg />
          </LinkMob>
          <LinkMob to="/currency">
            <CurrencySvg />
          </LinkMob>
        </ListMob>
      ) : (
        <List>
          <Link to="/home">
            <HomeSvg />
            <p>Home</p>
          </Link>
          <Link to="/statistic">
            <StatisticSvg />
            <p>Statistic</p>
          </Link>
        </List>
      )}
    </div>
  );
};

export default Navigation;
