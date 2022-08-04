import { InjectionToken } from "@angular/core";
import { Environment, environment } from "src/environments/environment";

export const ENV = new InjectionToken<Environment>('Environment Variables',
{
    factory:()=>{
        return environment as Environment;
    }
})