import moment from 'moment';
import { StyledList } from './HomeTab.styled'
import { getSymbolType } from 'helpers/formAddTransaction/getSymbolType';
import { forwardRef } from 'react';


const HomeTabItem = forwardRef(({ transaction }, ref) => {
    const {  date, typeOperation, category, comment, amount, balanceAfterTransaction } = transaction;
    const currenrDate = moment(new Date(date)).format('DD.MM.YYYY')


    const bodyTransaction = 
    <>
      <p>{currenrDate}</p>
      <p>{getSymbolType(typeOperation)}</p>
      <p>{category}</p>
        <p>{comment}</p>
        <p style={{ color: typeOperation === "income" ? '#24CCA7' : '#FF6596' }}>{amount}</p>
        <p>{balanceAfterTransaction}</p>
    </>

      const content = ref
        ? <li ref={ref} style={{background: "tomato"}}>{bodyTransaction}</li>
        : <li>{bodyTransaction}</li>
        // console.log("HomeTabMobItem ~ content", content);

    return content

    
})

const HomeTabMobItem = forwardRef(({ transaction }, ref) => {
    const { date, typeOperation, category, comment, amount, balanceAfterTransaction } = transaction;
    const currenrDate = moment(new Date(date)).format('DD.MM.YYYY')
    
    // const bodyTransaction = 
    // <>
    //   <span>{balanceAfterTransaction}</span>
    // </>

    const content = ref
      ? <span ref={ref} style={{background: "tomato"}}>{balanceAfterTransaction}</span>
      : <span>{balanceAfterTransaction}</span>
      
      console.log("HomeTabMobItem ~ content", content);
    return <StyledList style={{ 'borderLeft': typeOperation === "income" ? '5px solid #24CCA7' : '5px solid#FF6596' }}>
        <li>Date <span>{currenrDate}</span></li>
        <li>Type <span>{getSymbolType(typeOperation)}</span></li>
        <li>Category <span>{category}</span></li>
        <li>Comment <span>{comment}</span></li>
        <li>Sum <span style={{ color: typeOperation === "income" ? '#24CCA7' : '#FF6596' }}>{amount}</span></li>
        <li>Balance  {content}</li>
       
    </StyledList>
})

export { HomeTabItem, HomeTabMobItem };