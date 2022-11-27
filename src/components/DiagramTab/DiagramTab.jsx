import { DiagramTabItem } from './DiagramTabItem';
import { Formik } from 'formik';
import Select from 'react-select';
import { months } from 'helpers/monthList';
import { years } from 'helpers/yearList';
//import { categoriesColors } from 'helpers/categoriesColors';
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
import { getStatistic } from 'redux/statistic/statisticOperation';

const DiagramTab = () => {
  const dispatch = useDispatch();
  const { transaction, isLoading, error } = useSelector(getStatistic);
  console.log(transaction);

  useEffect(() => {
    dispatch(getStatistic());
  }, [dispatch]);

  const res = useSelector(selectAllStatistic);
  const data = res.statistic;

  const screenWidth = window.screen.width;

  const incomeTotal = data
    .filter(data => data.type === 'income')
    .reduce((total, data) => total + Number(data.totalSum), 0);

  const expensesTotal = data
    .filter(data => data.type !== 'income')
    .reduce((total, data) => total + Number(data.totalSum), 0);

  // const categoryKey = categoriesColors.map(
  //   categoriesColors => categoriesColors.category
  // );
  // const colorValue = categoriesColors.map(
  //   categoriesColors => categoriesColors.background
  // );

  // const balance = data.reduce(
  //   (total, data) => total + Number(data.totalSum),
  //   0
  // );

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
            <ul>
              {data.map(({ _id, type, totalSum }) => {
                if (type==="expense"){
                  return (<li key={_id}>
                    <StyledItem>
                      <StyledInnerSpan
                      category={_id}
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
                  </li>)
                }
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
