import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
        const graph = d3.select('.graph');

        const n = 243;
        const duration = 750
        var now: any = new Date(Date.now() - duration)

        var count: any = 0;
        var data: any = d3.range(n).map(() => 0.1);


        const margin = { top: 20, right: 20, bottom: 20, left: 20 };

        const width = 1000 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        const svg = graph.append('svg')
          .attr('width', width)
          .attr('height', height + 50)
          .attr('transform', `translate(${margin.left + 100},${margin.top + 20})`)

        var x = d3.scaleTime()
          .domain([now - (n - 2) * duration, now - duration])
          .range([0, width])
          // .ticks(10)

        var y = d3.scaleLinear()
          .domain([0, 1])
          .range([height, 0]);

        const line: any = d3.line()
        .x(function(d, i) { return x(now - (n - 1 - i) * duration); })
        .y(function(d:any, i) { return y(d); });

        console.log(line(data))

        const g = svg.append('g')

        g.append('defs').append('clipPath')
          .attr('id', 'clip')
          .append('rect')
          .attr('width', width)
          .attr('height', height)

        // g.append('g')
        // .append('path')
        // .attr('fill', 'none')
        // .attr('stroke', 'black')
        // .attr('stroke-width', '1.5px')
        // .attr("class", "line")
        // .attr('d', line(data))
        
        

        var axis = g.append('g')
          .attr('class', 'x axis')
          .attr('transform', `translate(30,${height + 10})`)
          .call(d3.axisBottom(x))
          // .call(x.axis = d3.axisBottom(x))

        g.append('g')
          .attr('class', 'axis axis--y')
          .attr('transform', `translate(${30},+10)`)
          .call(d3.axisLeft(y))


        g.append('g')
        .attr('transform', `translate(40,10)`)
        .append("path") // path: 실제 데이터 구현 부
        .datum(data)
        // .attr("class", "line") // (CSS)
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('stroke-width', '1.5px')
        .attr('transform', 'translate(0,0)')
        // .attr('d', line(data))
        // .attr('transform', `translate()`)
        .transition()
        .duration(750)
        .ease(d3.easeLinear)
        .on("start", tick);


        // const path = g.append('g')
        // .attr('clip-path', 'url(#clip)')
        // .append('path')
        // .datum(data)
        // .attr('class', 'line')
        // .attr("d", line);

        //   function tick(this:any) {

        //     now = new Date();
        //     x.domain([now - (n - 2) * duration, now - duration]);
        //     y.domain([0, d3.max(data)]);
        //     data.push(Math.min(30, count)); // 새로운 데이터 포인트를 뒤에 push.
        //     count = 0;

        //     d3.select(this) // 기본 변환행렬 초기화
        //         .attr("d", line)
        //         .attr("transform", null); // 선을 다시 그린다.

        //     axis.transition() // x축 설정, transition화
        //         .duration(750)
        //         .ease(d3.easeLinear)
        //         .on('start', function repeat(z) {
        //           d3.active(z) // 변환행렬 설정
        //           .attr("transform", "translate(" + x(now - (n - 1) * duration) + ")")  // 왼쪽으로 민다.
        //           .transition() // 변환 start
        //           .on("start", tick);
        //         })
        //         // .call(x.axis);



        //     data.shift(); //이전 데이터 포인트를 앞으로 pop.
        // }

        function tick(this: any) {

          now = new Date();
          x.domain([now - (n - 2) * duration, now - duration]);
          // y.domain([0, (d3.max(data) as any)]);
          y.domain([0, 1]);
          // data.push(Math.min(30, count)); // 새로운 데이터 포인트를 뒤에 push.
          data.push(Math.random())
          // count = 0;
    
          d3.select(this) // 기본 변환행렬 초기화
            .attr("d", line(data))
            .attr("transform", null); // 선을 다시 그린다.
    
          axis.transition() // x축 설정, transition화
            .duration(750)
            .ease(d3.easeLinear)
            .call(d3.axisBottom(x));
    
          (d3.active(this) as any) // 변환행렬 설정
            .attr("transform", `translate(${x(now - (n - 1) * duration)})`)  // 왼쪽으로 민다.
            .transition() // 변환 start
            .on("start", tick);
    
          data.shift(); //이전 데이터 포인트를 앞으로 pop.
        }

      //   function tick(this:any) {
          
      //     data.push(Math.random());
      //     d3.select('path')
      //         .attr("d", line)
      //         .attr("transform", null); 

      //     (d3.active(this) as any)
      //         .attr("transform", `translate(${x(-1)},0)`) 
      //         .transition() 
      //         .on("start", tick);
       
      //     data.shift(); 
      // }
  }
}
