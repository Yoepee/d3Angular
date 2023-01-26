import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'd3angular';

  constructor() { }

  ngOnInit() {
    this.draw();
  }

  draw() {
    
    // const canvas = d3.select('.canvas');

    // const svg = canvas.append('svg')
    //   .attr('width', 1000)
    //   .attr('height', 1000);

    // svg.append('text')
    //   .attr('x', 200)
    //   .attr('y', 200)
    //   .text('hello world')
    //   .style('font-weight', 'bold')
    //   .style('font-size', '34px')
    //   .style('font-family', 'pacifico');

    // svg.append('rect')
    //   .attr('x', 200)
    //   .attr('y', 200)
    //   .attr('width', 200)
    //   .attr('height', 200)
    //   .attr('fill', 'hotpink')
  }
}
