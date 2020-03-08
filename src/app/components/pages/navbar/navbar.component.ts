import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// Variables
public envName = environment.name;
public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}