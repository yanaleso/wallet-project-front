import { HomeTabItem, HomeTabMobItem } from './HomeTabItem';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledWrap,
} from './HomeTab.styled';

const HomeTab = ({ data }) => {
  const screenWidth = window.screen.width;

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
          {data.map(({ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction }) => (
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
        {data.map(({ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction }) => (
            <HomeTabMobItem
              key={_id}
              transaction={{ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction }}
            />
          ))}
      </StyledWrap>
    );
  }
};

export default HomeTab;
