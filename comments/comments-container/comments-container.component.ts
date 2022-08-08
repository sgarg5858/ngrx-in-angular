import { Component, OnInit } from '@angular/core';
import { CommentsFacade } from '../+state/comments/comments.facade';

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.scss']
})
export class CommentsContainerComponent implements OnInit {

  constructor(public commentFacade:CommentsFacade) { }

  ngOnInit(): void {
    this.commentFacade.getComments();
  }

  filterCommentsBy(text:string)
  {
    this.commentFacade.filterCommentsBy(text);
  }
}
