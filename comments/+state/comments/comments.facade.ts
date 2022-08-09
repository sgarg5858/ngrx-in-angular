import { Injectable } from "@angular/core";
import * as CommentSelectors from './comments.selector';
import {select,Store} from '@ngrx/store';
import * as CommentActions from './comments.actions'
@Injectable()
export class CommentsFacade{

    constructor(private readonly store:Store){}

    public readonly comments$ = this.store.select(CommentSelectors.filteredComments);
    public readonly didAPIWork$ = this.store.select(CommentSelectors.didApiWork);

    getComments()
    {
        console.log("Dispatching Actions")
        this.store.dispatch(CommentActions.loadComments());
    }
    filterCommentsBy(text:string)
    {
        this.store.dispatch(CommentActions.filterComments({filterBy:text,map:new Map<string,string>()}));
    }

}