import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: any;
  submitted: boolean = false;
  userList:any[] = [];
  userval: any;
  constructor(  public formbuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.setUserForm();
  }
  get f2() {
    return this.userForm.controls;
  }
  setUserForm() {
    this.userForm = this.formbuilder.group({
      title: ['', Validators.required],
      first: ['', Validators.required],
      last: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
    })
  }
  submitUser(){
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }
    this.userval = this.userForm.controls;
    if(this.userForm.invalid === false){
     this.userList.push({
      "user": {
      "gender": this.userval.gender.value,
      "name": {
          "title": this.userval.title.value,
          "first": this.userval.first.value,
          "last": this.userval.last.value
      },
      "location": {
          "street": "5094 15th st",
          "city": "delisle",
          "state": "yukon",
          "zip": 19068
      },
      "email": this.userval.email.value,
      "username": this.userval.username.value,
      "password": "123",
      "salt": "mEGXXN4f",
      "md5": "8a135166eedee360f2ccb3690d2f8391",
      "sha1": "ebaad32e5d81a03635f5117907a474ee6c876c83",
      "sha256": "8a270ed6979d5b89cb6ba0a26f3249b3b37a29b4c85d8afef26063eb9214a8f3",
      "registered": 1026881285,
      "dob": this.userval.dob.value,
      "phone": this.userval.phone.value,
      "cell": "351-835-8869",
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/82.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
      }
    }
  }
    )
    }
    console.log(this.userList);
    localStorage.setItem('user',JSON.stringify(this.userList))
    this.router.navigateByUrl('/home')
  }
}
