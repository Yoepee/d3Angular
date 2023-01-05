import { Component, OnInit } from '@angular/core';
import {mergeMap, map, concatMap} from 'rxjs/operators';
import { of, interval, from, take, skip, fromEvent, tap } from 'rxjs';

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
    // const letters = of('상급복숭아','중급복숭아','하급복숭아');
    // const result = letters.pipe(
    //   // mergeMap(x => interval(1000).pipe(map(i => x+`통조림${i} 세트`)))
    // );
    // result.subscribe(x => console.log(x));
    const array = [1,2,3];
    const result = from(array).subscribe(
      next => console.log('from next', next),
      err => console.log('err', err),
      () => console.log('complete')
    );
    const result2 = of(...array).subscribe(
      next => console.log('of next', next),
      err => console.log('err', err),
      () => console.log('complete')
    );

    // const result3 = interval(1000).pipe(take(4), skip(1))
    // .subscribe(x=> console.log(x));
    
    const btn = document.getElementsByClassName('btn')[0];
    const clicks = fromEvent(btn,'click');
    // const result4 = clicks.pipe(concatMap(e=>interval(1000).pipe(take(4))));
    // result4.subscribe(x=> console.log(x));
    const result5 = clicks.pipe(tap(_ =>console.log(_)));
    result5.subscribe(x=> console.log(x));
  }
}
