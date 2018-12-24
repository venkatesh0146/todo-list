import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { UserHttpService } from '../app/user-http.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class RouteGuardService {
  private baseUrl = 'http://localhost:3000/api/v1';
  private authTokenKey;
  constructor(private _http: HttpClient, private router:Router,private userHttp:UserHttpService,private cookieService: CookieService) { }
   authToken(data):any{
    this.cookieService.set('authToken',data);
  }
  value: string = this.cookieService.get('authToken');
  canActivate(route : ActivatedRouteSnapshot):boolean{
    if(this.value==undefined||this.value==''||this.value==null){
      this.router.navigate(['/']);
      return false;
    }
    else {
      return true;
    }
  }
}
