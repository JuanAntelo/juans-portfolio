import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const HighChartsChart = () => {
    const options = {
        chart: {
            type: 'bar',
            backgroundColor: 'transparent',
            color: "#FFF"
        },
        title: {
            text: '',
        },
        yAxis: {
            labels: {
                style: {
                    color: "#FFF"
                }
            },        
        },
        plotOptions: {
            series: {
                color: '#06345c'
            }
        },
        xAxis: {
            labels: {
                style: {
                    color: "#FFF"
                }
            },
            categories: ['Africa', 'America', 'Asia']
        },
        legend: {
            enabled: false
        },
        series: [{
            data: [1, 2, 3]
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
