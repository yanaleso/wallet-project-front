import { DiagramTabItem, DiagramTabMobItem } from './DiagramTabItem';
import { Formik } from 'formik';
import Select from 'react-select';
import { months } from 'helpers/monthList';
import { years } from 'helpers/yearList';

import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledWrap,
  StyledTableFooter,
  StyledFilters,
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
              <Select
                name="month"
                options={months}
                isClearable
                isSearchable
                placeholder={<div>Month</div>}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? 'hsl(0, 0%, 70%)'
                      : '#000000',
                    borderRadius: '30px',
                    width: '181px',
                    height: '50px',
                  }),
                  indicatorSeparator: (baseStyles, state) => ({
                    ...baseStyles,
                    display: 'none',
                  }),
                  placeholder: (baseStyles, state) => ({
                    position: 'absolute',
                    marginLeft: '20px',
                    fontFamily: 'Circe-Regular',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#000000',
                  }),
                  Svg: (baseStyles, state) => ({
                    ...baseStyles,
                    fill: '#000000',
                  }),
                }}
              />
              <Select
                name="year"
                options={years}
                isClearable
                isSearchable
                placeholder={<div>Year</div>}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? 'hsl(0, 0%, 70%)'
                      : '#000000',
                    borderRadius: '30px',
                    width: '181px',
                    height: '50px',
                  }),
                  indicatorSeparator: (baseStyles, state) => ({
                    ...baseStyles,
                    display: 'none',
                  }),
                  placeholder: (baseStyles, state) => ({
                    position: 'absolute',
                    marginLeft: '20px',
                    fontFamily: 'Circe-Regular',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#000000',
                  }),
                  Svg: (baseStyles, state) => ({
                    ...baseStyles,
                    fill: '#000000',
                  }),
                }}
              />
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
