import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';

export const FormWrap = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 20px 36px;
  background-color: ${p => p.theme.colors.primaryBg};

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 616px;
    padding: 40px 58px 66px 65px;
    border-radius: 20px;
  }
`;

export const LogoWrap = styled.div`
  width: 50px;
  margin-right: auto;
  margin-left: auto;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  margin-top: 60px;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  border-bottom: 1px solid ${p => p.theme.colors.secondaryLightText};

  & + & {
    margin-top: 40px;
  }
`;

export const Input = styled(Field)`
  width: auto;
  padding: 8px 20px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const ErrorMsg = styled.div`
  position: absolute;
  right: 0;
  bottom: -30px;
  padding: 4px 5px;
  color: red;
  background-color: transparent;
`;

export const SubmitBtn = styled.button`
  display: block;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  min-width: 280px;
  height: 50px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  border: none;
  border-radius: 20px;
  color: ${p => p.theme.colors.primaryBtn};
  background-color: ${p => p.theme.colors.primaryBgBtn};

  :disabled {
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
`;

export const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 50px;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid ${p => p.theme.colors.secondaryBtn};
  border-radius: 20px;
  color: ${p => p.theme.colors.secondaryBtn};
  background-color: ${p => p.theme.colors.primaryBtn};
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
