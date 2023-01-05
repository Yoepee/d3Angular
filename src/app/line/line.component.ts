import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
// import { Alpha } from '../line';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})



export class LineComponent implements OnInit {
  //     private curve = d3.curveLinear; // method of interpolation between points
  //     private marginTop = 20; // top margin, in pixels
  //     private marginRight = 30; // right margin, in pixels
  //     private marginBottom = 30; // bottom margin, in pixels
  //     private marginLeft = 40; // left margin, in pixels
  //     private width = 640; // outer width, in pixels
  //     private height = 400; // outer height, in pixels
  //     private xType = d3.scaleUtc; // the x-scale type

  //     private xRange = [this.marginLeft, this.width - this.marginRight]; // [left, right]
  //     private yType = d3.scaleLinear; // the y-scale type
  //     private yRange = [this.height - this.marginBottom, this.marginTop]; // [bottom, top]

  //     private color = "currentColor"; // stroke color of line
  //     private strokeLinecap = "round"; // stroke line cap of the line
  //     private strokeLinejoin = "round"; // stroke line join of the line
  //     private strokeWidth = 1.5; // stroke width of line, in pixels
  //     private strokeOpacity = 1; // stroke opacity of line

  //   alphabet = [
  //     { x: "A", y: 0.08167 },
  //     { x: "B", y: 0.01492 },
  //     { x: "C", y: 0.02782 },
  //     { x: "D", y: 0.04253 },
  //     { x: "E", y: 0.12702 },
  //     { x: "F", y: 0.02288 },
  //     { x: "G", y: 0.02015 },
  //     { x: "H", y: 0.06094 },
  //     { x: "I", y: 0.06966 },
  //     { x: "J", y: 0.00153 },
  //     { x: "K", y: 0.00772 },
  //     { x: "L", y: 0.04025 },
  //     { x: "M", y: 0.02406 },
  //     { x: "N", y: 0.06749 },
  //     { x: "O", y: 0.07507 },
  //     { x: "P", y: 0.01929 },
  //     { x: "Q", y: 0.00095 },
  //     { x: "R", y: 0.05987 },
  //     { x: "S", y: 0.06327 },
  //     { x: "T", y: 0.09056 },
  //     { x: "U", y: 0.02758 },
  //     { x: "V", y: 0.00978 },
  //     { x: "W", y: 0.02360 },
  //     { x: "X", y: 0.00150 },
  //     { x: "Y", y: 0.01974 },
  //     { x: "Z", y: 0.00074 },
  //   ]
  //   constructor() { }

  //   ngOnInit() {
  //     this.LineChart(this.alphabet);
  //   }

  //   LineChart(data:Alpha[]) {
  //     // Compute values.
  //     const X = d3.map(data, );
  //     const Y = d3.map(data, );
  //     const I = d3.range(X.length);
  //     // if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
  //     const D = d3.map(data, defined);

  //     // Compute default domains.
  //     // if (xDomain === undefined) xDomain = d3.extent(X);
  //     // if (yDomain === undefined) yDomain = [0, d3.max(Y)];

  //     // Construct scales and axes.
  //     const xScale = this.xType(xDomain, this.xRange);
  //     const yScale = this.yType(yDomain, this.yRange);
  //     const xAxis = d3.axisBottom(xScale).ticks(this.width / 80).tickSizeOuter(0);
  //     const yAxis = d3.axisLeft(yScale).ticks(this.height / 40, this.yFormat);

  //     // Construct a line generator.
  //     const line = d3.line()
  //         .defined(i => D[i])
  //         .curve(this.curve)
  //         .x(i => xScale(X[i]))
  //         .y(i => yScale(Y[i]));

  //     const svg = d3.create("svg")
  //         .attr("width", this.width)
  //         .attr("height", this.height)
  //         .attr("viewBox", [0, 0, this.width, this.height])
  //         .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  //     svg.append("g")
  //         .attr("transform", `translate(0,${this.height - this.marginBottom})`)
  //         .call(xAxis);

