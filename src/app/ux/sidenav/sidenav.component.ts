import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  username;
  constructor(private authService: AuthService) { 
    this.username = this.authService.getUserName();
  }

  logout() {
    this.authService.logout();
  }
  

  ngOnInit(): void {
  }

}
