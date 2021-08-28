import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  
  images = [
    {title: 'First Slide', desc: 'First Slide Description', src: "https://picsum.photos/id/102/900/500"},
    {title: 'Second Slide', desc: 'Second Slide Description', src: "https://picsum.photos/id/1020/900/500"},
    {title: 'Third Slide', desc: 'Third Slide Description', src: "https://picsum.photos/id/1024/900/500"}
  ];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
