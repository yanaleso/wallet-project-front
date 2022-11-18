import { useDispatch } from 'react-redux';
import { toggleModalAdd } from 'redux/transactions/transactionsSlice';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModalAdd(true));
  };

  return (
    <button type="button" onClick={handleClick}>
      Add
    </button>
  );
};

export default ButtonAddTransactions;
