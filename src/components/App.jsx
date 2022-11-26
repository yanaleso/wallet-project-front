import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useMedia } from 'react-use';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { refreshUser } from 'redux/auth/authOperation';
import { getNextPage } from 'redux/transactions/transactionsSlice';
import { getAllTransactions } from 'redux/transactions/transactionOperations';

import Chart from './Chart';
import HomeTab from './HomeTab';
import Currency from './Currency';
import DiagramTab from './DiagramTab';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import ModalAddTransaction from './ModalAddTransaction';
import ButtonAddTransactions from './ButtonAddTransactions';
import FormTransaction from './FormTransaction/FormTransaction';

import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from 'pages/NotFoundPage';


// import axios from 'axios';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2RmZWMzYTM0MWQ5YjhmNzYyMDE1ZSIsImlhdCI6MTY2OTQ4MDM3MSwiZXhwIjoxNjY5NDg3NTcxfQ.Ai-s5m67SgLPkCXLK6t23rzMQFyhNUrHf5L7mexwd20';
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const App = () => {
  const isMobie = useMedia('(max-width: 767px)');

  const dispatch = useDispatch();
  const { pageNum } = useSelector(state => state.transactions);
  const { transactions } = useSelector(state => state.transactions);
  const { isModalAddOpen } = useSelector(state => state.transactions);
  // console.log("App ~ pageNum", pageNum);
  // console.log("App ~ transactions", transactions);

  const observer = useRef(null);

  const lastElement = useCallback(item => {

    const options = {
      rootMargin: '5px',
      threshold: 1,
    };

    observer.current = new IntersectionObserver(entries => {

      if (entries[0].isIntersecting) {
        observer.current.unobserve(entries[0].target)
        dispatch(getNextPage())
       
      }
    }, options);

    if (item) {
      observer.current.observe(item);
    }
  },[dispatch]);

  useEffect(() => {
    dispatch(getAllTransactions(pageNum));
  }, [dispatch, pageNum]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (transactions.length < 0) {
    return null;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={
            <PublicRoute restricted navigateTo="/home">
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted navigateTo="/home">
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route path="/" element={<DashboardPage />}>
          <Route
            path="home"
            element={
              <PrivateRoute>
                <HomeTab data={transactions} ref={lastElement} />
                <ButtonAddTransactions />
              </PrivateRoute>
            }
          />
          <Route
            path="statistic"
            element={
              <PrivateRoute>
                <Chart
                  data={[
                    {
                      id: 1,
                      type: '+',
                      category: 'Other',
                      sum: '300.00',
                      balance: '6900.00',
                    },
                    {
                      id: 2,
                      type: '-',
                      category: 'Car',
                      sum: '700.00',
                      balance: '6200.00',
                    },
                    {
                      id: 3,
                      type: '+',
                      category: 'Wages',
                      sum: '3000.00',
                      balance: '9200.00',
                    },
                    {
                      id: 4,
                      type: '-',
                      category: 'Other',
                      sum: '1000.00',
                      balance: '8200.00',
                    },
                    {
                      id: 5,
                      type: '-',
                      category: 'Shopping',
                      sum: '250.00',
                      balance: '7950.00',
                    },
                  ]}
                />
                <DiagramTab
                  data={[
                    {
                      id: 1,
                      type: '+',
                      category: 'Other',
                      sum: '300.00',
                      balance: '6900.00',
                    },
                    {
                      id: 2,
                      type: '-',
                      category: 'Car',
                      sum: '700.00',
                      balance: '6200.00',
                    },
                    {
                      id: 3,
                      type: '+',
                      category: 'Wages',
                      sum: '3000.00',
                      balance: '9200.00',
                    },
                    {
                      id: 4,
                      type: '-',
                      category: 'Other',
                      sum: '1000.00',
                      balance: '8200.00',
                    },
                    {
                      id: 5,
                      type: '-',
                      category: 'Shopping',
                      sum: '250.00',
                      balance: '7950.00',
                    },
                  ]}
                />
              </PrivateRoute>
            }
          />

          <Route
            path="currency"
            element={
              <PrivateRoute>
                {isMobie ? (
                  <Currency />
                ) : (
                  <div>
                    <HomeTab
                      data={[
                        {
                          id: 1,
                          date: '04.01.2022',
                          type: '+',
                          category: 'Other',
                          comment: 'Gift for you',
                          sum: '300.00',
                          balance: '6900.00',
                        },
                        {
                          id: 2,
                          date: '07.01.2022',
                          type: '-',
                          category: 'Car',
                          comment: 'Repair',
                          sum: '700.00',
                          balance: '6200.00',
                        },
                        {
                          id: 3,
                          date: '02.01.2022',
                          type: '+',
                          category: 'Wages',
                          comment: 'Wages',
                          sum: '3000.00',
                          balance: '9200.00',
                        },
                        {
                          id: 4,
                          date: '08.11.2022',
                          type: '-',
                          category: 'Other',
                          comment: 'Sashas Birthday',
                          sum: '1000.00',
                          balance: '8200.00',
                        },
                        {
                          id: 5,
                          date: '01.01.2022',
                          type: '-',
                          category: 'Shopping',
                          comment: 'Silpo',
                          sum: '250.00',
                          balance: '7950.00',
                        },
                      ]}
                    />
                    <ButtonAddTransactions />
                  </div>
                )}
              </PrivateRoute>
            }
          ></Route>
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      {isModalAddOpen && (
        <ModalAddTransaction>
          <FormTransaction />
        </ModalAddTransaction>
      )}
    </>
  );
};
