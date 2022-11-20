import { StyledList } from './DiagramTab.styled';

const DiagramTabItem = ({ transaction }) => {
  const { category, type, sum } = transaction;
  return (
    <li>
      <p>{category}</p>

      <p style={{ color: type === '+' ? '#24CCA7' : '#FF6596' }}>{sum}</p>
    </li>
  );
};

const DiagramTabMobItem = ({ transaction }) => {
  const { type, category, sum, balance } = transaction;
  return (
    <StyledList
      style={{
        'border-left': type === '+' ? '5px solid #24CCA7' : '5px solid#FF6596',
      }}
    >
      <li>
        Category <span>{category}</span>
      </li>
      <li>
        Sum{' '}
        <span style={{ color: type === '+' ? '#24CCA7' : '#FF6596' }}>
          {sum}
        </span>
      </li>
      <li>
        Balance <span>{balance}</span>
      </li>
    </StyledList>
  );
};

export { DiagramTabItem, DiagramTabMobItem };
