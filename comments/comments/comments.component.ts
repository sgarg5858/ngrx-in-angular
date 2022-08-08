import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { CommentsFacade } from '../+state/comments/comments.facade';
import { Comment } from '../+state/comments/comments.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {


  @Input() comments:Comment[]=[];
  ngOnInit(): void {

    //This is like dispatching an action

  }

}
