import {createFeatureSelector,createSelector} from '@ngrx/store'
import { Comment } from './comments.model';
import { CommentState, COMMENTS_FEATURE_KEY } from './comments.reducer'

export const getCommentState = createFeatureSelector<CommentState>(COMMENTS_FEATURE_KEY);

export const comments = createSelector(
    getCommentState,
    (commentState:CommentState)=>commentState.comments
    )
export const filterBy = createSelector(
    getCommentState,
    (commentState:CommentState)=>commentState.filterBy
)    
export const filteredComments = createSelector(
    comments,
    filterBy,
    (comments,filterBy)=>{
        return comments?.filter((comment:Comment)=>comment.email.includes(filterBy))
    }
    )    