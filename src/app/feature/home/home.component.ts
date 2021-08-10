import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageNumber:any =10;
  userList: any[] = [];
  currentUser: any;
  first: any;
  userdata:any[] = [];

  constructor(private service:ApiService) { 
    var list = localStorage.getItem('user');
    this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    this.currentUser.forEach((element:any) => {
      console.log(element)
      this.userList.push(element);
      console.log(this.userList)
      this.userdata.push(element)
    });
  
  }

  ngOnInit(): void {
    this.getUsers();
  }
  filteruser(){
  console.log(this.first)
  if(this.first){
    this.userList = this.userdata;
  var data = this.userList.filter(item=> item.user.name.first == this.first);
  this.userList = data;
  console.log(this.userList)
  }
  else{
    this.userList = this.userdata;
  }
  }
  getUsers(){
    console.log(this.pageNumber)
  this.service.getUserList(this.pageNumber).subscribe((data: any) =>{
    console.log(data)
    data.results.forEach((element: any) => {
      this.userList.push(element)
      this.userdata.push(element)
    });
    }
  )
  }
  changebyPageNumber(){
    this.getUsers();
  }
}
