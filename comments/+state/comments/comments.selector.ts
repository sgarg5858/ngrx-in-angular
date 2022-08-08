import {createFeatureSelector,createSelector} from '@ngrx/store'
import { CommentState, COMMENTS_FEATURE_KEY } from './comments.reducer'

export const getCommentState = createFeatureSelector<CommentState>(COMMENTS_FEATURE_KEY);

export const comments = createSelector(
    getCommentState,
    (commentState:CommentState)=>commentState.comments
    )