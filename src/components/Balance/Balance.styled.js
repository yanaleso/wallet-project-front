import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  min-width: 280px;
  height: 80px;
  margin-bottom: 32px;
  padding: 8px 40px;
  border-radius: 30px;

  background-color: ${theme.colors.primaryBg};
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Title = styled.p`
  margin-bottom: 12px;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.xs};
  line-height: 1.5;

  color: ${theme.colors.secondaryDarkText};
  text-transform: uppercase;
`;

export const CurrencySign = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.l};
  line-height: 1.5;

  color: ${theme.colors.primaryText};
`;

export const Text = styled.span`
  font-family: ${theme.fonts.headingBold};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.5;

  color: ${theme.colors.primaryText};
`;
