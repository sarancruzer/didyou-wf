import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  loginFunc(){
    console.log("login func");
    this.router.navigate(['/dashboard']);
  }

  signupFunc(){
    console.log("login func");
    this.router.navigate(['/userRegister']);
  }

  forgotPasswordFunc(){
    console.log("login func");
    this.router.navigate(['/forgotPassword']);
  }
  

  

}
