import { ApiService } from './../../core/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
submitted: any;
  submtedValue: any;
  validMessage: boolean = false;
  // submitted: boolean;
  constructor(  public formbuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.setLoginForm();
  }
  get f2() {
    return this.loginForm.controls;
  }
  setLoginForm() {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  login(){
  this.submitted =true;
  this.submtedValue = this.loginForm.controls;
  console.log(this.submtedValue.username.value);
  console.log(this.submtedValue.password.value);
  if(this.loginForm.invalid){
    return;
  }
  if(this.submtedValue.username.value == 'admin' && this.submtedValue.password.value == 'password'){
    localStorage.setItem('loginToken', 'logged')
    this.validMessage =false;
  this.router.navigateByUrl('/home')

}
  else{
    this.validMessage =true;
    console.log("hello")
  }
  }

}