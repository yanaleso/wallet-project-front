import styled from 'styled-components';
import { dayTheme } from '../../theme';
import { Field } from 'formik';

export const StyledFilters = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  padding: 15px 0;
  border-radius: 30px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  p {
    @media (min-width: 768px) {
      margin: 0;
      &:nth-child(1) {
        width: 15%;
      }
      &:nth-child(2) {
        width: 15%;
        display: flex;
        justify-content: center;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 25%;
      }
      &:nth-child(5) {
        width: 10%;
        display: flex;
        justify-content: flex-end;
      }
      &:nth-child(6) {
        width: 15%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

export const CheckBoxLabel = styled.label`
  background-color: #ffffff;
  position: relative;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 181px;
  }
  @media screen and (min-width: 1280px) {
    width: 181px;
  }
`;

export const CheckBox = styled(Field)`
  width: 20px;
  height: 20px;
  visibility: hidden;
`;

export const StyledTableHeader = styled.div`
  background-color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  padding: 15px 20px;
  border-radius: 30px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  p {
    @media (min-width: 768px) {
      margin: 0;
      &:nth-child(1) {
        width: 15%;
      }
      &:nth-child(2) {
        width: 15%;
        display: flex;
        justify-content: center;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 25%;
      }
      &:nth-child(5) {
        width: 10%;
        display: flex;
        justify-content: flex-end;
      }
      &:nth-child(6) {
        width: 15%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

export const StyledTable = styled.div`
  @media (max-width: 1279px) {
    width: 395px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;

export const StyledTableBody = styled.ul`
  margin: 0;
  padding: 0 20px;
  font-size: ${dayTheme.fontSizes.s};
  line-height: 1.5;
  li {
    align-items: center;
    height: 52px;

    border-bottom: 1px solid #dcdcdf;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }
  li > p {
    margin: 0;
    @media (min-width: 768px) {
      &:nth-child(1) {
        width: 40%;
      }
      &:nth-child(2) {
        width: 15%;
        display: flex;
        justify-content: center;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 25%;
      }
      &:nth-child(5) {
        width: 10%;
        font-weight: ${dayTheme.fontWeights.bold};
        display: flex;
        justify-content: flex-end;
      }
      &:nth-child(6) {
        width: 15%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

export const StyledTableFooter = styled.ul`
  margin: 0;
  border-radius: 10px;
  li {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    padding: 12px 20px;
    border: none;
    display: flex;
    justify-content: space-between;
  }
  li > span {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  border-radius: 10px;
  li {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    padding: 12px 20px;

    border-bottom: 1px solid #dcdcdf;

    display: flex;
    justify-content: space-between;
  }
  li > span {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const StyledWrap = styled.div`
  max-width: 280px;
  margin: auto;
  border-left: 5px;

  ul {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const StyledInnerSpan = styled.div`
display: block;
  width: '24px';
  height: '24px';
  margin-right: '10px';
  background: ${ props => props.category === "Main" ? '#FED057' :
                        props.category === 'Food' ? '#FFD8D0' : 
                        props.category === 'Auto' ? '#FD9498' : 
                        props.category === 'Development' ? '#C5BAFF' : 
                        props.category === 'Children' ? '#6E78E8' : 
                        props.category === 'House' ? '#4A56E2' : 
                        props.category === 'Education' ? '#81E1FF' : 
                        props.category === 'Leisure' ? '#24CCA7' : '#00AD84'}
                      
`;
