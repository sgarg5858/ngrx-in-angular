import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './config.service';
import { take } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddBaseUrlInterceptorService } from '../http_interceptors/add-base-url-interceptor.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide:APP_INITIALIZER,
      multi:true,
      //outer function will be called by useFactory
      //inner function will be called by APP_INTIALIZER at RunTime
      //We return an Observable , thus Angular will wait for this observable 
      // to get complete or error out!
      useFactory:(configService:ConfigService)=>{
        return ()=>{
          configService.fetchConfig();
          //returned observable must complete!
          // dont forget to filter null values as we are using behavior subject
          //either trigger complete event on configSubject
          // or use take(1) here
          return configService.config$.pipe(take(1));
        }
      },
      deps:[ConfigService]
    },
     {
      provide:HTTP_INTERCEPTORS,
      multi:true,
      useClass:AddBaseUrlInterceptorService
    }
  ]
})
export class InitializerModule { }
