import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})

export class LectureComponent implements OnInit {
  // constructor() { }
  // ngOnInit() {}
  /**
   * 막대그래프 샘플 예제
   */
  // private sampleData = [100,10,30,50,10,70,200,90];
  // private sampleData2 = [110,50,20,30,50,90,120,70];
  // private nameData = ['h','e','l', 'l','o','y','d','k']
  // constructor(){}
  // ngOnInit(){
  //   const svg = d3.select('svg');

  //   this.sampleData.forEach((data, index)=>{
  //     svg.append('rect')
  //      .attr('height', data)
  //      .attr('width', 30)
  //      .attr('x', 40*index+100)
  //      .attr('y', 300-data+100)
  //      .attr('fill', 'red')

  //      .transition()
  //      .duration(3000)
  //      .ease(d3.easeLinear)
  //      .style('fill', 'blue')
  //      .attr('height', this.sampleData2[index])
  //      .attr('y', 300-this.sampleData2[index]+100)

  //      svg.append('text')
  //      .attr('x', 40*index+100)
  //      .attr('y', 300 - data + 100 -10)
  //      .text(this.nameData[index])
  //      .style('font-size', '0.85em')
  //      .style('color', '#222')

  //      .transition()
  //      .duration(3000)
  //      .ease(d3.easeLinear)
  //      .attr('y', 300-this.sampleData2[index]+100-10)
  //   })

  //   d3.selectAll('rect')
  //   .transition()
  //   .duration(1000)
  //   .ease(d3.easeLinear)
  //   .style('fill', 'orange')
  //   .delay(3000)
  // }

  /**
   * 산점도 그래프 그리기와 enter, exit
   * enter(데이터 수 > dom요소)
   * update(재적용, 화면 갱신)
   * exit(데이터 수 < dom요소)
   * remove(불필요 데이터 제거)
   */

  // 코드의 복잡도를 올리지 않기 위해 아래와 같이 자동생성을 안한 것입니다.
  /*
  let sampleData = []
  for (var i = 0; i < 1000; i++) {
          sampleData.push({
              'cx': Math.random() * 100,
              'cy': Math.random() * 100,
              'r': Math.random() * 100,
              //hsl은 색조(hue, 0 ~ 359), 포화(saturation), 밝기(lightness)
              'color': `hsl(${Math.random()* 360}, 100%, 50%)`
          })
  }
  */

  // private sampleData = [
  //   [5, 20, 30, '#ff0000'],
  //   [5, 320, 90, '#ff0000'],
  //   [5, 150, 50, '#ff0000'],
  //   [7, 120, 70, '#ff0000'],
  //   [7, 530, 110, '#ff0000'],
  //   [7, 410, 20, '#ff0000'],
  //   [12, 720, 60, '#ff0000'],
  //   [12, 30, 110, '#ff0000'],
  //   [12, 90, 130, '#ff0000'],
  //   [19, 510, 180, '#ff0000'],
  //   [19, 310, 120, '#ff0000'],
  //   [8, 50, 150, '#ff0000'],
  //   [7, 50, 350, '#ff0000'],
  // ];
  // constructor() { }
  // ngOnInit() {
  //   // const canvas = d3.select('.canvas');
  //   // const svg = canvas.append('svg');

  //   const svg = d3.select('.canvas').append('svg')
  //     .attr('width', 1000)
  //     .attr('height', 1000);

  //   svg.selectAll('circle')
  //     .data(this.sampleData)
  //     .enter() // enter(데이터 수 > dom요소), update(재적용, 화면 갱신), exit(데이터 수 < dom요소)
  //     .append('circle')
  //     // .attr('r', d=> d[0])
  //     // .attr('cx', d=> d[1])
  //     // .attr('cy', d=> d[2])
  //     // .attr('fill', d=> d[3])
  //     .attr("r", function (d) {
  //       return d[0];
  //     })
  //     .attr("cx", function (d) {
  //       if(typeof d[1] === "string")
  //         return d[1] + '10';
  //       else(typeof d[1] === "number")
  //         return d[1] + 10;
  //     })
  //     .attr("cy", function (d) {
  //       if(typeof d[2] === "string")
  //         return d[2] + '10';
  //       else(typeof d[2] === "number")
  //         return d[2] + 10;
  //     })
  //     .attr("fill", function (d) {
  //       return d[3];
  //     })
  // }

  /**
   * 데이터 로드
   * d3.csv로 csv형식 불러오기
   * d3.tsv로 tsv형식 불러오기
   * d3.json으로 json 형식 불러오기
   */
  constructor() { }
  ngOnInit() {
    const canvas = d3.select('.canvas');

    // console.log(d3.csv("/assets/data/data1.csv"))

    d3.csv("/assets/data/data1.csv")
      .then((data) => {
        console.log(data)
        // 이런 식으로 추가를 해줍니다. 다음 예제에서 사용해봅니다.
        // const svg = canvas.append('svg')
        // .attr('height', 2000)
        // .attr('width', 2000);

        data.forEach(e => {
          console.log(e['출판연도'])
        })
      })
      .catch(err => console.log(err))

    /**
     * 파일 불러오기가 깨진다면 메모장 저장을 이용하요 UTF-8으로 인코딩 저장
     */
    // console.log(d3.csv("/assets/data/sample2.csv"))


    // d3.csv("/assets/data/sample2.csv")
    // .then((data) => {
    //   console.log(data)
    //   // 이런 식으로 추가를 해줍니다. 다음 예제에서 사용해봅니다.
    //   // const svg = canvas.append('svg')
    //   // .attr('height', 2000)
    //   // .attr('width', 2000);

    //   data.forEach(e=>{
    //     console.log(e['출판연도'])
    //   })
    // })
    // .catch(err => console.log(err))

    // d3.csv("/assets/data/data2.csv")
    // .then((data) => {
    //   console.log( data );
    //   // 이런 식으로 추가를 해줍니다. 다음 예제에서 사용해봅니다.
    //   const svg = canvas.append('svg')
    //   .attr('height', 2000)
    //   .attr('width', 2000);

    //   data.forEach(e=>{
    //     svg.append('circle')
    //     .attr('cx', (e['위도'] as any - 33.1) * 1000 + 10)
    //     .attr('cy', (e['경도'] as any - 126) * 300 + 10)
    //     .attr('r',5)
    //     .attr('fill', 'hotpink')
    //   })
    // })
    // .catch(err => console.log(err))

    /** json 형식 불러오기 */
    d3.json("https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json")
      .then((data) => {
        console.log(data)
        // 이런 식으로 추가를 해줍니다. 다음 예제에서 사용해봅니다.
        // const svg = canvas.append('svg')
        // .attr('height', 2000)
        // .attr('width', 2000);
        // data.forEach(res=>{
        //   console.log(res.array.['총인구'])
        // })
      })
      .catch(err => console.log(err))

    /** xml 형식 불러오기 */
    d3.xml("/assets/data/data5.xml")
      .then((data) => {
        console.log('성공!!');
        console.log(data); // 그냥 열면 깨지고 메모장으로 utf-8로 바꿔 저장해주세요.
        console.log(data.documentElement);
        console.log(data.documentElement.getElementsByTagName('row')); //DOM 탐색처럼 사용
        new Array(data.documentElement.getElementsByTagName('row')).forEach(e => {
          console.log(e)
          console.log(e[0].children) // 보기좋기 위해 data에 enter를 넣었기 때문에 text가 들어가 있습니다.
        });


        // console.log(data[''])
      })
      .catch(err => console.log(err))

  }
}
