import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, state, style} from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import { timer } from 'rxjs/observable/timer';
import { WaitService } from './shared/messages/wait.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('wait-visibility',[
      state('hidden', style({
        opacity: 0,
        height: 0,
        width: 0
      })),
      state('visible', style({
        opacity: 1,
        height: '200px',
        width: '300px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ] 
})

export class AppComponent  implements OnInit{
  title = 'push-notification';
  visible: boolean = false
  waitVisibility: string = 'hidden' 
  
  constructor(private waitService: WaitService) {

  }

  ngOnInit(): void {
    this.waitService.notifier
    .do
    (visible => {
      this.visible = visible
      this.waitVisibility = visible ? 'visible' :  'hidden'
    })
    //.switchMap(message=>Observable.timer(3000))
    .subscribe()
  }
}
  
