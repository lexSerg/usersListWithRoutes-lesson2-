import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './enithy/components/comments/comments.component';
import { HomeComponent } from './enithy/components/home/home.component';

import { PostsComponent } from './enithy/components/posts/posts.component';
import { UsersComponent } from './enithy/components/users/users.component';
import { CommentResolveService } from './enithy/services/comment-resolve.service';
import { PostResolveService } from './enithy/services/post-resolve.service';
import { UserResolveService } from './enithy/services/user-resolve.service';

const routes: Routes = [
  {path: 'users', component : UsersComponent, resolve : {usersdata : UserResolveService}},
  {path: 'posts', component : PostsComponent, resolve : {postsdata : PostResolveService}},
  {path: 'comments', component : CommentsComponent, resolve : {commentsdata : CommentResolveService} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
