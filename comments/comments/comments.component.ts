import { Component, Inject, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor( @Inject(CommentService) public commentService:CommentService) { }

  ngOnInit(): void {

    //This is like dispatching an action
    this.commentService.getComments();

  }

}
