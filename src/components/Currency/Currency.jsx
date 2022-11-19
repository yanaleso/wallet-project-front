import {
  PrivatTableList,
  CurrencyList,
  CurrencyBox,
  ImageVektor,
  CurrencyItem,
} from './Currency.styled';
import grafSvg from '../../images/currencyVektor.svg';

// import axios from 'axios';

// const getCurrencyRates = async () => {
//   return axios
//     .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//     .then(response => response)
//     .catch(error => console.log(error));
// };

const kurs = [
  { ccy: 'USD', base_ccy: 'UAH', buy: '39.50000', sale: '40.00000' },
  { ccy: 'EUR', base_ccy: 'UAH', buy: '39.70000', sale: '40.70000' },
];

const Currency = () => {
  return (
    <CurrencyBox>
      <PrivatTableList>
        <li>Currency</li>
        <li>Purchase</li>
        <li>Sale</li>
      </PrivatTableList>
      <CurrencyList>
        {kurs.map(({ ccy, buy, sale }) => (
          <CurrencyItem key={ccy}>
            <p>{ccy}</p>
            <p>{Number(buy).toFixed(2)}</p>
            <p>{Number(sale).toFixed(2)}</p>
          </CurrencyItem>
        ))}
      </CurrencyList>
      <ImageVektor src={grafSvg} alt="" />
    </CurrencyBox>
  );
};

export default Currency;
