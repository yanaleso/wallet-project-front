import moment from 'moment';
import Select from 'react-select';
import { Formik } from 'formik';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Plus } from '../../images/plus.svg';
import { ReactComponent as Minus } from '../../images/minus.svg';
import { ReactComponent as Calendar } from '../../images/calender.svg';

import { options } from 'helpers/formAddTransaction/options';
import {
  resetTransactions,
  toggleModalAdd,
} from 'redux/transactions/transactionsSlice';

import {
  ButtonAdd,
  ButtonCancel,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  CommentWrapper,
  DatetimeInput,
  DateWrapper,
  ErrorAmount,
  ErrorComment,
  FormWrapper,
  IconWrapper,
  ImputsWrapper,
  InputComment,
  InputSum,
  LabelComment,
  LabelSum,
  Switch,
  TextExpense,
  TextIncome,
  Title,
  TransactionForm,
} from './FormTransaction.styled';
import { selectStyles } from 'helpers/formAddTransaction/selectStyles';
import { transactionShema } from 'helpers/formAddTransaction/transactionShema';
import { checksFutureDate } from 'helpers/formAddTransaction/checksFutureDate';
import { addNewTransaction, getAllTransactions } from 'redux/transactions/transactionOperations';
import { Box } from 'components/Box';
import { useState } from 'react';

const FormTransaction = () => {
  const dispatch = useDispatch();
  const { pageNum } = useSelector(state => state.transactions);

  const [isNextOperations, setIsNextOperations] = useState(true)

  const initialValues = {
    comment: '',
    amount: '',
    category: 'Regular income',
    typeOperation: false,
    date: new Date().toString(),
  };

  const currentDate = moment().format('DD.MM.YYYY');

  const onChangeType = value => {
    switch (value) {
      case true:
        return 'income';

      case false:
        return 'expense';

      default:
        console.log('No such operation');
    }
  };

  const onCancelClick = () => {
    dispatch(toggleModalAdd(false));
  };

  const onSubmitFormTransaction = async (values, {resetForm}) => {
    const typeOperation = onChangeType(values.typeOperation);

    const transaction = {
      ...values,
      amount: Number(values.amount),
      typeOperation,
    };

    if (isNextOperations) {
      setIsNextOperations(false)
      
      await dispatch(addNewTransaction(transaction));
      resetForm()
      
      await dispatch(resetTransactions());

      if (pageNum === 1) await dispatch(getAllTransactions(1));

      dispatch(toggleModalAdd(false));

      toast.success("Successful transaction")
    }

    
  };

  return (
    <FormWrapper>
      <Title>Add transaction</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitFormTransaction}
        validationSchema={transactionShema}
      >
        {({ handleSubmit, handleChange, setFieldValue, values }) => (
          <TransactionForm onSubmit={handleSubmit}>
            <ImputsWrapper>
              <CheckBoxWrapper>
                <TextIncome isChecked={values.typeOperation}>Income</TextIncome>

                <CheckBoxLabel>
                  <CheckBox
                    type="checkbox"
                    name="typeOperation"
                    role="switch"
                    checked={values.typeOperation}
                    onChange={handleChange}
                  />

                  <Switch 
                    isChecked={values.typeOperation}>
                    {values.typeOperation ? <Plus /> : <Minus />}
                  </Switch>
                </CheckBoxLabel>

                <TextExpense isChecked={values.typeOperation}>Expense</TextExpense>
              </CheckBoxWrapper>

              {!values.typeOperation && (
                <Select
                  name="category"
                  options={options}
                  isClearable
                  isSearchable
                  placeholder="Select a category"
                  onChange={data => setFieldValue('category', data?.label)}
                  styles={selectStyles}
                />)}

              <DateWrapper>
                <LabelSum>
                  <InputSum
                    type="text"
                    name="amount"
                    placeholder="0.00"
                    onChange={handleChange}
                  />
                </LabelSum>
                <ErrorAmount component="div" name="amount" />

                <IconWrapper>
                  <Datetime
                    name="date"
                    closeOnSelect
                    initialValue={currentDate}
                    dateFormat="DD.MM.YYYY"
                    timeFormat={false}
                    isValidDate={checksFutureDate}
                    onChange={e =>setFieldValue('date', new Date(e).toString())}
                    inputProps={{onKeyDown: e => e.preventDefault()}}
                    renderInput={props => <DatetimeInput {...props} />}
                  />

                  <Calendar />
                </IconWrapper>
              </DateWrapper>

              <CommentWrapper>
                <LabelComment>
                  <InputComment
                    type="text"
                    name="comment"
                    placeholder="Comment"
                    onChange={handleChange}
                  />
                </LabelComment>
                <ErrorComment component="div" name="comment" />
              </CommentWrapper>
            </ImputsWrapper>

            <Box width="300px" margin="0 auto">
              <ButtonAdd type="submit">Add</ButtonAdd>
              <ButtonCancel type="button" onClick={onCancelClick}>Cancel</ButtonCancel>
            </Box>
          </TransactionForm>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default FormTransaction;
