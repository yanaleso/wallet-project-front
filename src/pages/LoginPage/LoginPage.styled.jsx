import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  padding: 107px 0px;
  height: 100vh;
  overflow: hidden;
  z-index: -2;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    padding: 60px 0px 0px;
    background-color: ${p => p.theme.colors.loginPageBg};
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    padding: 0px;
    background-color: ${p => p.theme.colors.loginPageBg};
  }
`;

export const Container = styled.div`
  max-width: 1420px;
  margin: 0px auto;
  padding: 0px 15px;
`;

export const Frame = styled.img``;

export const RedСircle = styled.div`
  position: absolute;
  right: -230px;
  top: -170px;
  width: 618px;
  height: 547px;
  border-radius: ${p => p.theme.radii.round};
  background: #ffd8d0;
  transform: rotate(21.94deg);
  z-index: -1;
`;

export const RedСircleText = styled.p`
  position: absolute;
  left: 70px;
  bottom: 100px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  transform: rotate(-22deg);
  color: ${p => p.theme.colors.primaryText};
`;

export const VioletСircle = styled.div`
  position: absolute;
  left: -55px;
  bottom: -150px;
  width: 618px;
  height: 547px;
  border-top-left-radius: 115%;
  border-top-right-radius: 60%;
  border-bottom-right-radius: 10%;
  background: #c5baff;
  transform: rotate(36deg);
  z-index: -1;
`;

export const VioletСircleText = styled.p`
  position: fixed;
  right: 180px;
  top: 190px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  transform: rotate(-36deg);
  color: ${p => p.theme.colors.primaryText};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50vw;
`;
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50vw;
  /* backdrop-filter: blur(25px); */
  background-color: rgba(255, 255, 255, 0.4);
`;
