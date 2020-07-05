import { Component, OnInit  } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jg-app';
  ngOnInit(): any {
    AOS.init({
      startEvent: 'DOMContentLoaded',
    });
  }
}