import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { commentReducer, COMMENTS_FEATURE_KEY } from './+state/comments/comments.reducer';
import { CommentsFacade } from './+state/comments/comments.facade';
import {EffectsModule} from '@ngrx/effects'
import { CommentEffectService } from './+state/comments/comments.effects';
import { SharedModule } from '../shared/shared.module';
import { CommentsContainerComponent } from './comments-container/comments-container.component';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentsContainerComponent
  ],
  providers:[CommentsFacade],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path:'',
        component:CommentsContainerComponent
      }
    ]),
    SharedModule,
    StoreModule.forFeature(COMMENTS_FEATURE_KEY,commentReducer),
    EffectsModule.forFeature([CommentEffectService])
  ]
})
export class CommentsModule { }
