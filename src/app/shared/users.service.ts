import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users.models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL = environment.baseURL
  constructor( private http:HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseURL+"api/users?page=2");
  }

  AddUser(data:any): Observable<User>{
    return this.http.post<User>(this.baseURL+"api/users",data);
  }

  DeleteUser(id:any){
    return this.http.delete<User>(this.baseURL+"api/users/"+id)
  }
}
