import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
declare var $ :any;
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
    var position = $(window).scrollTop();
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	  if ($('nav').width() <= 992 ){
	  if(scroll > position) {
		  $('nav').stop(false,false).animate({top:'-70px'},"fast");
		  console.log('scrollDown');
	  } else {
		  $('nav').stop(false,false).animate({top:'0'},"fast");
		  console.log('scrollUp');
	}
  }
  position = scroll;
  });


    /// Disparition du menu après clic
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggler:visible').click();
        });
        $('.dropdown-menu  a').click(function(){
          $('.dropdown-menu:visible').click();
          $('.navbar-toggler:visible').click();
        });
        $(document).click(function (e) {
          $('.navbar-collapse').collapse('hide');
        });
  }
  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}
}