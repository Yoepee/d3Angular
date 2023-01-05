import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
    private curve = d3.curveLinear; // method of interpolation between points
    private marginTop = 20; // top margin, in pixels
    private marginRight = 30; // right margin, in pixels
    private marginBottom = 30; // bottom margin, in pixels
    private marginLeft = 40; // left margin, in pixels
    private width = 640; // outer width, in pixels
    private height = 400; // outer height, in pixels
    private xType = d3.scaleUtc; // the x-scale type
    
    private xRange = [this.marginLeft, this.width - this.marginRight]; // [left, right]
    private yType = d3.scaleLinear; // the y-scale type
    private yRange = [this.height - this.marginBottom, this.marginTop]; // [bottom, top]

    private color = "currentColor"; // stroke color of line
    private strokeLinecap = "round"; // stroke line cap of the line
    private strokeLinejoin = "round"; // stroke line join of the line
    private strokeWidth = 1.5; // stroke width of line, in pixels
    private strokeOpacity = 1; // stroke opacity of line

  // alphabet = [
  //   { letter: "A", frequency: 0.08167 },
  //   { letter: "B", frequency: 0.01492 },
  //   { letter: "C", frequency: 0.02782 },
  //   { letter: "D", frequency: 0.04253 },
  //   { letter: "E", frequency: 0.12702 },
  //   { letter: "F", frequency: 0.02288 },
  //   { letter: "G", frequency: 0.02015 },
  //   { letter: "H", frequency: 0.06094 },
  //   { letter: "I", frequency: 0.06966 },
  //   { letter: "J", frequency: 0.00153 },
  //   { letter: "K", frequency: 0.00772 },
  //   { letter: "L", frequency: 0.04025 },
  //   { letter: "M", frequency: 0.02406 },
  //   { letter: "N", frequency: 0.06749 },
  //   { letter: "O", frequency: 0.07507 },
  //   { letter: "P", frequency: 0.01929 },
  //   { letter: "Q", frequency: 0.00095 },
  //   { letter: "R", frequency: 0.05987 },
  //   { letter: "S", frequency: 0.06327 },
  //   { letter: "T", frequency: 0.09056 },
  //   { letter: "U", frequency: 0.02758 },
  //   { letter: "V", frequency: 0.00978 },
  //   { letter: "W", frequency: 0.02360 },
  //   { letter: "X", frequency: 0.00150 },
  //   { letter: "Y", frequency: 0.01974 },
  //   { letter: "Z", frequency: 0.00074 },
  // ]
  constructor() { }

  ngOnInit() {
    this.LineChart();
  }

  LineChart(data) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const I = d3.range(X.length);
    if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
    const D = d3.map(data, defined);
  
    // Compute default domains.
    if (xDomain === undefined) xDomain = d3.extent(X);
    if (yDomain === undefined) yDomain = [0, d3.max(Y)];
  
    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);
  
    // Construct a line generator.
    const line = d3.line()
        .defined(i => D[i])
        .curve(curve)
        .x(i => xScale(X[i]))
        .y(i => yScale(Y[i]));
  
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
  
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis);
  
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(yLabel));
  
    svg.append("path")
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", strokeWidth)
        .attr("stroke-linecap", strokeLinecap)
        .attr("stroke-linejoin", strokeLinejoin)
        .attr("stroke-opacity", strokeOpacity)
        .attr("d", line(I));
  
    return svg.node();

}
