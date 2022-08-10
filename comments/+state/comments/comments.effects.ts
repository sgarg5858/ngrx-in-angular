import { Injectable } from "@angular/core";
import {Actions,createEffect,ofType,OnInitEffects} from '@ngrx/effects'
import { Action } from "@ngrx/store";
import { catchError, concatMap, map, of } from "rxjs";
import { CommentService } from "../../comment.service";
import * as CommentActions from './comments.actions'
import { Comment } from "./comments.model";
@Injectable()
export class CommentEffectService implements OnInitEffects{

    constructor(private actions$:Actions,private commentsService:CommentService){}

    loadComments$ = createEffect(
        ()=> this.actions$.pipe(
            ofType(CommentActions.loadComments),
            concatMap(()=> this.commentsService.loadComments().pipe(
                map((comments:Comment[])=>CommentActions.loadCommentsSuccess({comments})),
                catchError((error)=> of(CommentActions.loadCommentsFailed()))
            ))
            )
        )
        ngrxOnInitEffects(): Action {
            console.log("Comment Effects");
            return CommentActions.loadComments();
        }

}