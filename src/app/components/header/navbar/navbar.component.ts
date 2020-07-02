import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
   private route: Router,
   private viewportScroller: ViewportScroller
  ) { }
  ngOnInit(): void { 
      
  }
  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}
}