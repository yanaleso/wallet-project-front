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
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2U1NzE0MmQ2ZjE4YzNhNmMxNjRlZCIsImlhdCI6MTY2OTIzMjY4NiwiZXhwIjoxNjY5MjM5ODg2fQ.Z2c31ZwA8zS7RS8xjDM8mVsoz7io3qlunlCF-y8_87A';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const App = () => {
  const dispatch = useDispatch();
  const { isModalAddOpen } = useSelector(state => state.transactions);
  const { transactions } = useSelector(state => state.transactions);
  
  const isMobie = useMedia('(max-width: 767px)');


  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

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
                <HomeTab data={transactions} />
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
      </Routes>

      {isModalAddOpen && (
        <ModalAddTransaction>
          <FormTransaction />
        </ModalAddTransaction>
      )}
    </>
  );
};
