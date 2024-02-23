import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import Listing from '../../types/Listing';
import React from 'react';

interface ChartJSChartProps {
  listings: Listing[],
  maxBedRooms: number,
  maxListPrice: number
}
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

function ChartJSChart({listings, maxBedRooms, maxListPrice} : ChartJSChartProps) {
  const chartColor = "#FFF"
  ChartJS.defaults.color = chartColor;
  const options = {
    parsing: {
      xAxisKey: 'NO_BEDROOMS_AS_NUM',
      yAxisKey: 'LIST_PRICE_AS_NUM'
    },
    scales: {
      x: {
        min: 0,
        max: maxBedRooms + 1, // add 1 as offset to prevent cut-off
        title: {
          color: chartColor,
          display: true,
          text: "# of Bedrooms"
        },
        ticks: {
          stepSize: 1
        }
      },
      y: {
        min: 0,
        max: maxListPrice + 500, // add 500 as offset to prevent cut-off
        title: {
          color: chartColor,
          display: true,
          text: "Monthly Price"
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
        data: listings,
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return <Scatter options={options} data={data} />;
}

export default ChartJSChart
