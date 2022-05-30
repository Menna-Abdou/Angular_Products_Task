import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IExUsers } from '../interfaces/iexuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  current?: IExUsers;
  exUsers?: IExUsers[];
  constructor(private http: HttpClient, private route: Router) { }

  fetchUsers(){
   return this.http.get<IExUsers[]>('https://fakestoreapi.com/users')
  }


  getUsers(id?: number){
    this.http.get<IExUsers[]>('https://fakestoreapi.com/users').subscribe(users=>{
    this.exUsers = users;
  })
  return  this.exUsers;
  }

  getCurrentUser(){
    return this.current;
  }

  setCurrentUser(userx: IExUsers){
    this.current = userx;
  }
}
