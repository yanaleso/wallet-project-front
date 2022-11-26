import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import DiagramTab from './DiagramTab';
import Chart from './Chart';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import HomeTab from './HomeTab';
import ButtonAddTransactions from './ButtonAddTransactions';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import ModalAddTransaction from './ModalAddTransaction';
import FormTransaction from './FormTransaction/FormTransaction';
import { refreshUser } from 'redux/auth/authOperation';
import Currency from './Currency';
import { useMedia } from 'react-use';
import { getAllTransactions } from 'redux/transactions/transactionOperations';

import axios from 'axios';
import NotFoundPage from 'pages/NotFoundPage';
import { useState } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2RmZWMzYTM0MWQ5YjhmNzYyMDE1ZSIsImlhdCI6MTY2OTQwMjQ0NSwiZXhwIjoxNjY5NDA5NjQ1fQ.wP5owRM5GzOkuoWW_XjDBpbriCLAV-Sfweok4KaGQec';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const App = () => {
  const isMobie = useMedia('(max-width: 767px)');

  const dispatch = useDispatch();
  const { isModalAddOpen } = useSelector(state => state.transactions);
  const { transactions } = useSelector(state => state.transactions);

  const [pageNum, setPageNum] = useState(1);
  const observer = useRef(null);

  const lastElement = useCallback(item => {

    const options = {
      // rootMargin: '500px',
      // threshold: 0.5,
    };

    observer.current = new IntersectionObserver(entries => {

      if (entries[0].isIntersecting) {
        observer.current.unobserve(entries[0].target)
        setPageNum(prev => prev + 1);
      }
    }, options);

    if (item) {
      observer.current.observe(item);
    }
  },[]);

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
