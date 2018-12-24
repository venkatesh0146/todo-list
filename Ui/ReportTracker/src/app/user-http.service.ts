import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod, Http} from '@angular/http';
import {CanActivate,ActivatedRouteSnapshot,Router} from '@angular/router';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class UserHttpService {
  private baseUrl = 'http://localhost:3000/api/v1';
  constructor(private _http: HttpClient, private cookieService: CookieService,private http:Http) {
   }
   value= this.cookieService.get('authToken');
   userId = this.cookieService.get('userId');

   
 
public currentUserId;
  userSignIn(userData):any{
    let myResponse = this._http.post(this.baseUrl + '/users' + '/login', userData)
    return myResponse;
    
  }
  allIssueDetails():any{
    let myResponse = this._http.get(this.baseUrl+ '/users' +'/issue'+'/issueDetails')
   
    return myResponse
  }


  userDetails(userId) {
   let myResponse = this._http.get(this.baseUrl + '/users' +'/'+userId)
   
    return myResponse;
  }

  allUserDetails(){
    let myResponse = this._http.get(this.baseUrl+'/users' + '/view' + '/all')
    
    return myResponse
  }
  
  userCreation(userData): any {

    let myResponse = this._http.post(this.baseUrl + '/users' + '/signup', userData)
    return myResponse;
  
  }

  issueCreation(issueData): any {
    let header = new HttpHeaders();
    header.append('authToken',this.value);
    let myResponse = this._http.post(this.baseUrl + '/users' +'/newissue',issueData)
    return myResponse
  }

  issueUpdate(issueId,issueData): any {
    let myresponse = this._http.put(this.baseUrl+'/users'+'/'+issueId+'/edit',issueData)
    return myresponse
  }
  userLogout(userData):any{
    let myResponse = this._http.post(this.baseUrl + '/users' + '/logout',userData)
    
    return myResponse;
    
  }

  issueDetails(issueId){
    let myResponse = this._http.get(this.baseUrl+'/users'+'/' +issueId +'/details')
    return myResponse

  }
 


}

