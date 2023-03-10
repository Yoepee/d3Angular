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

    const n = 803;
    const duration = 750
    var now: any = new Date(Date.now() - duration)

    var count: any = 0;
    var data: any = d3.range(n).map(() => 32500);
    var arr:any=d3.range(n).map(() => 32500);;

    d3.json("/assets/data/test.json")
    .then((d:any) => {
      arr = (d.flat());
    });


    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    const width = 2000 - margin.left - margin.right;
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
      .domain([32400, 32600])
      .range([height, 0]);

    const line: any = d3.line()
      .x(function (d, i) { return x(now - (n - 1 - i) * duration); })
      .y(function (d: any, i) { return y(d); })
      .curve(d3.curveBumpY);

    console.log(line(data))

    const g = svg.append('g')

    g.append('defs').append('clipPath')
      .attr('id', 'clip')
      .append('rect')
      .attr('width', width + 20)
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
      .attr('transform', `translate(5,${height + 10})`)
      .call(d3.axisBottom(x))
    // .call(x.axis = d3.axisBottom(x))

    g.append('g')
      .attr('class', 'axis axis--y')
      .attr('transform', `translate(${5},10)`)
      .call(d3.axisLeft(y))


    g.append('g')
      .attr('transform', `translate(40,10)`)
      .attr('class', 'line')
      .append("path") // path: ?????? ????????? ?????? ???
      .datum(data)
      // .attr("class", "line") // (CSS)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', '1.5px')
      .attr('transform', 'translate(0,0)')
      // .attr('d', line(data))
      // .attr('transform', `translate()`)
      .transition()
      .duration(10)
      .ease(d3.easeLinear)
      .on("start", tick);


    //   g.append('rect')
    // .attr('class', 'rect')
    //  .attr('height', height)
    //  .attr('width', 30)
    //  .attr('x', (count*9) % width )
    //  .attr('y', -1)
    //  .attr('fill', 'black')


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
    //     data.push(Math.min(30, count)); // ????????? ????????? ???????????? ?????? push.
    //     count = 0;

    //     d3.select(this) // ?????? ???????????? ?????????
    //         .attr("d", line)
    //         .attr("transform", null); // ?????? ?????? ?????????.

    //     axis.transition() // x??? ??????, transition???
    //         .duration(750)
    //         .ease(d3.easeLinear)
    //         .on('start', function repeat(z) {
    //           d3.active(z) // ???????????? ??????
    //           .attr("transform", "translate(" + x(now - (n - 1) * duration) + ")")  // ???????????? ??????.
    //           .transition() // ?????? start
    //           .on("start", tick);
    //         })
    //         // .call(x.axis);



    //     data.shift(); //?????? ????????? ???????????? ????????? pop.
    // }

    function tick(this: any) {
      d3.select('.rect').remove()
      now = new Date();
      x.domain([now - (n - 2) * duration, now - duration]);
      // y.domain([0, (d3.max(data) as any)]);
      y.domain([d3.min(arr) as any, d3.max(arr) as any]);
      // data.push(Math.min(30, count)); // ????????? ????????? ???????????? ?????? push.
      // data.push(Math.random())
      // data.push(Math.random())
      // data.push(Math.random())
      // data.push(Math.random())
      // data.push(Math.random())
      // for(let i of [0,1,2,3,4]){
      //   if(i<2){
      //     data[count%n+i]=(Math.random())
      //     d3.select(this) // ?????? ???????????? ?????????
      //     .attr("d", line(data))
      //     .attr("transform", null); // ?????? ?????? ?????????.
      //   }
      //   else{
      //     data[count%n+i] = 0.5
      //     d3.select(this) // ?????? ???????????? ?????????
      //     .attr("d", line(data))
      //     .attr("transform", null); // ?????? ?????? ?????????.
      //   }
      // }
      // count = 0;
      // count+=5;
      count++;
      // if (count%10< 5){
      //   data[count%n] = 32500;
      // }

      // else
      //   data[count%n] = 32500;
      data[count%n] = arr[count%2000];
      // data[(count+1)%n] = data[(count+1)%2000];
      // data[count+2%n] = data[count+2%2000];
      // data[count+3%n] = data[count+3%2000];
      // data[count+4%n] = data[count+4%2000];
      // console.log(data)

      d3.select(this) // ?????? ???????????? ?????????
        .attr("d", line(data))
        .attr("transform", null); // ?????? ?????? ?????????.

      d3.select('.line')
        .append('rect')
        .attr('class', 'rect')
        .attr('height', height)
        .attr('width', 30)
        .attr('x', x(now - (n - 1 - (count%n)) * duration))
        .attr('y', 0)
        .attr('fill', 'red')

        // d3.select('.line')
        // .append('rect')
        // .attr('class', 'rect')
        // .attr('height', height)
        // .attr('width', 30)
        // .attr('x', width-100)
        // .attr('y', -1)
        // .attr('fill', 'black')

      axis.transition() // x??? ??????, transition???
        // .duration(75)
        .ease(d3.easeLinear);
        //.call(d3.axisBottom(x));


      (d3.active(this) as any) // ???????????? ??????
        // .attr("transform", `translate(${-x(now - (n - 1) * duration)})`)  // ???????????? ??????.
        .transition() // ?????? start
        .on("start", tick);

      // data.shift(); //?????? ????????? ???????????? ????????? pop.
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
