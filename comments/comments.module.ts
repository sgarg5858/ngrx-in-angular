import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { COMMENTS_FEATURE_KEY, COMMENT_REDUCERS } from './+state/comments/comments.reducer';
import { CommentsFacade } from './+state/comments/comments.facade';
import {EffectsModule} from '@ngrx/effects'
import { CommentEffectService } from './+state/comments/comments.effects';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  providers:[CommentsFacade],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:CommentsComponent
      }
    ]),
    StoreModule.forFeature(COMMENTS_FEATURE_KEY,COMMENT_REDUCERS),
    EffectsModule.forFeature([CommentEffectService])
  ]
})
export class CommentsModule { }
