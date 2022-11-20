import { Container, Title, CurrencySign, Text } from './Balance.styled';

const Balance = () => {
  return (
    <Container>
      <Title>Your balance</Title>
      <CurrencySign>₴ </CurrencySign>
      <Text>24 000.00</Text>
    </Container>
  );
};

export default Balance;
