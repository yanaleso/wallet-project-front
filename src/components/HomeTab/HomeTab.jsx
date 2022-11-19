import { HomeTabItem, HomeTabMobItem } from './HomeTabItem'
import { StyledTable, StyledTableHeader,StyledTableBody, StyledWrap } from './HomeTab.styled'

const HomeTab = ({ data }) => {
  const screenWidth = window.screen.width;

  if(screenWidth >= 768){
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
        {data.map(({ id, date, type, category, comment, sum, balance }) => (
          <HomeTabItem
            key={id}
            transaction={{ id, date, type, category, comment, sum, balance }}
          />
        ))}
      </StyledTableBody>


    </StyledTable>
  );
}
else {
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


