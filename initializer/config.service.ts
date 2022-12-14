import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import {  Environment } from 'src/environments/environment';
import { ENV } from '../tokens/environment.token';
export interface Config{
  baseURL:string;
}


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  constructor(@Inject(ENV) private environment:Environment,private httpClient:HttpClient) {
    console.log(this.environment)
   }

  private configSubject = new BehaviorSubject<Config|null>(null);
  
  public readonly config$ = this.configSubject.asObservable()
  .pipe(filter((config)=>config!=null));

  //add retry functionality with 200ms delay!
  fetchConfig()
  {
    console.log("HELLO")
     this.httpClient.get<Config>(this.environment.configUrl).subscribe(
      {
        next:(config:Config)=>{
          console.log(config)
          this.configSubject.next(config);
          // this observable must not complete as services will subscribe to this to get data !
          // this.configSubject.complete();
        },
        error:(error:any)=>{
          this.configSubject.error("Can't fetch Config Right NOW");
        }
      }
    )
  }
}
