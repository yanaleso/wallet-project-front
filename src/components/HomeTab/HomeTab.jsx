import { HomeTabItem } from './HomeTabItem'
import { StyledTable, StyledTableHeader,StyledList } from './HomeTab.styled'

const HomeTab = ({ data }) => {
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

      <StyledList>
        {data.map(({ id, date, type, category, comment, sum, balance }) => (
          <HomeTabItem
            key={id}
            transaction={{ id, date, type, category, comment, sum, balance }}
          />
        ))}
      </StyledList>


    </StyledTable>
  );
};

export default HomeTab;
