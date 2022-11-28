import { CurrencyItem } from './Currency.styled';

const CurrencyListItem = ({ arrow }) => {
  return (
    <>
      {arrow
        ? arrow.map(({ currencyCodeA, rateBuy, rateSell }) => (
            <CurrencyItem key={currencyCodeA}>
              <p>{currencyCodeA === 840 ? 'USD' : 'EUR'}</p>
              <p>{Number(rateBuy).toFixed(2)}</p>
              <p>{Number(rateSell).toFixed(2)}</p>
            </CurrencyItem>
          ))
        : null}
    </>
  );
};

export default CurrencyListItem;
