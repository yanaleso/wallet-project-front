import { useMedia } from 'react-use';
import Chart from '../Chart';
import Table from '../Table';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllStatistic } from 'redux/statistic/statisticSelectors';
import { useEffect } from 'react';
import {
  StyledStatisticWraper,
  StyledChartWraper,
  StyledTitle,
  StyledContentWraper,
} from './DiagramTab.styled';

import { getStatistic } from 'redux/statistic/statisticOperation';

const DiagramTab = () => {
  const isMobie = useMedia('(max-width: 767px)');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistic());
  }, [dispatch]);

  const res = useSelector(selectAllStatistic);
  const data = res.statistic;
  console.log('data', data);

  return (
    <div>
      {isMobie ? (
        <StyledStatisticWraper>
          <StyledTitle>Statistics</StyledTitle>

          <StyledChartWraper>
            <Chart />
          </StyledChartWraper>

          <Table />
        </StyledStatisticWraper>
      ) : (
        <StyledStatisticWraper>
          <StyledTitle>Statistics</StyledTitle>
          <StyledContentWraper>
            <StyledChartWraper>
              <Chart />
            </StyledChartWraper>

            <Table />
          </StyledContentWraper>
        </StyledStatisticWraper>
      )}
    </div>
  );
};

export default DiagramTab;
