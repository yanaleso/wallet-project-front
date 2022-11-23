import { HomeTabItem, HomeTabMobItem } from './HomeTabItem';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledWrap,
} from './HomeTab.styled';
import { getAllTransactions } from 'redux/transactions/transactionOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const HomeTab = ({ data }) => {
  const screenWidth = window.screen.width;

  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state.transactions);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

if (transactions.length < 0) {
  return null
}

  if (screenWidth >= 768) {
    return (
      <StyledTable>
        <StyledTableHeader>
          <p>Date</p>
          <p>Type</p>
          <p>Category</p>
          <p>Comment</p>
          <p>Sum</p>
          <p>Balance</p>
        </StyledTableHeader>

        <StyledTableBody>
          {transactions.map(({ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction }) => (
            <HomeTabItem
              key={_id}
              transaction={{ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction }}
            />
          ))}
        </StyledTableBody>
      </StyledTable>
    );
  } else {
    return (
      <StyledWrap>
        {data.map(({ id, date, type, category, comment, sum, balance }) => (
          <HomeTabMobItem
            key={id}
            transaction={{ id, date, type, category, comment, sum, balance }}
          />
        ))}
      </StyledWrap>
    );
  }
};

export default HomeTab;
