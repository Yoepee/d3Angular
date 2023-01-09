import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { curveBasis } from 'd3';

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
  // constructor() { }
  // ngOnInit() {
  //   const canvas = d3.select('.canvas');

  //   // console.log(d3.csv("/assets/data/data1.csv"))

  //   d3.csv("/assets/data/data1.csv")
  //     .then((data) => {
  //       console.log(data)
  //       // 이런 식으로 추가를 해줍니다. 다음 예제에서 사용해봅니다.
  //       // const svg = canvas.append('svg')
  //       // .attr('height', 2000)
  //       // .attr('width', 2000);

  //       data.forEach(e => {
  //         console.log(e['출판연도'])
  //       })
  //     })
  //     .catch(err => console.log(err))

  //   /**
  //    * 파일 불러오기가 깨진다면 메모장 저장을 이용하요 UTF-8으로 인코딩 저장
  //    */
  //   // console.log(d3.csv("/assets/data/sample2.csv"))


  //   // d3.csv("/assets/data/sample2.csv")
  //   // .then((data) => {
  //   //   console.log(data)
  //   //   // 이런 식으로 추가를 해줍니다. 다음 예제에서 사용해봅니다.
  //   //   // const svg = canvas.append('svg')
  //   //   // .attr('height', 2000)
  //   //   // .attr('width', 2000);

  //   //   data.forEach(e=>{
  //   //     console.log(e['출판연도'])
  //   //   })
  //   // })
  //   // .catch(err => console.log(err))

  //   // d3.csv("/assets/data/data2.csv")
  //   // .then((data) => {
  //   //   console.log( data );
  //   //   // 이런 식으로 추가를 해줍니다. 다음 예제에서 사용해봅니다.
  //   //   const svg = canvas.append('svg')
  //   //   .attr('height', 2000)
  //   //   .attr('width', 2000);

  //   //   data.forEach(e=>{
  //   //     svg.append('circle')
  //   //     .attr('cx', (e['위도'] as any - 33.1) * 1000 + 10)
  //   //     .attr('cy', (e['경도'] as any - 126) * 300 + 10)
  //   //     .attr('r',5)
  //   //     .attr('fill', 'hotpink')
  //   //   })
  //   // })
  //   // .catch(err => console.log(err))

  //   /** json 형식 불러오기 */
  //   d3.json("https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json")
  //     .then((data) => {
  //       console.log(data)
  //       // 이런 식으로 추가를 해줍니다. 다음 예제에서 사용해봅니다.
  //       // const svg = canvas.append('svg')
  //       // .attr('height', 2000)
  //       // .attr('width', 2000);
  //       // data.forEach(res=>{
  //       //   console.log(res.array.['총인구'])
  //       // })
  //     })
  //     .catch(err => console.log(err))

  //   /** xml 형식 불러오기 */
  //   d3.xml("/assets/data/data5.xml")
  //     .then((data) => {
  //       console.log('성공!!');
  //       console.log(data); // 그냥 열면 깨지고 메모장으로 utf-8로 바꿔 저장해주세요.
  //       console.log(data.documentElement);
  //       console.log(data.documentElement.getElementsByTagName('row')); //DOM 탐색처럼 사용
  //       new Array(data.documentElement.getElementsByTagName('row')).forEach(e => {
  //         console.log(e)
  //         console.log(e[0].children) // 보기좋기 위해 data에 enter를 넣었기 때문에 text가 들어가 있습니다.
  //       });


  //       // console.log(data[''])
  //     })
  //     .catch(err => console.log(err))
  // }

  /**
   * 데이터 컨트롤
   * 데이터가 화면에 표시될 때 데이터 정규화 작업이 필요
   */
  // constructor() { }
  // ngOnInit() {
  //   /**
  //   * scalePoint 간격에 맞게 값을 변경해줍니다 (갯수에 따른 간격)
  //   * range = 전체 width
  //   * domain = 전체 count를 range 값으로 동일하게 분할하여 분배
  //   * 
  //   * padding 여유 간격을 추가
  //   */
  //   // const f1 = d3.scalePoint()
  //   // .range([0,100])
  //   // .domain(['10', '12','20','30','40'] as any)
  //   // console.log(f1('12'))

  //   // const f2 = d3.scalePoint()
  //   // .range([0,100])
  //   // .domain(['a','b','c','d'] as any)
  //   // console.log(f2('d'))

  //   // const f3 = d3.scalePoint()
  //   // .range([0,100])
  //   // .domain(['a','b','c','d'] as any).padding(0.3)
  //   // console.log(f3('d'))

  //   /**
  //    * scaleLinear 비율에 맞게 값을 변경 (비율에 따른 간격)
  //    * domaine = 변환 전 값
  //    * range = 변환 후 값의 범위
  //    */
  //   // const f1 = d3.scaleLinear()
  //   //   .range([0, 100])
  //   //   .domain([0, 500])
  //   // console.log(f1(1000))

  //   // const f2 = d3.scaleLinear()
  //   //   .range(['orange','white','green'] as any)
  //   //   .domain([-1,0 ,1])
  //   // console.log(f2(-0.5))

  //   // const f3 = d3.scaleLinear()
  //   // .range([200,500])
  //   // .domain([20000000, 50000000])
  //   // console.log(f3(25000000))

  //   /**
  //    * scaleBand 숫자가 아닌 키 값으로 찾을 수 있게 해줌
  //    * 
  //    */
  //   // const f = d3.scaleBand()
  //   // .domain(['one', 'two', 'three', 'four'])
  //   // .range([0,100])

  //   // console.log(f('one'))
  //   // console.log(f('two'))
  //   // console.log(f('three'))
  //   // console.log(f('four'))

  //   // console.log(f.bandwidth())

  //   /**
  //    * min = 최솟값
  //    * max = 최댓값
  //    * extent = [최솟값, 최댓값]
  //    * mean = 평균값
  //    */
  //   // const data1 = [10, 20, 30]
  //   // const data2 = [{
  //   //         age:10,
  //   //         power:3000
  //   //     },{
  //   //         age:20,
  //   //         power:2000
  //   //     },{
  //   //         age:30,
  //   //         power:1000
  //   //     }]

  //   //     const min1 = d3.min(data1)
  //   //     const min2 = d3.min(data2, d => d.age)
  //   //     console.log(min1, min2)

  //   //     const max1 = d3.max(data1)
  //   //     const max2 = d3.max(data2, d => d.power)
  //   //     console.log(max1, max2)

  //   //     const extent1 = d3.extent(data1) // return [min, max]
  //   //     const extent2 = d3.extent(data2, d => d.power) // return [min, max]
  //   //     console.log(extent1, extent2)

  //   //     let [a, b] = d3.extent(data1)
  //   //     console.log(a, b)

  //   //     const mean = d3.mean(data1)
  //   //     console.log(mean)
  // }

  /** 
   * 실전 그래프 그리기 
   * 막대 그래프
  */
  // constructor() { }
  // ngOnInit() {
  //   const canvas = d3.select('.canvas')

  //   const width = 800;
  //   const height = 800;
  //   const svg = canvas.append('svg')
  //       .attr('height', height)
  //       .attr('width', width);

  //   let [mt, mb, mr, ml] = [50, 50, 50, 50];

  //   const graphWidth = width - ml - mr;
  //   const graphHeight = height - mt - mb;

  //   const graph = svg. append('g')
  //      .attr('width', graphWidth)
  //      .attr('height', graphHeight)
  //      .attr('transform', `translate(${ml},${mt})`)

  //      const xAxisG = graph.append('g')
  //                           .attr('transform', `translate(0, ${graphHeight})`)
  //       const yAxisG = graph.append('g')

  //   d3.json("/assets/data/data4.json")
  //     .then((data:any) => {
  //       data.splice(0,1);
  //       console.log(data)
  //       // 이런 식으로 추가를 해줍니다. 다음 예제에서 사용해봅니다.

  //       console.log(data.map((item:any)=>item['지역이름']))

  //       const x:any = d3.scaleBand()
  //       .domain(data.map((item:any)=>item['지역이름']))
  //       .range([0, graphWidth])
  //       .padding(0.25)

  //       console.log(x('서울'))

  //       const y = d3.scaleLinear()
  //       .range([graphHeight, 0])
  //       .domain([0, (d3.max(data,(item:any)=>item['확진자수'])) as any])

  //       const bars = graph.selectAll('rect')
  //       .data(data)

  //       bars.enter()
  //       .append('rect')
  //       .attr('height', (d:any)=>graphHeight - y(d.확진자수))
  //       .attr('width', x.bandwidth())
  //       .attr('fill', 'hotpink')
  //       .attr('x', (d:any)=> x(d['지역이름']))
  //       .attr('y', (d:any)=> y(d['확진자수']))

  //       // data.forEach((res:any)=>{
  //       //   console.log(res['지역이름'])
  //       // })

  //       bars.enter()
  //       .append('circle')
  //       .attr('width', x.bandwidth())
  //       .attr('fill', 'red')
  //       .attr('cx', (d:any)=> x(d['지역이름'])+15)
  //       .attr('cy', (d:any)=> y(d['확진자수']))
  //       .attr('r', (d:any)=> d.확진자수/50)

  //       bars.enter()
  //       .append('text')
  //       .attr('x', (d:any)=>{ return x(d['지역이름'])})
  //       .attr('y', (d:any)=> y(d['확진자수'])-5)
  //       .text((d:any)=> (d['확진자수']))

  //       /**
  //        * 라인그래프 추가 
  //        */
  //       const line: any = d3.line()
  //       .x((d:any)=>x(d['지역이름']))
  //       .y((d:any)=> y(d['확진자수']))
  //       .curve(d3.curveBasis)

  //       bars.enter()
  //       .append('path')
  //       .attr('fill', 'none')
  //       .attr('stroke', 'blue')
  //       .attr('stroke-width', '2px')
  //       .attr('d', line(data))

  //       const xAxis = d3.axisBottom(x);
  //       const yAxis = d3.axisLeft(y)
  //       .ticks(100);

  //       xAxisG.call(xAxis)
  //       yAxisG.call(yAxis)

  //       xAxisG.selectAll('text')
  //       .attr('fill', 'blue')
  //     })
  //     .catch(err => console.log(err))
  // }

  /**
   * 생성기- 데이터를 입력받아 해당 객체를 그릴수 있는 svg 코드 반환
   * 컴포넌트 
   * 레이아웃
   */
  // constructor() { }
  // ngOnInit() {
  //   // const f = d3.line().x().y().curve() 의 형태로 선언
  //   const canvas = d3.select('.canvas');
  //   const svg = canvas.append('svg')
  //   .attr('height', 2000)
  //   .attr('width', 2000);

  // 라인
  // const data:any = [5,15, 10, 20, 5, 10, 25, 15]
  // const xfunction = (data:any, index:number) => index*10
  // const yfunction = (data:any, index:number) => 100-data

  // const f = d3.line()
  // .x(xfunction)
  // .y(yfunction)
  // .curve(curveBasis)

  // console.log(f(data))

  // svg.append('path')
  // .attr('fill', 'none')
  // .attr('stroke', 'blue')
  // .attr('stroke-width','2px')
  // .attr('d', f(data))

  // area 만들기
  // const f = d3.area().x().y0.y1().curve()
  // const data:any = [5,15, 10, 20, 5, 10, 25, 15]
  // const xfunction = (data:any, index:number) => index*10
  // const y0function = (data:any, index:number) => 100-data
  // const y1function = (data:any, index:number) => 100-data+20 + index*10

  // const f = d3.area()
  // .x(xfunction)
  // .y0(y0function)
  // .y1(y1function)
  // // curveStep으로 선형 라인 생성가능
  // .curve(d3.curveStep)

  // console.log(f(data))

  // svg.append('path')
  // .attr('fill', 'none')
  // .attr('stroke', 'blue')
  // .attr('stroke-width','2px')
  // .attr('d', f(data))

  //arc 만들기
  // const f = d3.arc().innerRadius().outerRadius().startAngle).endAngle();

  // const data:any = [50, 150, 100, 200]
  // const g = svg.append('g')
  //   .attr('transform', 'translate(100,100)');


  // const f:any = d3.arc()
  // .innerRadius(0)
  // .outerRadius(50)
  // // .startAngle(Math.PI * 1)
  // // .endAngle(Math.PI * 1.5)

  // console.log(f(data))

  // const pie = d3.pie() //pie는 레이아웃
  // .sort((a:any,b:any)=> b-a) //내림차순 정렬
  // .value((d:any)=>d) //object일 때, d.value

  // console.log(pie(data))

  // g.selectAll('path')
  // .data(pie(data))
  // .enter()
  // .append('path')
  // .attr('fill', 'pink')
  // .attr('stroke', 'blue')
  // .attr('stroke-width', '2px')
  // // .attr('d', f(data))
  // .attr('d', f)
  // }

  // /** 
  //  * 컴포넌트 브러쉬, 줌
  // */
  // constructor() { }
  // ngOnInit() {
  //   const canvas = d3.select('.canvas')

  //   const width = 800;
  //   const height = 800;
  //   const svg = canvas.append('svg')
  //     .attr('height', height)
  //     .attr('width', width);

  //   let [mt, mb, mr, ml] = [50, 50, 50, 50];

  //   const graphWidth = width - ml - mr;
  //   const graphHeight = height - mt - mb;

  //   // /**
  //   //  * 브러쉬 시작
  //   //  */
  //   // const brush = d3.brush()
  //   //   .on("start brush end", brushed);


  //   //   function brushed({selection} :any) {
  //   //     let value:any = [];
  //   //     if (selection) {
  //   //       const [[x0, y0], [x1, y1]] = selection;
  //   //       /**
  //   //        * 브러쉬 내부 데이터 값에 대한 설정을 위한 옵션?
  //   //        */
  //   //       // value = dot
  //   //       //   .style("stroke", "gray")
  //   //       //   .filter((d:any) => x0 <= x(d.x) && x(d.x) < x1 && y0 <= y(d.y) && y(d.y) < y1)
  //   //       //   .style("stroke", "steelblue")
  //   //       //   .data();
  //   //     } else {
  //   //       // dot.style("stroke", "steelblue");
  //   //     }
  //   //     svg.property("value", value).dispatch("input");
  //   //   }

  //   //   svg.call(brush as any);
  //   // /** 브러쉬 끝 */

  //   const graph = svg.append('g')
  //     .attr('width', graphWidth)
  //     .attr('height', graphHeight)
  //     .attr('transform', `translate(${ml},${mt})`)

  //   const xAxisG = graph.append('g')
  //     .attr('transform', `translate(0, ${graphHeight})`)
  //   const yAxisG = graph.append('g')

  //   d3.json("/assets/data/data4.json")
  //     .then((data: any) => {
  //       data.splice(0, 1);
  //       console.log(data)
  //       // 이런 식으로 추가를 해줍니다. 다음 예제에서 사용해봅니다.

  //       console.log(data.map((item: any) => item['지역이름']))

  //       const x: any = d3.scaleBand()
  //         .domain(data.map((item: any) => item['지역이름']))
  //         .range([0, graphWidth])
  //         .padding(0.25)

  //       console.log(x('서울'))

  //       const y = d3.scaleLinear()
  //         .range([graphHeight, 0])
  //         .domain([0, (d3.max(data, (item: any) => item['확진자수'])) as any])

  //       const bars = graph.selectAll('rect')
  //         .data(data)

  //       bars.enter()
  //         .append('rect')
  //         .attr('height', (d: any) => graphHeight - y(d.확진자수))
  //         .attr('width', x.bandwidth())
  //         .attr('fill', 'hotpink')
  //         .attr('x', (d: any) => x(d['지역이름']))
  //         .attr('y', (d: any) => y(d['확진자수']))

  //       // data.forEach((res:any)=>{
  //       //   console.log(res['지역이름'])
  //       // })

  //       bars.enter()
  //         .append('circle')
  //         .attr('width', x.bandwidth())
  //         .attr('fill', 'red')
  //         .attr('cx', (d: any) => x(d['지역이름']) + 15)
  //         .attr('cy', (d: any) => y(d['확진자수']))
  //         .attr('r', (d: any) => d.확진자수 / 50)

  //       bars.enter()
  //         .append('text')
  //         .attr('x', (d: any) => { return x(d['지역이름']) })
  //         .attr('y', (d: any) => y(d['확진자수']) - 5)
  //         .text((d: any) => (d['확진자수']))

  //       /**
  //        * 라인그래프 추가 
  //        */
  //       const line: any = d3.line()
  //         .x((d: any) => x(d['지역이름']))
  //         .y((d: any) => y(d['확진자수']))
  //         .curve(d3.curveBasis)

  //       bars.enter()
  //         .append('path')
  //         .attr('fill', 'none')
  //         .attr('stroke', 'blue')
  //         .attr('stroke-width', '2px')
  //         .attr('d', line(data))

  //       const xAxis = d3.axisBottom(x);
  //       const yAxis = d3.axisLeft(y)
  //         .ticks(100);

  //       xAxisG.call(xAxis)
  //       yAxisG.call(yAxis)

  //       xAxisG.selectAll('text')
  //         .attr('fill', 'blue')

  //       /**
  //    * 줌 시작
  //    */
  //       const delaunay:any = d3.Delaunay.from(data, (d: any) => x(d[0]), d => y(d[1]));

  //       let transform:any;

  //       const zoom: any = d3.zoom().on("zoom", e => {
  //         graph.attr("transform", (transform = e.transform));
  //         graph.style("stroke-width", 3 / Math.sqrt(transform.k));
  //         bars.attr("r", 3 / Math.sqrt(transform.k));
  //       });

  //       svg
  //         .call(zoom)
  //         .call(zoom.transform, d3.zoomIdentity)
  //         .on("pointermove", event => {
  //           const p = transform.invert(d3.pointer(event));
  //           const i = delaunay.find(...p);
  //           bars.classed("highlighted", (_, j) => i === j);
  //           d3.select(bars.nodes()[i]).raise();
  //         })

  //       /**
  //        * 줌 끝
  //        */
  //     })
  //     .catch(err => console.log(err))
  // }

  // /** 
  //  * 레이아웃 pie 
  //  */
  // constructor() { }
  // ngOnInit() {
  //   const canvas = d3.select('.canvas')

  //   const width = 1000;
  //   const height = 1000;
  //   const svg = canvas.append('svg')
  //     .attr('height', height)
  //     .attr('width', width);

  //   const g = svg.append('g')
  //     .attr('transform', 'translate(100,100)');

  //   const data = [50, 150, 100, 200];

  //   const pie = d3.pie()
  //     .sort((a: any, b: any) => b - a)
  //     .value((d: any) => d)

  //   console.log(pie(data))

  // //   const data = [
  // //     {
  // //         "data": 50,
  // //         "index": 3,
  // //         "value": 50,
  // //         "startAngle": 5.654866776461628,
  // //         "endAngle": 6.283185307179586,
  // //         "padAngle": 0
  // //     },
  // //     {
  // //         "data": 150,
  // //         "index": 1,
  // //         "value": 150,
  // //         "startAngle": 2.5132741228718345,
  // //         "endAngle": 4.39822971502571,
  // //         "padAngle": 0
  // //     },
  // //     {
  // //         "data": 100,
  // //         "index": 2,
  // //         "value": 100,
  // //         "startAngle": 4.39822971502571,
  // //         "endAngle": 5.654866776461628,
  // //         "padAngle": 0
  // //     },
  // //     {
  // //         "data": 200,
  // //         "index": 0,
  // //         "value": 200,
  // //         "startAngle": 0,
  // //         "endAngle": 2.5132741228718345,
  // //         "padAngle": 0
  // //     }
  // // ]

  // const f:any = d3.arc()
  // .innerRadius(0)
  // .outerRadius(50)

  // g.selectAll('path')
  // .data(pie(data))
  // // .data(data)
  // .enter()
  // .append('path')
  // .attr('fill','pink')
  // .attr('stroke', 'blue')
  // .attr('stroke-width','2px')
  // .attr('d', f)

  // // g.selectAll('path')
  // // .data(pie(data))
  // // .enter()
  // // .append('path')
  // // .attr('fill', 'pink')
  // // .attr('stroke', 'blue')
  // // .attr('stroke-width', '2px')
  // // // .attr('d', f(data))
  // // .attr('d', f)
  // }

  // /**
  //  * 레이아웃 히스토그램
  //  * 데이터값을 해당 값에 따른 배열로 만들어주며, 갯수 확인도 가능
  //  */
  // constructor() { }
  // ngOnInit() {
  //   const data = [10, 10, 20, 20, 30, 30, 30, 30, 30, 40, 40, 50, 50, 60, 60, 60, 60, 60, 60, 60];

  //   // 히스토그램
  //   const hist = d3.histogram()
  //   console.log(hist(data))

  //   //새로 나온 버전
  //   const bin = d3.bin()
  //   console.log(bin(data))

  //   for(const i of hist(data)[2]){
  //     console.log(i)
  //   }

  //   console.log(hist(data)[2].length)
  // }

  // /** 
  //  * 레이아웃
  //  * _pack - 계층구조의 그림을 그릴 수 있는 데이터를 생성합니다.
  //  * _hierarchy(stratify) - 계층데이터를 가공합니다
  //  * circle 형태의 그래프
  //  */
  // constructor() { }
  // ngOnInit() {
  //   const data = [
  //     { name: '스타트업파이', parent: '' },

  //     { name: 'Education', parent: '스타트업파이' },
  //     { name: 'Food', parent: '스타트업파이' },
  //     { name: 'SW', parent: '스타트업파이' },
  //     { name: 'Healthcare', parent: '스타트업파이' },
  //     { name: 'E-commerce', parent: '스타트업파이' },

  //     { name: 'a-1', parent: 'Education', size: 3 },
  //     { name: 'b-1', parent: 'Education', size: 7 },
  //     { name: 'c-1', parent: 'Education', size: 11 },
  //     { name: 'd-1', parent: 'Education', size: 5 },
  //     { name: 'e-1', parent: 'Education', size: 3 },
  //     { name: 'f-1', parent: 'Education', size: 5 },

  //     { name: 'a-2', parent: 'Food', size: 5 },
  //     { name: 'b-2', parent: 'Food', size: 4 },
  //     { name: 'c-2', parent: 'Food', size: 7 },
  //     { name: 'd-2', parent: 'Food', size: 9 },

  //     { name: 'a-3', parent: 'SW', size: 2 },
  //     { name: 'b-3', parent: 'SW', size: 10 },
  //     { name: 'c-3', parent: 'SW', size: 11 },
  //     { name: 'd-3', parent: 'SW', size: 13 },
  //     { name: 'e-3', parent: 'SW', size: 4 },
  //     { name: 'f-3', parent: 'SW', size: 8 },

  //     { name: 'a-4', parent: 'Healthcare', size: 3 },
  //     { name: 'b-4', parent: 'Healthcare', size: 3 },
  //     { name: 'c-4', parent: 'Healthcare', size: 4 },
  //     { name: 'd-4', parent: 'Healthcare', size: 3 },
  //     { name: 'e-4', parent: 'Healthcare', size: 4 },

  //     { name: 'a-5', parent: 'E-commerce', size: 3 },
  //     { name: 'b-5', parent: 'E-commerce', size: 7 },
  //     { name: 'c-5', parent: 'E-commerce', size: 5 },
  //     { name: 'd-5', parent: 'E-commerce', size: 5 },
  //   ];

  //   const canvas = d3.select('.canvas')
  //   const width = 1500;
  //   const height = 1500;
  //   const svg = canvas.append('svg')
  //     .attr('height', height)
  //     .attr('width', width);


  //   const [mt, mr, mb, ml] = [100, 100, 100, 100]
  //   const margin = { top: 100, right: 100, bottom: 100, left: 100 }

  //   const g = svg.append('g')
  //     .attr('transform', `translate(${margin.left}, ${margin.top})`);

  //   const stratify = d3.stratify()
  //     .id((d: any) => d.name)
  //     .parentId((d: any) => d.parent)

  //   console.log(stratify(data))

  //   const Node = stratify(data).sum((d: any) => d.size) // value값을 size 기반으로 생성
  //   console.log(Node)

  //   const pack = d3.pack()
  //     .size([1000, 1000])
  //     .padding(10);

  //   console.log(pack(Node))
  //   console.log(pack(Node).descendants())

  //   const packData = pack(Node).descendants();

  //   const nodes = g.selectAll('g')
  //     .data(packData)
  //     .enter()
  //     .append('g')
  //     .attr('transform', (d: any) => `translate(${d.x}, ${d.y})`)

  //   const color = ['pink', 'gray', 'skyblue']

  //   nodes.append('circle')
  //     .attr('r', (d: any) => d.r)
  //     .attr('stroke', 'black')
  //     .attr('stroke-width', '2px')
  //     .attr('fill', (d:any) => color[d.depth])


  //   nodes.filter((d: any) => !d.children)
  //     .append('text')
  //     .attr('fill', 'black')
  //     .text((d: any) => d.data.name)
  //     .style('font-size', (d: any) => {
  //       if (d.value <= 5)
  //         return 16
  //       else
  //         return d.value * 4
  //     })
  //     .style('color', '#222')
  //     .attr('text-anchor', 'middle')
  //     .attr('dy', '10px')
  // }

  // /**
  //  * 트리 그래프
  //  */
  // constructor() { }
  // ngOnInit() {
  //   const data = [
  //     { name: '스타트업파이', parent: '' },

  //     { name: 'Education', parent: '스타트업파이' },
  //     { name: 'Food', parent: '스타트업파이' },
  //     { name: 'SW', parent: '스타트업파이' },
  //     { name: 'Healthcare', parent: '스타트업파이' },
  //     { name: 'E-commerce', parent: '스타트업파이' },

  //     { name: 'a-1', parent: 'Education', size: 3 },
  //     { name: 'b-1', parent: 'Education', size: 7 },
  //     { name: 'c-1', parent: 'Education', size: 11 },
  //     { name: 'd-1', parent: 'Education', size: 5 },
  //     { name: 'e-1', parent: 'Education', size: 3 },
  //     { name: 'f-1', parent: 'Education', size: 5 },

  //     { name: 'a-2', parent: 'Food', size: 5 },
  //     { name: 'b-2', parent: 'Food', size: 4 },
  //     { name: 'c-2', parent: 'Food', size: 7 },
  //     { name: 'd-2', parent: 'Food', size: 9 },

  //     { name: 'a-3', parent: 'SW', size: 2 },
  //     { name: 'b-3', parent: 'SW', size: 10 },
  //     { name: 'c-3', parent: 'SW', size: 11 },
  //     { name: 'd-3', parent: 'SW', size: 13 },
  //     { name: 'e-3', parent: 'SW', size: 4 },
  //     { name: 'f-3', parent: 'SW', size: 8 },

  //     { name: 'a-4', parent: 'Healthcare', size: 3 },
  //     { name: 'b-4', parent: 'Healthcare', size: 3 },
  //     { name: 'c-4', parent: 'Healthcare', size: 4 },
  //     { name: 'd-4', parent: 'Healthcare', size: 3 },
  //     { name: 'e-4', parent: 'Healthcare', size: 4 },

  //     { name: 'a-5', parent: 'E-commerce', size: 3 },
  //     { name: 'b-5', parent: 'E-commerce', size: 7 },
  //     { name: 'c-5', parent: 'E-commerce', size: 5 },
  //     { name: 'd-5', parent: 'E-commerce', size: 5 },
  //   ];

  //   const canvas = d3.select('.canvas')
  //   const width = 5000;
  //   const height = 5000;
  //   const svg = canvas.append('svg')
  //     .attr('height', height)
  //     .attr('width', width);


  //   const [mt, mr, mb, ml] = [100, 100, 100, 100]
  //   const margin = { top: 100, right: 100, bottom: 100, left: 100 }

  //   const g = svg.append('g')
  //     .attr('transform', `translate(${margin.left}, ${margin.top})`);

  //   const stratify = d3.stratify()
  //     .id((d: any) => d.name)
  //     .parentId((d: any) => d.parent)

  //   console.log(stratify(data))

  //   const node = stratify(data).sum((d: any) => d.size) // value값을 size 기반으로 생성
  //   console.log(node)

  //   const tree = d3.tree()
  //     .size([5000, 5000])

  //   console.log(tree(node))
  //   console.log(tree(node).descendants())

  //   const treeData = tree(node).descendants()

  //   const nodes = g.selectAll('g')
  //     .data(treeData)
  //     .enter()
  //     .append('g')
  //     .attr('transform', (d: any) => `translate(${d.x/3}, ${d.y/5})`)

  //   nodes.append('text')
  //   .attr('fill','black')
  //   .attr('text-anchor', 'middle')
  //   .text((d:any)=>d.data.name)

  //   nodes.filter((d:any) => d.children)
  //   .append('rect')
  //   .attr('height', 30)
  //   .attr('width', 120)
  //   .attr('stroke', 'black')
  //   .attr('stroke-width', 2)
  //   .attr('fill', 'none')
  //   .attr('x', -60)
  //   .attr('y', -20)

  //   const links = g.selectAll('.link').data(tree(node).links())

  //   links.enter()
  //   .append('path')
  //   .attr('stroke', 'black')
  //   .attr('stroke-width', 2)
  //   .attr('fill', 'none')
  //   .attr('d', (d3.linkVertical().x((d:any)=>d.x/3).y((d:any)=>d.y/5)) as any)

  // }

  /** 
   * 지리데이터
   * mouseover
   * mouseout
   */
  constructor() { }
  ngOnInit() {
    const canvas = d3.select('.canvas');

    const width = 5000;
    const height = 5000;
    const svg = canvas.append('svg')
                      .attr('width', width)
                      .attr('height', height)

    const initialScale = 5500;
    const initialX =  -11900;
    const initialY = 4050;

    const projection = d3.geoMercator()
    .scale(initialScale)
    .translate([initialX, initialY])

    const g = svg.append('g')

    d3.json("/assets/geo/korea.json")
    .then((json:any)=>{
      console.log(json)
      // console.log(json.features[0].geometry.coordinates[0][1][1])
      g.selectAll('path')
       .data(json.features)
       .enter()
       .append('path')
       .attr('d', d3.geoPath().projection(projection) as any)
       .attr('fill', '#aaa')
       .attr('stroke', 'white')
       .attr('stroke-width', 1)
       .on('mouseover',function(){d3.select(this).attr("fill","red");})
       .on("mouseout",function(){d3.select(this).attr("fill","#aaa");})
      //  .attr('class', 'countries')

      g.selectAll('text')
            .data(json.features)
            .enter()
            .append('text')
            .attr('transform', (d:any)=>{
              let locate = d3.geoPath().projection(projection).centroid(d);
              //centroid = 각각의 경로의 중심좌표
              // console.log(locate)
              return `translate(${locate[0]}, ${locate[1]})`
            })
            .text((d:any)=>d.properties.name)
            // .text((d:any)=>d.properties.adm_nm)
            .attr('text-anchor', 'middle')
            .attr('fill', 'orange')
    })
  }
}
