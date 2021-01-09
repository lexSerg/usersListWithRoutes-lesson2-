import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent{
  commentsList : Comment[] = [];
  constructor( private activatedRoute : ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      console.log(value.commentsdata);
      this.commentsList = value.commentsdata;
    })
   }

}
