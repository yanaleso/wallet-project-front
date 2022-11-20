// import * as yup from 'yup';
import moment from 'moment';
import Select from 'react-select';
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'react-datetime/css/react-datetime.css';

import { ReactComponent as Plus } from '../../images/plus.svg';
import { ReactComponent as Minus } from '../../images/minus.svg';
import { ReactComponent as Calendar } from '../../images/calender.svg';

import { options } from 'helpers/options';
import { getYear } from 'helpers/getYear';
import { getMonth } from 'helpers/getMonth';
import { addTransaction, toggleModalAdd } from 'redux/transactions/transactionsSlice';

import {
  ButtonAdd,
  ButtonCancel,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  DateWrapper,
  FormWrapper,
  IconWrapper,
  ImputsWrapper,
  InputComment,
  InputSum,
  LabelComment,
  LabelSum,
  StyledDatetime,
  Switch,
  TextExpense,
  TextIncome,
  Title,
  TransactionForm,
} from './FormTransaction.styled';
import { selectStyles } from 'helpers/selectStyles';


const FormTransaction = () => {
  const currentDate = moment().format('YYYY-MM-DD');

  const dispatch = useDispatch();

  const [typeOperation, setTypeOperation] = useState('expense');
  const [category, setCategory] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState(currentDate);
  const [month, setMonth] = useState(getMonth());
  const [year, setYear] = useState(getYear());

  const onFormAddSubmit = formData => {
    const transaction = {
      ...formData,
      typeOperation,
      category,
      month,
      year,
      date,
    };

    dispatch(addTransaction(transaction));
    dispatch(toggleModalAdd(false));
  };

  const onChangeSelect = e => {
    setCategory(e?.label);
  };

  const onCancelClick = () => {
    dispatch(toggleModalAdd(false));
  };

  const onChangeDate = e => {
    const selectedDate = e.format('YYYY-MM-DD');

    setDate(selectedDate);
    setMonth(getMonth(selectedDate));
    setYear(getYear(selectedDate));
  };

  const onChangeType = e => {
    setIsChecked(e.target.checked);

    switch (e.target.checked) {
      case true:
        setTypeOperation('income');
        break;

      case false:
        setTypeOperation('expense');
        break;

      default:
        console.log('No such operation');
    }
  };

  return (
    <FormWrapper>
      <Title>Add transaction</Title>
      <Formik
        initialValues={{ comment: '', amount: '' }}
        onSubmit={onFormAddSubmit}
      >
        <TransactionForm>
          <ImputsWrapper>
            <CheckBoxWrapper>
              <TextIncome isChecked={isChecked}>Income</TextIncome>

              <CheckBoxLabel>
                <CheckBox
                  type="checkbox"
                  name="typeOperation"
                  role="switch"
                  checked={isChecked}
                  onChange={onChangeType}
                />

                <Switch isChecked={isChecked}>
                  {isChecked ? <Plus /> : <Minus />}
                </Switch>
              </CheckBoxLabel>

              <TextExpense isChecked={isChecked}>Expense</TextExpense>
            </CheckBoxWrapper>

            {!isChecked && (
              <Select
                name="category"
                options={options}
                isClearable
                isSearchable
                placeholder={<div>Select a category</div>}
                onChange={onChangeSelect}
                styles={selectStyles}
              />
            )}

            <DateWrapper>
              <LabelSum>
                <InputSum
                  type="text"
                  name="amount"
                  placeholder="0.00"
                  required
                />
              </LabelSum>

              <IconWrapper>
                <StyledDatetime
                  onChange={onChangeDate}
                  closeOnSelect
                  initialValue={currentDate}
                />

                <Calendar />
              </IconWrapper>
            </DateWrapper>

            <LabelComment>
              <InputComment type="text" name="comment" placeholder="Comment" />
            </LabelComment>
          </ImputsWrapper>

          <div style={{ width: '300px', margin: '0 auto' }}>
            <ButtonAdd type="submit">Add</ButtonAdd>

            <ButtonCancel type="button" onClick={onCancelClick}>
              Cancel
            </ButtonCancel>
          </div>
        </TransactionForm>
      </Formik>
    </FormWrapper>
  );
};

export default FormTransaction;
