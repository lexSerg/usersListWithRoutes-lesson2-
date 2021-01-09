import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { 
  }
  getUsers() : Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts/')
  }
  getComments() : Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments/')
  }
}
