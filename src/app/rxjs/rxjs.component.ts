import { Component, OnInit } from '@angular/core';
import {mergeMap, map, concatMap, mapTo, scan, startWith, takeUntil, switchMap, debounceTime, throttleTime} from 'rxjs/operators';
import { of, interval, from, take, skip, fromEvent, tap, pluck } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  constructor(){}
  ngOnInit(){
    this.test();
  }

  test(){
    /**
     * 각 소스의 값을 Observable에 투영하여 출력 Observable에 반영 (세트로 묶는 기능?)
     */
    // const letters = of('상급복숭아','중급복숭아','하급복숭아');
    // const result = letters.pipe(
    //   // mergeMap(x => interval(1000).pipe(map(i => x+`통조림${i} 세트`)))
    // );
    // result.subscribe(x => console.log(x));
    /**
     * from은 배열을 observable한 값으로 변경
     */
    const array = [1,2,3];
    const result = from(array).subscribe(
      next => console.log('from next', next),
      err => console.log('err', err),
      () => console.log('complete')
    );
    /**
     * of는 나열된 값을 observable한 값으로 변경
     * startWith는 최초에 흘려보내는 값을 지정
     */
    const result2 = of(...array)
    .pipe(startWith('first', 'second', 'third'))
    .subscribe(
      next => console.log('of next', next),
      err => console.log('err', err),
      () => console.log('complete')
    );

    /**
     * interval은 일정시간마다 값을 표시
     * skip은 값을 스킵하는 역할
     * take는 값을 흘려보내는 횟수를 결정
     */
    // const result3 = interval(1000).pipe(take(4), skip(1))
    // .subscribe(x=> console.log(x));
    
    /**
     * concatMap은 스트림의 순서를 지킨채로 Observable한 값을 직렬화
     */
    const btn = document.getElementsByClassName('btn')[0];
    const clicks = fromEvent(btn,'click');
    // const result4 = clicks.pipe(concatMap(e=>interval(1000).pipe(take(4))));
    // result4.subscribe(x=> console.log(x));
    // const result5 = clicks.pipe(tap(_ =>console.log(_)));
    // result5.subscribe(x=> console.log(x));
    const positions = clicks.pipe(map(e=> e.target));
    positions.subscribe(res => console.log(res))
    /**
     * pluck 은 속성으로 접근
     */
    const positions2 = clicks.pipe(pluck('target','textContent'));
    positions2.subscribe(res => console.log(res))

    /**
     * scan은 seed값을 넣고 이전의 값을 이용하여 변경된 값을 내뱉는 reduce같은 기능
     */
    const ones = clicks.pipe(mapTo('1'));
    const seed = '1000';
    const count = ones.pipe(scan((acc, one)=> acc + one, seed))
    count.subscribe(res => console.log(res))
    
    /**
     * takeUntil 값이 흘러가면 처리를 중단 ( 특정 조건을 이용하여 스트림 종료 )
     */
    const result5 = interval(1000).pipe(
      // tap(x => {
      //   console.log(x+1)
      // return x+10}),
      takeUntil(clicks),
    )
    .subscribe(x=> console.log(x));

    /**
     * switchMap은 Observable을 해결하고 결합하는 기능
     * debounceTime은 일정시간 딜레이를 만드는 기능
     * throttleTime은 규칙적인 딜레이 생성?
     */
    // const result6 = clicks.pipe(debounceTime(3000),switchMap(e=> interval(1000)),throttleTime(5000));
    // result6.subscribe(x=> console.log(x));

  }
}
