import { Comment } from "./comments.model";
import { createReducer, on, Action, ActionReducer, MetaReducer } from '@ngrx/store';
import * as CommentActions from './comments.actions';

export const COMMENTS_FEATURE_KEY = "comments";


export interface CommentState{
    comments:Comment[]|null;
    filterBy:string;
    didApiWork:boolean;
}

export const initialCommentState :CommentState={
    comments:null,
    filterBy:"",
    didApiWork:false
}

export const commentReducer = createReducer(
    initialCommentState,
    on(CommentActions.loadCommentsSuccess,(state,action)=>{
        return {
            ...state,
            comments:[...action.comments],
            didApiWork:true
        }
    }),
    on(CommentActions.loadCommentsFailed,(state,action)=>{
        return {
            ...state,
            comments:[],
            didApiWork:false
        }
    }),
    on(CommentActions.filterComments,(state,action)=>{
        return {
            ...state,
            filterBy:action.filterBy
        }
    })
)
