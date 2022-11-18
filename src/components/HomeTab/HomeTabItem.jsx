
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

export { HomeTabItem };