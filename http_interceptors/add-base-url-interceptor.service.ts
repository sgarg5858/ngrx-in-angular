import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, take } from 'rxjs';
import { ConfigService } from '../initializer/config.service';

@Injectable()
export class AddBaseUrlInterceptorService implements HttpInterceptor {

  baseURL:string="";

  constructor(private configService:ConfigService) { 
    //getting the base url
    this.configService.config$.pipe(take(1)).subscribe((config)=>{
      console.log(config)
      this.baseURL=config?.baseURL!;
    })

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //let the first config request go as we are using environment!
    if(req.url.includes("config.json"))
    {
      return next.handle(req);
    }
    //if bas url is not there , dont make the request!
    //
    if(this.baseURL === undefined || this.baseURL==="")
    {
      return EMPTY;
    }

    //else add the base url got from config service
    req = req.clone({url:this.baseURL + req.url});

    return next.handle(req)

  }
}
