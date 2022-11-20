import { DiagramTabItem, DiagramTabMobItem } from './DiagramTabItem';
import { Formik } from 'formik';

import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledWrap,
  StyledTableFooter,
  StyledFilters,
  CheckBox,
  CheckBoxLabel,
} from './DiagramTab.styled';

const DiagramTab = ({ data }) => {
  const screenWidth = window.screen.width;

  const incomeTotal = data
    .filter(data => data.type === '+')
    .reduce((total, data) => total + Number(data.sum), 0);

  const expensesTotal = data
    .filter(data => data.type !== '+')
    .reduce((total, data) => total + Number(data.sum), 0);

  const balance = data.reduce((total, data) => total + Number(data.sum), 0);
  console.log(balance);

  if (screenWidth >= 768) {
    return (
      <>
        <StyledTable>
          <Formik>
            <StyledFilters>
              <CheckBoxLabel>
                <CheckBox type="checkbox" name="month" role="switch" />
              </CheckBoxLabel>
              <CheckBoxLabel>
                <CheckBox type="checkbox" name="year" role="switch" />
              </CheckBoxLabel>
            </StyledFilters>
          </Formik>
          <StyledTableHeader>
            <p>Category</p>
            <p>Sum</p>
          </StyledTableHeader>

          <StyledTableBody>
            {data.map(({ id, type, category, sum, balance }) => (
              <DiagramTabItem
                key={id}
                transaction={{ id, type, category, sum }}
              />
            ))}
          </StyledTableBody>
          <StyledTableFooter>
            <li>
              <p>Expenses:</p>
              <p style={{ color: '#FF6596' }}>{expensesTotal}</p>
            </li>
            <li>
              <p>Income:</p>
              <p style={{ color: '#24CCA7' }}>{incomeTotal}</p>
            </li>
          </StyledTableFooter>
        </StyledTable>
      </>
    );
  } else {
    return (
      <StyledWrap>
        {data.map(({ id, type, category, sum, balance }) => (
          <DiagramTabMobItem
            key={id}
            transaction={{ id, type, category, sum, balance }}
          />
        ))}
      </StyledWrap>
    );
  }
};

export default DiagramTab;
