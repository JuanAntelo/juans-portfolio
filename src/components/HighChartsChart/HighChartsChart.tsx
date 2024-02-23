import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface HighChartsChartProps {
    listingsHighestRangeCount: number,
    listingsUpperMiddleRangeCount: number,
    listingsLowerMiddleRangeCount: number,
    listingsLowestRangeCount: number
}

const HighChartsChart = ({ listingsHighestRangeCount, listingsUpperMiddleRangeCount, listingsLowerMiddleRangeCount, listingsLowestRangeCount }: HighChartsChartProps) => {
    const chartColor = "#FFF"
    const barColor = "#06345c";

    const options = {
        chart: {
            type: 'bar',
            backgroundColor: 'transparent',
            color: chartColor
        },
        title: {
            text: '',
        },
        yAxis: {
            title: {
                text: 'Price ranges in USD',
                style: {
                    color: chartColor
                }
            },
            labels: {
                style: {
                    color: chartColor
                }
            },        
        },
        plotOptions: {
            series: {
                color: barColor
            }
        },
        xAxis: {
            title: {
                text: 'Count of listings',
                style: {
                    color: chartColor
                }
            },
            labels: {
                style: {
                    color: chartColor
                }
            },
            categories: ['8,000+', '5,000 - 8,000', '3,000 - 5000', 'Less than or equal to 3000']
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Listings Count: ',
            data: [listingsHighestRangeCount, listingsUpperMiddleRangeCount, listingsLowerMiddleRangeCount, listingsLowestRangeCount]
        }]
    }

    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </>
    )
}   

export default HighChartsChart;
