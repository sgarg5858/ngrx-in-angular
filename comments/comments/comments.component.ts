import { Component, Inject, OnInit } from '@angular/core';
import { CommentsFacade } from '../+state/comments/comments.facade';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor( @Inject(CommentsFacade) public commentService:CommentsFacade) { }

  ngOnInit(): void {

    //This is like dispatching an action
    this.commentService.getComments();

  }

}
