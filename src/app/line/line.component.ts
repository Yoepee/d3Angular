import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import { NumberValue } from 'd3';
// import { Alpha } from '../line';
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

    alphabet = [
      { x: 1, y: 0.08167 },
      { x: 2, y: 0.01492 },
      { x: 3, y: 0.02782 },
      { x: 4, y: 0.04253 },
      { x: 5, y: 0.12702 },
      { x: 6, y: 0.02288 },
      { x: 7, y: 0.02015 },
      { x: 8, y: 0.06094 },
      { x: 9, y: 0.06966 },
      { x: 10, y: 0.00153 },
      { x: 11, y: 0.00772 },
      { x: 12, y: 0.04025 },
      { x: 13, y: 0.02406 },
      { x: 14, y: 0.06749 },
      { x: 15, y: 0.07507 },
      { x: 16, y: 0.01929 },
      { x: 17, y: 0.00095 },
      { x: 18, y: 0.05987 },
      { x: 19, y: 0.06327 },
      { x: 20, y: 0.09056 },
      { x: 21, y: 0.02758 },
      { x: 22, y: 0.00978 },
      { x: 23, y: 0.02360 },
      { x: 24, y: 0.00150 },
      { x: 25, y: 0.01974 },
      { x: 26, y: 0.00074 },
    ]
    // constructor() { }

    // ngOnInit() {
    //   this.LineChart(this.alphabet);
    // }

    testChart(data :any) {
      console.log(d3.extent(data, (d:any) => d.x), d3.sum(data, (d:any) => d.x))
      // Compute values.
      // const X = d3.map(data, );
      // const Y = d3.map(data, );
      // const I = d3.range(X.length);
      // if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
      // const D = d3.map(data, defined);

      // Compute default domains.
      // if (xDomain === undefined) xDomain = d3.extent(X);
      // if (yDomain === undefined) yDomain = [0, d3.max(Y)];

      // Construct scales and axes.
      const xScale = this.xType(d3.extent(data, (d:any) => d.x) as any, this.xRange);
      const yScale = this.yType([0, d3.max(data, (d:any) => d.y)] as any, this.yRange);
      // const xAxis = d3.axisBottom(xScale).ticks(this.width / 80).tickSizeOuter(0);
      // const yAxis = d3.axisLeft(yScale).ticks(this.height / 40, this.yFormat);
      const x = d3.scaleTime()
      .domain([d3.min(data, (d:any) => d.x), d3.max(data, (d:any) => d.x)] as any)
      .range([this.margin.left, this.width - this.margin.right]);

      const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d:any) => d.y)] as any)
      .range([this.height - this.margin.bottom, this.margin.top]);
      // Construct a line generator.
      const line: any = d3.line()
      .defined((d:any) => !isNaN(d.x))
      // .x((d:any) => x(d.x))
      // .y((d:any) => y(d.y));
          .curve(this.curve)
          .x((d:any) => x(d.x))
          .y((d:any) => y(d.y));

      const svg = d3.select('.line2').append('svg').style('width', this.width).style('height', this.height)
          .attr("width", this.width)
          .attr("height", this.height)
          .attr("viewBox", [0, 0, this.width, this.height])
          .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

      svg.append("g")
          // .attr("transform", `translate(0,${this.height - this.marginBottom})`)
          .call(g => g
            .attr("transform", `translate(0,${this.height - this.margin.bottom})`)
            .call(d3.axisBottom(x).ticks(this.width/30).tickSizeOuter(0)));

      svg.append("g")
          .attr("transform", `translate(${this.marginLeft},0)`)
          .call(g => g
            .attr("transform", `translate(${this.margin.left},0)`)
            .call(d3.axisLeft(y))
            .call(g => g.select(".domain").remove())
            .call(g => {
              return g.select(".tick:last-of-type text").clone()
                .attr("x", 3)
                .attr("text-anchor", "start")
                .attr("font-weight", "bold")
                .attr("font-size", '20px')
                .text('y축')
              }))
          .call(g => g.select(".domain").remove())
          .call(g => g.selectAll(".tick line").clone()
              .attr("x2", this.width - this.marginLeft - this.marginRight)
              .attr("stroke-opacity", 0.1))
          .call(g => g.append("text")
              .attr("x", -this.marginLeft)
              .attr("y", 3)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start"));
              // .text(yLabel));

      svg.append("path")
          .attr("fill", "none")
          .attr("stroke", this.color)
          .attr("stroke-width", this.strokeWidth)
          .attr("stroke-linecap", this.strokeLinecap)
          .attr("stroke-linejoin", this.strokeLinejoin)
          .attr("stroke-opacity", this.strokeOpacity)
          .attr("d", line);

      svg.node();

  }
  // private width = 500;
  // private height = 500;
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
    this.testChart(this.alphabet)
  }

  LineChart(data: { date: Date, value: number }[]) {
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date) as any)
      .range([this.margin.left, this.width - this.margin.right]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)] as any).nice()
      .range([this.height - this.margin.bottom, this.margin.top]);

      // const xAxis = g => g
      // .attr("transform", `translate(0,${this.height - this.margin.bottom})`)
      // .call(d3.axisBottom(x).ticks(this.width / 90).tickSizeOuter(0));

      // const yAxis = g => g
      // .attr("transform", `translate(${this.margin.left},0)`)
      // .call(d3.axisLeft(y))
      // .call(g => g.select(".domain").remove())
      // .call(g => {
      //   return g.select(".tick:last-of-type text").clone()
      //     .attr("x", 3)
      //     .attr("text-anchor", "start")
      //     .attr("font-weight", "bold")
      //     .attr("font-size", '20px')
      //     .text('Y축')
      //   });

    const line:any = d3.line()
    .defined((d:any) => !isNaN(d.value))
    .x((d:any) => x(d.date ))
    .y((d:any) => y(d.value));

    const svg = d3.select('.line').append('svg').style('width', this.width).style('height', this.height);
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);
    // x축
    svg.append('g')
    .call(g => g
      .attr("transform", `translate(0,${this.height - this.margin.bottom})`)
      .call(d3.axisBottom(x).ticks(this.width / 90).tickSizeOuter(0)))
      // .text('x축');
    // y축
      svg.append('g')
    .call(g => g
      .attr("transform", `translate(${this.margin.left},0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select(".domain").remove())
      .call(g => {
        return g.select(".tick:last-of-type text").clone()
          .attr("x", 3)
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .attr("font-size", '20px')
          .text('y축')
        }));
    svg.node();
  }

}