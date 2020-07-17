import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http:HttpClient) { }

  getUserLogin(){
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  getUserDashboard(){
    return this.http.get('https://randomuser.me/api/?results=100');
  }

  getUserUsuarios(){
    return this.http.get('https://randomuser.me/api/?results=300');
  }
}
