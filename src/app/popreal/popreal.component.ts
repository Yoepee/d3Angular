import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { interval, map, take } from 'rxjs';

@Component({
  selector: 'app-popreal',
  templateUrl: './popreal.component.html',
  styleUrls: ['./popreal.component.css']
})
export class PoprealComponent implements OnInit {
  constructor(){}
  ngOnInit(){
    const canvas = d3.select('.pop')

    const n = 100;
    const duration = 750;
    var count = 0;
    var now:any = new Date(Date.now() - duration);

    var data: any = d3.range(n).map(() => 20);

    const width = 1000;
    const height = 300;
    const svg = canvas.append('svg')
        .attr('height', height)
        .attr('width', width);

    let [mt, mb, mr, ml] = [50, 50, 50, 50];

    const graphWidth = width - ml - mr;
    const graphHeight = height - mt - mb;

    var axisX = d3.scaleTime()
          .domain([now - (n - 2) * duration, now - duration])
          .range([0, graphWidth])

    var axisY = d3.scaleLinear()
          .domain([0, 200])
          .range([graphHeight, 0])

    const line:any = d3.line()
        .x(function(d, i) { return axisX(now - (n - 1 - i) * duration); })
        .y(function(d:any, i) { return axisY(d); })
        .curve(d3.curveBasis);

    const graph = svg. append('g')
       .attr('width', graphWidth)
       .attr('height', graphHeight+100)
       .attr('transform', `translate(${ml},${mt})`)
    
       var axis = graph.append('g')
       .attr('transform', `translate(0,${graphHeight})`)
       .attr('fill', 'green')
       .attr('color', 'green')
       .call(d3.axisBottom(axisX))

       graph.append('g')
       .attr('class', 'x axis')
       .attr('fill', 'green')
       .attr('color', 'green')
       .call(d3.axisLeft(axisY))

       const lineChart = graph.append('g')
       .attr('class', 'chart')
       .attr('transform', `translate(10,0)`);
       
       lineChart.append("path") // path: 실제 데이터 구현 부
       .datum(data)
       .attr('class', 'test')
       .attr('fill', 'none')
       .attr('stroke', 'green')
       .attr('stroke-width', '1.5px')
       .attr('transform', 'translate(0,0)')
       .attr('d', line(data))

      
      // //  const result = interval(100).pipe(take(1000))
      //  const result = interval(100)
      //  .subscribe(x=> {
      //   d3.select('.test').remove()
      //   d3.select('.rect').remove()

      //   data.splice(0,1);

      //   data.push(Math.random() * 100)
      //   count++;

      //   // data.reverse();
        
      //   now = new Date();
      //   axisX.domain([now - (n - 2) * duration, now - duration]);

      //   axis.transition() // x축 설정, transition화
      //       .duration(0)
      //       .ease(d3.easeLinear)
      //       .call(d3.axisBottom(axisX));


      //   lineChart.append("path") // path: 실제 데이터 구현 부
      //  .datum(data)
      //  .attr('class', 'test')
      //  .attr('fill', 'none')
      //  .attr('stroke', 'green')
      //  .attr('stroke-width', '1.5px')
      //  .attr('transform', 'translate(0,0)')
      //  .attr('d', line(data))

      // lineChart.append('rect')
      // .attr('class', 'rect')
      //  .attr('height', graphHeight)
      //  .attr('width', 30)
      //  .attr('x', (count*9.2) % graphWidth )
      //  .attr('y', -1)
      //  .attr('fill', 'black')
      // });
      
    
  }
}
