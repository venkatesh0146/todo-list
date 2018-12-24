import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { timeout } from 'q';
import { UserHttpService } from '../user-http.service';
import {RouteGuardService} from '../route-guard.service'
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor( private cookieService: CookieService , private _route:ActivatedRoute,private router:Router,private userHttp:UserHttpService,private gaurd:RouteGuardService) { }

  public email : string;
  public password : string;
  public registerFlag:boolean;
  public firstName:string;
  public lastName:string;
  public phoneNumber:number;
  public inputEmail:string;
  public inputPassword:string;
  ngOnInit() {
    this.registerFlag=false;
  }

public mainError;
public currentUserId;


public userSignIn(): any {
  let userData = {
    email: this.email,
    password : this.password
  }
  
  this.userHttp.userSignIn(userData).subscribe(
    data =>{
      this.gaurd.authToken(data.data.authToken);
      
      this.cookieService.set( 'userId', data.data.userDetails.userId );
    
      
      this.router.navigate(['/home']);

    },
    error =>{
     
      if(error instanceof HttpErrorResponse){
        this.mainError=error.error.message;
      }
    }
  )
}
public register(): any {
  this.registerFlag=true;

}
public back():any{
  this.registerFlag=true;
}
public userCreation(): any {
  let newUser={
    firstName:this.firstName,
    lastName:this.lastName,
    mobileNumber:this.phoneNumber,
    email:this.inputEmail,
    password:this.inputPassword
  }
  
  this.userHttp.userCreation(newUser).subscribe(
    data =>{
     
    },
    error =>{
      
    }
    
  )
  setTimeout(()=>{
    this.router.navigate(['/login']);
  },1000)
}
}