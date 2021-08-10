import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public  BASE_URL= 'https://randomuser.me/api/0.8/';

  constructor(private http:HttpClient) { }
  getUserList(pageNumber: any){
    return this.http.get(this.BASE_URL + `?results=`+pageNumber)

  }
}