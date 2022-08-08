import { Comment } from "./comments.model";
import { createReducer, on, Action, ActionReducer, MetaReducer } from '@ngrx/store';
import * as CommentActions from './comments.actions';

export const COMMENTS_FEATURE_KEY = "comments";


export interface CommentState{
    comments:Comment[]|null;
    filterBy:string;
}

export const initialCommentState :CommentState={
    comments:null,
    filterBy:""
}

export const commentReducer = createReducer(
    initialCommentState,
    on(CommentActions.loadCommentsSuccess,(state,action)=>{
        return {
            ...state,
            comments:[...action.comments]
        }
    }),
    on(CommentActions.loadCommentsFailed,(state,action)=>{
        return {
            ...state,
            comments:[]
        }
    }),
    on(CommentActions.filterComments,(state,action)=>{
        return {
            ...state,
            filterBy:action.filterBy
        }
    })
)
