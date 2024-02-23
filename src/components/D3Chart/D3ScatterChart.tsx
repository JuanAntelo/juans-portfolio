import * as d3 from 'd3';
import { useRef, useEffect } from "react"
import data from "../../../data/aapl.json"

function D3ScatterChart() {
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
            .domain([0, 4000])
            .range([ 0, width ]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, 500000])
            .range([ height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Add X axis label:
        // svg.append("text")
        //     .attr("text-anchor", "end")
        //     .attr("x", width/2 + margin.left)
        //     .attr("y", height + margin.top + 20)
        //     .text("Sepal Length");

        // Y axis label:
        // svg.append("text")
        //     .attr("text-anchor", "end")
        //     .attr("transform", "rotate(-90)")
        //     .attr("y", -margin.left + 20)
        //     .attr("x", -margin.top - height/2 + 20)
        //     .text("Petal Length")

        // Add dots
        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return x(d.GrLivArea); } )
            .attr("cy", function (d) { return y(d.SalePrice); } )
            .attr("r", 1.5)
            .style("fill", "#69b3a2")
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}><span>Monthly Price</span></div>
                <div>
                    <svg
                        width={400}
                        height={400}
                        ref={ref}
                    />
                </div>
            </div>
            <div style={{ width: '600px', textAlign: 'center' }}>Square Feet</div>
        </>
    )
}

export default D3ScatterChart;
