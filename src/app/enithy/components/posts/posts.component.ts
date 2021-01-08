import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { SinglePostComponent } from '../single-post/single-post.component'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{
  postsList: Post[] = [];
  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      console.log(value.postsdata);
      this.postsList = value.postsdata;
    })
   }
}
