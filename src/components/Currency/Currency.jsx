import {
  PrivatTableList,
  CurrencyList,
  CurrencyBox,
  ImageVektor,
} from './Currency.styled';
import grafSvg from '../../images/currencyVektor.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from 'components/Spinner';
import CurrencyListItem from './CurrencyListItem';

const getApiMono = async () => {
  const res = await axios
    .get('https://api.monobank.ua/bank/currency')
    .then(res => {
      const date = new Date();
      localStorage.setItem('getMono', JSON.stringify(res.data));
      localStorage.setItem('date', JSON.stringify(+date));
      return res;
    })
    .catch(error => console.log(error.message));
  return res.data;
};

const Currency = () => {
  const [arrow, setArrow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrency = async () => {
      setLoading(true);

      const savedApiMono = localStorage.getItem('getMono');
      const parsedApiMono = JSON.parse(savedApiMono);

      const savedApiDate = localStorage.getItem('date');
      const parsedApiDate = JSON.parse(savedApiDate);

      const date = new Date();

      const update = date - parsedApiDate >= 3600000;

      if (!parsedApiDate) {
        localStorage.setItem('date', JSON.stringify(+date));
      }

      if (update) {
        setLoading(true);
        await getApiMono();
      }

      if (parsedApiMono) {
        const arrow = parsedApiMono.slice(0, 2);
        setArrow(arrow);
        return;
      }

      try {
        const data = await getApiMono();
        const newArrow = data.slice(0, 2);
        setArrow(newArrow);
      } catch (error) {
        console.log(error);
      }
    };

    getCurrency();
    setLoading(false);
  }, []);

  return (
    <CurrencyBox>
      <PrivatTableList>
        <li>Currency</li>
        <li>Purchase</li>
        <li>Sale</li>
      </PrivatTableList>
      <CurrencyList>
        {!loading ? <CurrencyListItem arrow={arrow} /> : <Spinner />}
      </CurrencyList>

      <ImageVektor src={grafSvg} alt="vektor" />
    </CurrencyBox>
  );
};

export default Currency;
