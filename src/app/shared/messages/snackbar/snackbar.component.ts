import { Component, OnInit, Input } from '@angular/core';
import { trigger, animate, transition, state, style} from '@angular/animations';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations:[
    trigger('snack-visibility',[
      state('hidden', style({
        opacity: 0,
        height: 0,
        width: 0,
        bottom: '0px',
        backgroundColor: '#333'
      })),
      state('visible', style({
        opacity: 1,
        height: '50px',
        width: '250px',
        bottom: '40px',
        backgroundColor: '#333'
      })), 
      state('visibleErro', style({
        opacity: 1,
        height: '50px',
        width: '250px',
        bottom: '40px',
        backgroundColor: '#d33724'
      })),       
      state('visibleLarge', style({
        opacity: 1,
        height: '50px',
        width: '500px',
        bottom: '40px',
        backgroundColor: '#333'
      })),    
      state('visibleLargeErro', style({
        opacity: 1,
        height: '50px',
        width: '500px',
        bottom: '40px',
        backgroundColor: '#d33724'
      })),                    
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
      transition('hidden => visibleLarge', animate('500ms 0s ease-in')),
      transition('visibleLarge => hidden', animate('500ms 0s ease-out')),
      transition('hidden => visibleErro', animate('500ms 0s ease-in')),
      transition('visibleErro => hidden', animate('500ms 0s ease-out')),
      transition('hidden => visibleLargeErro', animate('500ms 0s ease-in')),
      transition('visibleLargeErro => hidden', animate('500ms 0s ease-out'))             
    ])
  ]  
})
export class SnackbarComponent implements OnInit {

  message: string = 'Olá'
  snackVisibility: string = 'hidden'

  constructor(private nofificationService: NotificationService) { }

  ngOnInit() {  
    this.nofificationService.notifier
    .do(message => {
      let erro = message.toLowerCase( ).startsWith('erro:') ? 'Erro' : ''
      this.message = message.replace().toLowerCase().replace('erro:', '').toUpperCase()
      this.snackVisibility = message.length > 30 ? 'visibleLarge'+erro : 'visible'+erro
    })
    .switchMap(message=>timer(5000))
    .subscribe(timer=> this.snackVisibility = 'hidden')
  }
}
