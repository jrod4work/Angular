import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEST';
  obj = {
    city: 'Boulder',
    AboutMe: 'I like organizing ma house'
  }
  arr = ["testing arrays",  "testing arrays 1"]

}
