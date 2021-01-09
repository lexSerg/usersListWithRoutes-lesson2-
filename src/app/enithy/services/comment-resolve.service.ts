import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from '../../models/Comment'
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<Comment[]>{
  constructor(private userService : UsersService) { }
  resolve() : Observable<Comment[]> | Promise<Comment[]> | Comment[]{
    return this.userService.getComments()
  }
}
