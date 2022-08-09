import {createAction,props} from '@ngrx/store';
import {Comment} from './comments.model';


export const loadComments = createAction("[All Comments Page] load All Comments");

export const loadCommentsSuccess = createAction(
    "[Comments API] load Comments Success",
    props<{comments:Comment[]}>()
    );

export const loadCommentsFailed = createAction("[Comments API] load Comments Failed")

export const filterComments = createAction(
    "[Comment Screen Input] filter comments",
    props<{filterBy:string}>()
    )