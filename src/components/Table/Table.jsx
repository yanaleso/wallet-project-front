import axios from 'axios';
import {useState} from 'react';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledTableFooter,
  StyledFilters,
  StyledItem,
  StyledInnerSpan,
} from './Table.styled';
import { Formik } from 'formik';
import Select from 'react-select';
import { months } from 'helpers/monthList';
import { years } from 'helpers/yearList';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllStatistic } from 'redux/statistic/statisticSelectors';
// import { useEffect } from 'react';
import { getCategoryColor } from 'helpers/getCategoryColor';
// import { getStatistic } from 'redux/statistic/statisticOperation'
const Table = ({ _id, type, totalSum }) => {
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)
  const [filteredData, setFilteredData] = useState([])
  console.log(month, year);

  const getTransactionsByTime= async (month,year)=>{
    const res = axios.get(`https://wallet-project.onrender.com/api/transactions/statistics?month=${month}&year=${year}`)
    .then(res => setFilteredData(res.data));
    return res.data;
  }

    if(month && year){
    getTransactionsByTime(month.value-1, year.value);
    }

  const res = useSelector(selectAllStatistic);
  const data = res.statistic;
  const incomeTotal = data
    .filter(data => data.type === 'income')
    .reduce((total, data) => total + Number(data.totalSum), 0);

  const expensesTotal = data
    .filter(data => data.type !== 'income')
    .reduce((total, data) => total + Number(data.totalSum), 0);

  return (
    <>
      {/* {isLoading && <b>Loading tasks...</b>}
        {error && <b>{error}</b>} */}
      <StyledTable>
        <Formik>
          <StyledFilters>
            <Select
              name="month"
              options={months}
              selected={month}
              onChange={setMonth}
              isClearable
              isSearchable
              placeholder={<div>Month</div>}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'hsl(0, 0%, 70%)' : '#000000',
                  borderRadius: '30px',
                  width: '181px',
                  height: '50px',
                  background: 'transparent',
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
              selected={year}
              onChange={setYear}
              isClearable
              isSearchable
              placeholder={<div>Year</div>}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? 'hsl(0, 0%, 70%)' : '#000000',
                  borderRadius: '30px',
                  width: '181px',
                  height: '50px',
                  background: 'transparent',
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
          <ul>
            {data.map(({ _id, type, totalSum }) => {
              if (type === 'expense') {
                return (
                  <li key={_id}>
                    <StyledItem>
                      <StyledInnerSpan
                        category={getCategoryColor(_id)}
                        style={{
                          width: '24px',
                          height: '24px',
                          marginRight: '10px',
                        }}
                      ></StyledInnerSpan>
                      <p>{_id}</p>
                    </StyledItem>
                    <p>
                      <span
                        style={{
                          color: type === 'income' ? '#24CCA7' : '#FF6596',
                        }}
                      >
                        {totalSum}
                      </span>
                    </p>
                  </li>
                );
              }
              return null;
            })}
          </ul>
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
};

export default Table;
