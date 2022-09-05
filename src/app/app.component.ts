import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'UserManagement';
  isAuthenticated$;
  constructor(private authService :AuthService) {
    
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }
}
