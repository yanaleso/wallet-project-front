import { StyledList } from './DiagramTab.styled';
//import { useDispatch } from 'react-redux';

const DiagramTabItem = ({ type, _id, totalSum }) => {
  // const dispatch = useDispatch();

  return (
    <StyledList
      style={{
        'border-left': type === '+' ? '5px solid #24CCA7' : '5px solid#FF6596',
      }}
    >
      <li>
        Category <span>{_id}</span>
      </li>
      <li>
        Sum{' '}
        <span style={{ color: type === '+' ? '#24CCA7' : '#FF6596' }}>
          {totalSum}
        </span>
      </li>
    </StyledList>
  );
};

export { DiagramTabItem };
