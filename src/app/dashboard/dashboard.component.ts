import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isOpen = true;
  menuItems = [
    { icon: 'fa-home', text: 'Home' },
    { icon: 'fa-users', text: 'Users' },
    { icon: 'fa-envelope', text: 'Messages' },
    { icon: 'fa-cog', text: 'Settings' }
  ];

}
