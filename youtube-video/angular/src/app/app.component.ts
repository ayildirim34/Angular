import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div appExample color="blue"> merhaba </div>,
  <div *appCustomif = "true"> merhaba </div> 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
