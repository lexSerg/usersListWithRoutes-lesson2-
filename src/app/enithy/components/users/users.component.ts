import { Component, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersList : User[]  = [];
  constructor(private actvatedRoute : ActivatedRoute) {
    this.actvatedRoute.data.subscribe(value => {
      console.log(value.usersdata);
      this.usersList = value.usersdata
    })
  }
}
