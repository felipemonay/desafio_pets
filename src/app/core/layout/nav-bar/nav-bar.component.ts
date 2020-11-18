import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']

  
})
export class NavBarComponent {

  public isMenuCollapsed = true;

  constructor(private router: Router) { }
}
