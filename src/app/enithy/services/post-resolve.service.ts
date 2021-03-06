import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]>{
  constructor(private userService : UsersService) { }
  resolve() : Observable<Post[]>  | Promise<Post[]> | Post[] {
    return this.userService.getPosts()
  }
}
