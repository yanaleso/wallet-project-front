import { DiagramTabItem } from './DiagramTabItem';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React from 'react';
=======
import axios from 'axios';
import {useState} from 'react';
>>>>>>> Stashed changes
import { Formik } from 'formik';
=======
import axios from 'axios';
import { useState } from 'react';import { Formik } from 'formik';
>>>>>>> Stashed changes
import Select from 'react-select';
import { months } from 'helpers/monthList';
import { years } from 'helpers/yearList';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllStatistic } from 'redux/statistic/statisticSelectors';
import { useEffect } from 'react';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledWrap,
  StyledTableFooter,
  StyledFilters,
  StyledItem,
  StyledInnerSpan,
} from './DiagramTab.styled';
import { getCategoryColor } from 'helpers/getCategoryColor';
import { getStatistic } from 'redux/statistic/statisticOperation';

const DiagramTab = () => {
  const dispatch = useDispatch();
<<<<<<< Updated upstream
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const getTransactionsByMonth = async (month=11, year=2022) => {
  const res = await axios
    .get(`https://wallet-project.onrender.com/api/transactions/statistics?month=${month}&year=${year}`)
    .then(res => console.log(res.data))
    return res;
};

getTransactionsByMonth(month.value-1, year.value);

=======
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)
  const [filteredData, setFilteredData] = useState([])
>>>>>>> Stashed changes

  const getTransactionsByTime= async (month,year)=>{
    const res = axios.get(`https://wallet-project.onrender.com/api/transactions/statistics?month=${month}&year=${year}`)
    .then(res => setFilteredData(res.data));
    return res.data;
  }
  useEffect(() => {
    if(month && year){
    getTransactionsByTime(month.value-1, year.value);
    }
  });
  
  // console.log('filteredData', filteredData);
  useEffect(() => {
    dispatch(getStatistic());
  }, [dispatch]);
  const { transactions } = useSelector(state => state.transactions);
  // const date = transactions[0].date.split(' ');
  // const transactionMonth = date[1];
  // console.log('date', transactionMonth);
    const [month, setMonth] = React.useState(null);
    // if(month){
    //   console.log(month.label);
    // }

  const res = useSelector(selectAllStatistic);
  const data = res.statistic;
  const screenWidth = window.screen.width;

  const incomeTotal = data
    .filter(data => data.type === 'income')
    .reduce((total, data) => total + Number(data.totalSum), 0);

  const expensesTotal = data
    .filter(data => data.type !== 'income')
    .reduce((total, data) => total + Number(data.totalSum), 0);

  if (screenWidth >= 768) {
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
                selected={year}
                onChange={setYear}
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
            <ul>
<<<<<<< Updated upstream
              {
              transactions.filter(({ _id, typeOperation, date, category, amount})=>{
                const dateData = date.split(' ');
                const transactionMonth = dateData[1];
                if(month){
                  if (month.label.includes(transactionMonth)){
                  return {_id, typeOperation, category, amount}
                }}
                else{
                  return {_id, typeOperation, category, amount}
                }
              })
              .map(({ _id, typeOperation, category, amount }) => {
                if (typeOperation === 'expense') {
=======
              {filteredData.map(({ _id, type, totalSum }) => {
                if (type === 'expense') {
>>>>>>> Stashed changes
                  return (
                    <li key={_id}>
                      <StyledItem>
                        <StyledInnerSpan
<<<<<<< Updated upstream
                          category={getCategoryColor(_id)}
=======
                          category={category}
>>>>>>> Stashed changes
                          style={{
                            width: '24px',
                            height: '24px',
                            marginRight: '10px',
                          }}
                        ></StyledInnerSpan>
                        <p>{category}</p>
                      </StyledItem>
                      <p>
                        <span>
                          {amount}
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
  } else {
    return (
      <StyledWrap>
        {data.map(({ _id, type, totalSum, balance }) => (
          <DiagramTabItem
            //key={id}
            statistic={{ _id, type, totalSum, balance }}
          />
        ))}
      </StyledWrap>
    );
  }
};

export default DiagramTab;
