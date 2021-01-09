import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent  {
  @Input()
  user : User;
  postToggle: boolean = false;
  btnTitle: string = 'Show user posts';
  allUserPosts : Post[];
  userPosts : Post[];
  constructor(private userService : UsersService) { 
    this.userService.getPosts().subscribe(value => {
      this.allUserPosts = value;
    })
  } 
  showUserComments() {
    this.postToggle = !this.postToggle;
    this.userPosts = this.allUserPosts.filter(iter => iter.userId === this.user.id);
    !this.postToggle? this.btnTitle = 'Show user posts' : this.btnTitle = 'Hide user posts';
    
  }
}
