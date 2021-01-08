import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './enithy/components/users/users.component';
import { UserResolveService } from './enithy/services/user-resolve.service';

const routes: Routes = [
  {path: 'users', component : UsersComponent, resolve : {usersdata : UserResolveService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
