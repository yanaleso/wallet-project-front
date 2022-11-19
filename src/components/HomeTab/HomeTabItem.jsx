import { StyledList } from './HomeTab.styled'


const HomeTabItem = ({ transaction }) => {
    const { date, type, category, comment, sum, balance } = transaction;
    return <li>
        <p>{date}</p>
        <p>{type}</p>
        <p>{category}</p>
        <p>{comment}</p>
        <p style={{ color: type==="+" ? '#24CCA7' : '#FF6596' }}>{sum}</p>
        <p>{balance}</p>
    </li>
}

const HomeTabMobItem = ({ transaction }) => {
    const { date, type, category, comment, sum, balance } = transaction;
    return <StyledList style={{ 'border-left': type==="+" ? '5px solid #24CCA7' : '5px solid#FF6596' }}>
        <li>Date <span>{date}</span></li>
        <li>Type <span>{type}</span></li>
        <li>Category <span>{category}</span></li>
        <li>Comment <span>{comment}</span></li>
        <li>Sum <span style={{ color: type==="+" ? '#24CCA7' : '#FF6596' }}>{sum}</span></li>
        <li>Balance <span>{balance}</span></li>
    </StyledList>
}

export { HomeTabItem, HomeTabMobItem };