
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFom!: FormGroup;
  error:any;
  isLoading = false;
  passwordType:any;
  showIcon:any;

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginFom = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
    })
  }
  
onLogin(){
  this.isLoading =true;
  const email = this.loginFom.value.email;
  const username = this.loginFom.value.email.slice(0,email.indexOf("@"));
  this.authService.login(username);
  if (this.loginFom.valid) {
    this.router.navigate(['./users'])
  }
  this.isLoading =false;
}

  onChange() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.showIcon = true;
    } else {
      this.passwordType = 'password';
      this.showIcon = false;
    }
  }
}
