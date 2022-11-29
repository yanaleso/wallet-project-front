import moment from 'moment';
import { forwardRef } from 'react';
import { StyledList, CategoryName } from './HomeTab.styled';
import { getSymbolType } from 'helpers/formAddTransaction/getSymbolType';

const HomeTabItem = forwardRef(({ transaction }, ref) => {
  const { date, typeOperation, category, comment, amount, itemBalance } =
    transaction;
  const currenrDate = moment(new Date(date)).format('DD.MM.YYYY');

  const bodyTransaction = (
    <>
      <CategoryName>{currenrDate}</CategoryName>
      <CategoryName>{getSymbolType(typeOperation)}</CategoryName>
      <CategoryName>
        <span>{category}</span>
      </CategoryName>
      <CategoryName>{comment}</CategoryName>
      <p style={{ color: typeOperation === 'income' ? '#24CCA7' : '#FF6596' }}>
        {amount}
      </p>
      <CategoryName>{itemBalance}</CategoryName>
    </>
  );

  const content = ref ? (
    <li ref={ref}>
      {bodyTransaction}
    </li>
  ) : (
    <li>{bodyTransaction}</li>
  );

  return content;
});

const HomeTabMobItem = forwardRef(({ transaction }, ref) => {
  const { date, typeOperation, category, comment, amount, itemBalance } =
    transaction;
  const currenrDate = moment(new Date(date)).format('DD.MM.YYYY');

  const bodyTransaction = (
    <>
      <span>{itemBalance}</span>
    </>
  );

  const content = ref ? (
    <li ref={ref}>
      Balance {bodyTransaction}
    </li>
  ) : (
    <li>Balance {bodyTransaction}</li>
  );

  return (
    <StyledList
      style={{
        borderLeft:
          typeOperation === 'income' ? '5px solid #24CCA7' : '5px solid#FF6596',
      }}
    >
      <li>
        Date <span>{currenrDate}</span>
      </li>
      <li>
        Type <span>{getSymbolType(typeOperation)}</span>
      </li>
      <li>
        Category <span>{category}</span>
      </li>
      <li>
        Comment <span>{comment}</span>
      </li>
      <li>
        Sum{' '}
        <span
          style={{ color: typeOperation === 'income' ? '#24CCA7' : '#FF6596' }}
        >
          {amount}
        </span>
      </li>
      {content}
    </StyledList>
  );
});

export { HomeTabItem, HomeTabMobItem };
