import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [trigger('fadeInOut', [  state('void', style({    opacity: 0  })),  transition('void <=> *', animate(3000)),])],
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

}
