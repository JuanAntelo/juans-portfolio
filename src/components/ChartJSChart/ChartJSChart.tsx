import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

function ChartJSChart() {
    ChartJS.defaults.color = '#FFF';

    const options = {
        scales: {
            x: {
                min: 0,
                max: 10,
                title: {
                    color: "#FFF"
                }
            },
            y: {
                min: 0,
                max: 10,
                title: {
                    color: "#FFF"
                }
            }
        },
        plugins: {
            legend: {
              display: false,
            },
          },
      };
      
      const data = {
        datasets: [
          {
            data: [{
              x: 5,
              y: 3
          }, {
              x: 8,
              y: 6
          }],
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
    };

    return <Scatter options={options} data={data} />;
}

export default ChartJSChart
