import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Config, ConfigService } from '../initializer/config.service';

export interface Comment{
  postId:string;
  id:string;
  name:string;
  email:string;
  body:string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl:string="";

  constructor(private configService:ConfigService,private httpClient:HttpClient) {
    this.configService.config$.pipe(take(1)).subscribe((config:Config|null)=>{
      if(config!=null)
      {
        this.baseUrl=config.baseURL;
      }
    })
   }

  private commentBehaviorSubject = new BehaviorSubject<Comment[]|null>(null);
  public readonly comments$ = this.commentBehaviorSubject.asObservable();

  getComments():void{

    // Add retry functionality!
    this.httpClient.get<Comment[]>(`${this.baseUrl}comments`)
    .subscribe({
      next:((comments:Comment[])=>{
        this.commentBehaviorSubject.next(comments);
      }),
      error: (error:any)=>{
        this.commentBehaviorSubject.next([])
      },
      complete:()=>{
        console.log("Complete")
        // this.commentBehaviorSubject.complete();
      }
    })

  }


}
