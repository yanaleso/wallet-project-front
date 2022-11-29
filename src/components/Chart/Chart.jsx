import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { selectAllStatistic } from 'redux/statistic/statisticSelectors';
import { useSelector } from 'react-redux';
import { getCategoryColor } from 'helpers/getCategoryColor';

ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

const Chart = () => {
  const res = useSelector(selectAllStatistic);

  const { totalBalance } = useSelector(state => state.transactions);
  console.log(totalBalance);
  const expenseResults = res.statistic.filter(
    result => result.type === 'expense'
  );

  const chartCategories = expenseResults.map(result => {
    return result._id;
  });
  const sum = expenseResults.map(result => result.totalSum);

  const colors = expenseResults.map(item => getCategoryColor(item._id));

  const drawInnerText = chart => {
    const ctx = chart.ctx;
    ctx.restore();
    ctx.font = '700 18px Circe-Regular';
    ctx.textBaseline = 'middle';
    const text = `₴${totalBalance}`;
    const textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
    const textY = chart.height / 2 + chart.legend.height / 2;
    ctx.fillText(text, textX, textY);
    ctx.fillStyle = '#000000';
    ctx.save();
    console.log(text);
  };

  const data = {
    labels: chartCategories,
    datasets: [
      {
        label: '# of Votes',
        data: sum,
        text: 'summ',
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  return (
    <div>
      <div style={{ maxWidth: '336px', margin: '0 auto' }}>
        <Doughnut
          width={336}
          height={336}
          data={data}
          options={{
            cutout: '70%',
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          plugins={[
            {
              beforeDraw: function (chart) {
                drawInnerText(chart);
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Chart;
