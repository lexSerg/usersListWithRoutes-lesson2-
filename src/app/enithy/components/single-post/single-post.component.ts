import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { Post } from 'src/app/models/Post';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent{
  @Input()
  post: Post;
  comment : Comment;
  commentToggle: boolean = false;
  btnTitle  = 'Show post comments'
  allPostComments : Comment[];
  postComments : Comment[];
  constructor(private userService : UsersService) { 
    this.userService.getComments().subscribe(value => {
      this.allPostComments = value;
    })
  } 
  showPostComments() {
    this.commentToggle = !this.commentToggle;
    this.postComments = this.allPostComments.filter(iter => iter.postId === this.post.id);
    console.log(this.postComments);
    !this.commentToggle? this.btnTitle = 'Show post comments' : this.btnTitle = 'Hide post comments';
  }
}
