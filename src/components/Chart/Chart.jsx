import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { options } from 'helpers/formAddTransaction/options';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const myChart = () => {
  const categories = options.map(option => option.label);

  const drawInnerText = chart => {
    const ctx = chart.ctx;
    ctx.restore();
    ctx.font = '700 18px Circe-Regular';
    ctx.textBaseline = 'middle';
    const dataArrValues = chart.config._config.data.datasets[0].data;
    ctx.cutoutPercentage = 30;
    const text = `₴${dataArrValues
      .reduce((total, b) => total + b, 0)
      .toFixed(2)}`;
    const textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
    const textY = chart.height / 2 + chart.legend.height / 2;
    ctx.fillText(text, textX, textY);
    ctx.fillStyle = '#000000';
    ctx.save();
  };

  // const optionsChart = {
  //   cutoutPercentage: 30,
  //   elements: {
  //     center: {
  //       text: 'total',
  //       fontColor: '#666666',
  //       fontFamily: 'Allianz-Neo',
  //       fontStyle: 'bold',
  //       minFontSize: 15,
  //       maxFontSize: 20,
  //     },
  //   },
  //   plugins: {
  //     outlabels: {
  //       backgroundColor: 'white', // Background color of Label
  //       borderColor: 'none', // Border color of Label
  //       borderRadius: 0, // Border radius of Label
  //       borderWidth: 10, // Thickness of border
  //       color: 'black', // Font color
  //       display: false,
  //       lineWidth: 1, // Thickness of line between chart arc and Label
  //       padding: 0,
  //       lineColor: 'black',
  //       textAlign: 'center',
  //       stretch: 45,
  //     },
  //     labels: false,
  //   },
  //   legend: {
  //     display: false,
  //     position: 'right',
  //     align: 'right',
  //     fontFamily: 'Allianz-Neo',
  //     textDirection: 'ltr',
  //     labels: {
  //       usePointStyle: true,
  //       fontColor: '#006192',
  //     },
  //   },
  // };

  const data = {
    labels: categories,
    datasets: [
      {
        label: '# of Votes',
        data: [12.0, 19.0, 3.0, 5.0, 2.0, 10.0, 67, 33],
        text: 'summ',
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#81E1FF',
          '#FD9498',
          '#C5BAFF',
        ],

        borderWidth: 0,
      },
    ],
  };

  return (
    <div>
      <h1>Statistics</h1>
      <Doughnut
        width={288}
        height={288}
        data={data}
        options={{
          cutoutPercentage: 65,
          responsive: true,
          maintainAspectRatio: true,
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
  );
};

export default myChart;
