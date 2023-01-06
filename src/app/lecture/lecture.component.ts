import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {
  /**
   * 막대그래프 샘플 예제
   */
  private sampleData = [100,10,30,50,10,70,200,90];
  private sampleData2 = [110,50,20,30,50,90,120,70];
  private nameData = ['h','e','l', 'l','o','y','d','k']
  constructor(){}
  ngOnInit(){
    const svg = d3.select('svg');

    this.sampleData.forEach((data, index)=>{
      svg.append('rect')
       .attr('height', data)
       .attr('width', 30)
       .attr('x', 40*index+100)
       .attr('y', 300-data+100)
       .attr('fill', 'red')
       
       .transition()
       .duration(3000)
       .ease(d3.easeLinear)
       .style('fill', 'blue')
       .attr('height', this.sampleData2[index])
       .attr('y', 300-this.sampleData2[index]+100)

       svg.append('text')
       .attr('x', 40*index+100)
       .attr('y', 300 - data + 100 -10)
       .text(this.nameData[index])
       .style('font-size', '0.85em')
       .style('color', '#222')

       .transition()
       .duration(3000)
       .ease(d3.easeLinear)
       .attr('y', 300-this.sampleData2[index]+100-10)
    })

    d3.selectAll('rect')
    .transition()
    .duration(1000)
    .ease(d3.easeLinear)
    .style('fill', 'orange')
    .delay(3000)
  }
  // constructor(){}
  // ngOnInit(){}
}
