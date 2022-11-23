import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-bottom: 28px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Link = styled(NavLink)`
  display: flex;
  gap: 23px;
  color: ${p => p.theme.colors.primaryText};

  &.active {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const ImgNav = styled.img`
  width: 18px;
  height: 18px;
`;

export const ListMob = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const LinkMob = styled(NavLink)``;
