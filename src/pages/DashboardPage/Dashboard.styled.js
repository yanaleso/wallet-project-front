import styled from 'styled-components';
import EllipseRed from '../../images/EllipseRed.png';
import EllipseViolet from '../../images/EllipseViolet.png';

export const Section = styled.section`
  @media screen and (min-width: 768px) {
    width: 100%;
    min-height: 100vh;
    background-color: #e7eaf2;
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
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
