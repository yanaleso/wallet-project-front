import { Field, Form } from 'formik';
import Datetime from 'react-datetime';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 37px;
  width: 320px;
  border-radius: 20px;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 32px;
    width: 540px;
  }
`;

export const ImputsWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 73px;
    padding-right: 73px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 35px;
  font-weight: 400;
  text-align: center;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 45px;
  }
`;

export const TransactionForm = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelComment = styled.label`
  display: block;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const InputComment = styled(Field)`
  width: 100%;
  background-color: inherit;
  border: none;
  outline: none;
  border-bottom: 1px solid #bdbdbd;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  margin-bottom: 40px;

  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

export const CheckBoxLabel = styled.label`
  position: relative;
  width: 80px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
`;

export const CheckBox = styled(Field)`
  width: 20px;
  height: 20px;
  visibility: hidden;
`;

export const DateWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    column-gap: 30px;
    width: 100%;

    margin-top: 40px;
  }
`;

export const LabelSum = styled.label`
  display: block;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 0;
  }
`;

export const InputSum = styled(Field)`
  width: 100%;
  background-color: inherit;
  border: none;
  outline: none;
  border-bottom: 1px solid #bdbdbd;

  @media screen and (min-width: 768px) {
  }
`;

export const StyledDatetime = styled(Datetime)`
  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: inherit;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  justify-content: space-between;
`;

export const ButtonAdd = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 20px;

  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  text-transform: uppercase;

  color: #fff;
  border: none;
  margin-bottom: 20px;
  background-color: #24cca7;
`;

export const ButtonCancel = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 20px;

  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  text-transform: uppercase;

  color: #4a56e2;
  border: 1px solid #4a56e2;
`;

export const Switch = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -2px;
  left: -2px;

  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ff6596;
  transition: transform 300ms linear;

  background-color: ${prop => (prop.isChecked ? '#24CCA7' : '#FF6596')};
  transform: ${prop => (prop.isChecked ? 'translateX(0)' : 'translateX(40px)')};
`;

export const TextIncome = styled.p`
  color: ${prop => (prop.isChecked ? '#24CCA7' : '#e0e0e0')};
`;

export const TextExpense = styled.p`
  color: ${prop => (prop.isChecked ? '#e0e0e0' : '#ff6596')};
`;
