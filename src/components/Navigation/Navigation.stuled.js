import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../../images/home.svg';
import { ReactComponent as Statistic } from '../../images/statistic.svg';
import { ReactComponent as Currency } from '../../images/currency.svg';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  font-size: ${p => p.theme.fontSizes.m};
`;

export const Link = styled(NavLink)`
  display: flex;
  gap: 23px;
  padding: 11px 5px;

  color: ${p => p.theme.colors.navIconBg};
  &.active {
    color: ${p => p.theme.colors.navIconBgActive};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const ListMob = styled.ul`
  display: flex;
  justify-content: space-evenly;

  margin-bottom: 15px;
`;

export const LinkMob = styled(NavLink)`
  color: ${p => p.theme.colors.navIconBg};

  &.active {
    color: ${p => p.theme.colors.navIconBgActive};
  }
`;

export const LinkText = styled.p`
  color: ${p => p.theme.colors.primaryText};
`;

export const HomeSvg = styled(Home)`
  fill: currentColor;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const StatisticSvg = styled(Statistic)`
  fill: currentColor;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const CurrencySvg = styled(Currency)`
  fill: currentColor;
`;