  //     svg.append("g")
  //         .attr("transform", `translate(${this.marginLeft},0)`)
  //         .call(yAxis)
  //         .call(g => g.select(".domain").remove())
  //         .call(g => g.selectAll(".tick line").clone()
  //             .attr("x2", this.width - this.marginLeft - this.marginRight)
  //             .attr("stroke-opacity", 0.1))
  //         .call(g => g.append("text")
  //             .attr("x", -this.marginLeft)
  //             .attr("y", 10)
  //             .attr("fill", "currentColor")
  //             .attr("text-anchor", "start"));
  //             // .text(yLabel));

  //     svg.append("path")
  //         .attr("fill", "none")
  //         .attr("stroke", this.color)
  //         .attr("stroke-width", this.strokeWidth)
  //         .attr("stroke-linecap", this.strokeLinecap)
  //         .attr("stroke-linejoin", this.strokeLinejoin)
  //         .attr("stroke-opacity", this.strokeOpacity)
  //         .attr("d", line(I));

  //     return svg.node();

  // }
  private width = 500;
  private height = 500;
  private margin = { top: 40, right: 40, bottom: 40, left: 40 };
  private data = [
    { date: new Date('2018-01-01'), value: 10 },
    { date: new Date('2018-01-02'), value: 20 },
    { date: new Date('2018-01-03'), value: 30 },
    { date: new Date('2018-01-04'), value: 25 },
    { date: new Date('2018-01-05'), value: 35 },
    { date: new Date('2018-01-06'), value: 45 },
    { date: new Date('2018-01-07'), value: 60 },
    { date: new Date('2018-01-08'), value: 50 }
  ];
  constructor() { }

  ngOnInit() {
    this.LineChart(this.data);
  }

  LineChart(data: { date: Date, value: number }[]) {
    const x = d3.scaleTime()
      // .domain(d3.extent(data, d => d.date))
      .range([this.margin.left, this.width - this.margin.right]);

    const y = d3.scaleLinear()
      // .domain([0, d3.max(data, d => d.value)]).nice()
      .range([this.height - this.margin.bottom, this.margin.top]);

    const xAxis = (g: { attr: (arg0: string, arg1: string) => { (): any; new(): any; call: { (arg0: d3.Axis<Date | d3.NumberValue>): any; new(): any; }; }; }) => g
      .attr("transform", `translate(0,${this.height - this.margin.bottom})`)
      .call(d3.axisBottom(x).ticks(this.width / 90).tickSizeOuter(0));

    const yAxis = (g: { attr: (arg0: string, arg1: string) => { (): any; new(): any; call: { (arg0: d3.Axis<d3.NumberValue>): { (): any; new(): any; call: { (arg0: (g: any) => any): { (): any; new(): any; call: { (arg0: (g: any) => any): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => g
      .attr("transform", `translate(${this.margin.left},0)`)
      .call(d3.axisLeft(y))
      .call((g: { select: (arg0: string) => { (): any; new(): any; remove: { (): any; new(): any; }; }; }) => g.select(".domain").remove())
      .call((g: { select: (arg0: string) => { (): any; new(): any; clone: { (): { (): any; new(): any; attr: { (arg0: string, arg1: number): { (): any; new(): any; attr: { (arg0: string, arg1: string): { (): any; new(): any; attr: { (arg0: string, arg1: string): { (): any; new(): any; attr: { (arg0: string, arg1: string): { (): any; new(): any; text: { (arg0: string): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => {
        return g.select(".tick:last-of-type text").clone()
          .attr("x", 3)
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .attr("font-size", '20px')
          .text('Y축')
      });

    const line = d3.line()
      // .defined(d => !isNaN(d.value))
      // .x(d => x(d.date))
      // .y(d => y(d.value));

    const svg = d3.select('.line').append('svg').style('width', this.width).style('height', this.height);
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      // .attr("d", line);
    // svg.append('g').call(xAxis);
    // svg.append('g').call(yAxis);
    svg.node();
  }

}