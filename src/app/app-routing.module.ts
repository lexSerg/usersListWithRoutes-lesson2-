import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './enithy/components/posts/posts.component';
import { UsersComponent } from './enithy/components/users/users.component';
import { PostResolveService } from './enithy/services/post-resolve.service';
import { UserResolveService } from './enithy/services/user-resolve.service';

const routes: Routes = [
  {path: 'users', component : UsersComponent, resolve : {usersdata : UserResolveService}},
  {path: 'posts', component : PostsComponent, resolve : {postsdata : PostResolveService} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
