import * as d3 from 'd3';
import { useRef, useEffect } from "react"
import Listing from '../../types/Listing';
import "./D3ScatterChart.css"

interface D3ScatterChartProps {
    listings: Listing[],
    maxRoomCount: number,
    maxListPrice: number
}

function D3ScatterChart({listings, maxRoomCount, maxListPrice} : D3ScatterChartProps) {
    const ref = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        renderChart();
    }, [])

    function renderChart() {
        // set the dimensions and margins of the graph
        const margin = {top: 10, right: 30, bottom: 30, left: 60}
        const width = 460 - margin.left - margin.right
        const height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        var svg = d3.select(ref.current!)
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Add X axis
        var x = d3.scaleLinear()
            .domain([0, maxRoomCount])
            .range([ 0, width ]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, maxListPrice])
            .range([ height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Add dots
        svg.append('g')
            .selectAll("dot")
            .data(listings)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return x(d.NO_ROOMS_AS_NUM!); } )
            .attr("cy", function (d) { return y(d.LIST_PRICE_AS_NUM!); } )
            .attr("r", 1.5)
            .style("fill", "#69b3a2")
    }

    return (
        <>
            <div className="flex-container">
                <div className="monthly-price-label"><span>Monthly Price</span></div>
                <div>
                    <svg
                        width={400}
                        height={400}
                        ref={ref}
                    />
                </div>
            </div>
            <div className="room-count-label">Number of Rooms</div>
        </>
    )
}

export default D3ScatterChart;
