import { HomeTabItem, HomeTabMobItem } from './HomeTabItem';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledWrap,
} from './HomeTab.styled';
import { forwardRef } from 'react';

const HomeTab = forwardRef(({ data }, ref) => {
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
          {data.map(({ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction }, idx) =>{ 

            if (data.length === idx + 1) {
              return <HomeTabItem
              key={_id}
              ref={ref}
              transaction={{ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction }}
            />
            }

            return  <HomeTabItem
              key={_id}
              transaction={{ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction }}
            />
          })}
          
        </StyledTableBody>
      </StyledTable>
    );
  } else {
    return (
      <StyledWrap>
        {data.map(({ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction }, idx) => { 

            if (data.length === idx + 1) {
              return <HomeTabMobItem
              ref={ref}
              key={_id}
              transaction={{ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction }}
            />
            }

           return <HomeTabMobItem
              key={_id}
              transaction={{ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction }}
            />
          }
          )}
      </StyledWrap>
    );
  }
});

export default HomeTab;
