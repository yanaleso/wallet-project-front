import { useSelector } from 'react-redux';
import { Container, Title, CurrencySign, Text } from './Balance.styled';

const Balance = () => {
  const { transactions } = useSelector(state => state.transactions);

  const lastTransaction = transactions.length - 1;
  const balance = transactions[lastTransaction]?.balanceAfterTransaction;

  return (
    <Container>
      <Title>Your balance</Title>
      <CurrencySign>₴ </CurrencySign>
      <Text>{balance || 0}</Text>
    </Container>
  );
};

export default Balance;
