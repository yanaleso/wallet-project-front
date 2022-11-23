import moment from 'moment';
import { StyledList } from './HomeTab.styled'


const HomeTabItem = ({ transaction }) => {
    const {  date, typeOperation, category, comment, amount, balanceAfterTransaction } = transaction;
    const currenrDate = moment(date).format('DD.MM.YYYY')

    return <li>
        <p>{currenrDate}</p>
        <p>{typeOperation}</p>
        <p>{category}</p>
        <p>{comment}</p>
        <p style={{ color: typeOperation === "income" ? '#24CCA7' : '#FF6596' }}>{amount}</p>
        <p>{balanceAfterTransaction}</p>
    </li>
}

const HomeTabMobItem = ({ transaction }) => {
    const { date, typeOperation, category, comment, amount, balanceAfterTransaction } = transaction;
    const currenrDate = moment(date).format('DD.MM.YYYY')

    return <StyledList style={{ 'borderLeft': typeOperation === "income" ? '5px solid #24CCA7' : '5px solid#FF6596' }}>
        <li>Date <span>{currenrDate}</span></li>
        <li>Type <span>{typeOperation}</span></li>
        <li>Category <span>{category}</span></li>
        <li>Comment <span>{comment}</span></li>
        <li>Sum <span style={{ color: typeOperation === "income" ? '#24CCA7' : '#FF6596' }}>{amount}</span></li>
        <li>Balance <span>{balanceAfterTransaction}</span></li>
    </StyledList>
}

export { HomeTabItem, HomeTabMobItem };