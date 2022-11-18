import styled from 'styled-components';

export const StyledTableHeader = styled.div`
display: flex;

    background-color: #FFFFFF;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;

    padding: 15px 20px;
    border-radius: 30px;
    p{
      margin: 0;
      &:nth-child(1){
        width: 115px;
      }
      &:nth-child(2){
        width: 60px;
    }
    &:nth-child(3){
      width: 150px;
    }
    &:nth-child(4){
      width: 155px;
    }
    &:nth-child(5){
      width: 120px;
      display: flex;
      justify-content: flex-end;
    }
    &:nth-child(6){
      width: 130px;
      display: flex;
      justify-content: flex-end;
    }
    }

`;

export const StyledTable = styled.div`
width: 715px;

`;

export const StyledList = styled.ul`
margin: 0;
padding: 0 20px;
font-weight: 400;
font-size: 16px;
line-height: 1.5;
li{
  display: flex;
  align-items: center;
  height: 52px;
  &:not(:last-child){
    border-bottom: 1px solid #DCDCDF;
  }
}
li>p{
  margin: 0;
    &:nth-child(1){
        width: 120px;
      }
    &:nth-child(2){
        width: 54px;
    }
    &:nth-child(3){
      width: 150px;
    }
    &:nth-child(4){
      width: 155px;
    }
    &:nth-child(5){
      width: 120px;
      font-weight: 700;
      display: flex;
      justify-content: flex-end;
    }
    &:nth-child(6){
      width: 130px;
      display: flex;
      justify-content: flex-end;
    }
}

`