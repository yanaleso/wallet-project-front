import { forwardRef } from 'react';
import { useMedia } from 'react-use';

import { HomeTabItem, HomeTabMobItem } from './HomeTabItem';
import { StyledTable, StyledTableHeader, StyledTableBody, StyledWrap } from './HomeTab.styled';


const HomeTab = forwardRef(({ data }, ref) => {
  const isMobie = useMedia('(max-width: 767px)');

  return (
    <div>
      {isMobie ? (
        <StyledWrap>
          {data.map(( { _id, date, typeOperation, category, comment, amount, balanceAfterTransaction,}, idx) => {
            if (data.length === idx + 1) {
              return (
                <HomeTabMobItem
                  ref={ref}
                  key={_id}
                  transaction={{ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction,}}
                />
              );
            }

            return (
              <HomeTabMobItem
                key={_id}
                transaction={{ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction,}}
              />
            );
            }
          )}
        </StyledWrap>
      ) : (
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
            {data.map(({ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction, }, idx) => {
              if (data.length === idx + 1) {
                return (
                  <HomeTabItem
                    key={_id}
                    ref={ref}
                    transaction={{ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction, }}
                  />
                );
              }

              return (
                <HomeTabItem
                  key={_id}
                  transaction={{ _id, date, typeOperation, category, comment, amount, balanceAfterTransaction, }}
                />
              );
              }
            )}
          </StyledTableBody>
        </StyledTable>
      )}
    </div>
  );
});

export default HomeTab;
