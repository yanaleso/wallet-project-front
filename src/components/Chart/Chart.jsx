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

ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

const Chart = () => {
  const res = useSelector(selectAllStatistic);
  const results = res.statistic;

  const chartCategories = results.map(result => result._id);
  const sum = results.map(result => result.totalSum);

  const drawInnerText = chart => {
    const ctx = chart.ctx;
    ctx.restore();
    ctx.font = '700 18px Circe-Regular';
    ctx.textBaseline = 'middle';
    const dataArrValues = chart.config._config.data.datasets[0].data;

    const text = `₴${dataArrValues
      .reduce((total, b) => total + b, 0)
      .toFixed(2)}`;
    const textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
    const textY = chart.height / 2 + chart.legend.height / 2;
    ctx.fillText(text, textX, textY);
    ctx.fillStyle = '#000000';
    ctx.save();
  };
  const data = {
    labels: chartCategories,
    datasets: [
      {
        label: '# of Votes',
        data: sum,
        text: 'summ',
        backgroundColor: [
          '#FED057',
          '#FFD8D0',

          '#C5BAFF',
          '#6E78E8',
          '#81E1FF',
          '#FD9498',
          '#C5BAFF',
          '#FD9498',
        ],

        borderWidth: 0,
      },
    ],
  };

  return (
    <div>
      <div style={{ maxWidth: '280px', margin: '0 auto' }}>
        <Doughnut
          width={288}
          height={288}
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
