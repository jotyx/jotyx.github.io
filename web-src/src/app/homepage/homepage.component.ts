import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  slide1Style: any;
  slide2Style: any;
  activeWallpaper = 1;

  constructor() { }

  ngOnInit() {
  }

  redirectToCydiaRepo() {
    window.location.href = 'https://jotyx.github.io/repo/';
  }

  redirectToGithub() {
    window.location.href = 'https://github.com/jotyx?tab=repositories';
  }

  redirectToNetwEx() {
    window.location.href = 'https://jotyx.github.io/netwex/index.html';
  }

  nextScreen() {
    this.slide1Style = {
      transition: 'top 0.5s linear',
      top: '-100%'
    };
    this.slide2Style = {
      transition: 'bottom 0.5s linear',
      bottom: '0',
    };
    this.activeWallpaper = 2;
  }

  previousScreen() {
    this.slide1Style = {
      transition: 'top 0.5s linear',
      top: '0'
    };
    this.slide2Style = {
      transition: 'bottom 0.5s linear',
      bottom: '-100%',
    };
    this.activeWallpaper = 1;
  }

}
