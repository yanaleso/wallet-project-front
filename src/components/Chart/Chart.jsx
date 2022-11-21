import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
//import { options } from 'helpers/options';

ChartJS.register(ArcElement, Tooltip, Legend);

const myChart = () => {
  // const categories = options.map(option => option.label);
  // console.log(categories);
  const data = {
    labels: [
      'Basic expenses',
      'Products',
      'Car',
      'Self care',
      'Child care',
      'Education',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        text: 'summ',
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#81E1FF',
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
          cutoutPercentage: 55,
          elements: {
            center: {
              text: 'total',
              fontColor: '#666666',
              fontFamily: 'Allianz-Neo',
              fontStyle: 'bold',
              minFontSize: 15,
              maxFontSize: 20,
            },
          },
          plugins: {
            outlabels: {
              backgroundColor: 'white', // Background color of Label
              borderColor: 'none', // Border color of Label
              borderRadius: 0, // Border radius of Label
              borderWidth: 0, // Thickness of border
              color: 'black', // Font color
              display: false,
              lineWidth: 1, // Thickness of line between chart arc and Label
              padding: 0,
              lineColor: 'black',
              textAlign: 'center',
              stretch: 45,
            },
            labels: false,
          },
          legend: {
            display: true,
            position: 'right',
            align: 'center',
            fontFamily: 'Allianz-Neo',
            textDirection: 'ltr',
            labels: {
              usePointStyle: true,
              fontColor: '#006192',
            },
          },
        }}
      />
    </div>
  );
};

export default myChart;
