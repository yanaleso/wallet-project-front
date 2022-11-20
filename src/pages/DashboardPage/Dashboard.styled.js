import styled from 'styled-components';
import EllipseRed from '../../images/EllipseRed.png';
import EllipseViolet from '../../images/EllipseViolet.png';
import { theme } from '../../theme';

export const Section = styled.section`
  @media screen and (max-width: 767px) {
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.colors.loginPageBg};
    background-image: url(${EllipseViolet}), url(${EllipseRed});
    background-position: 0 100%, 100% 0;
    background-repeat: no-repeat;
  }
`;

export const Blur = styled.div`
  min-height: 100vh;
  backdrop-filter: blur(50px);
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 480px;
    padding: 12px 20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 46px 32px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (max-width: 767px) {
    /* align-items: center; */
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const TabletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DesktopWrapper = styled.div`
  display: flex;
`;

export const Vector = styled.div`
  position: relative;
  top: -46px;
  height: 110vh;
  margin: 0 69px;
  border: ${theme.borders.normal} #e7e5f2;
  box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
    1px 0px 0px rgba(255, 255, 255, 0.6);
`;
