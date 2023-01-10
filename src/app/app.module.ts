import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineComponent } from './line/line.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LectureComponent } from './lecture/lecture.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { PoprealComponent } from './popreal/popreal.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    RxjsComponent,
    LectureComponent,
    RealtimeComponent,
    PoprealComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
