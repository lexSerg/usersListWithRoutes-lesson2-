import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService{

  constructor(private userService : UsersService) { }
  resolve() : Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.userService.getPosts()
  }
}
