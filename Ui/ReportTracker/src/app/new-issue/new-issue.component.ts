import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {Location} from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

import { UserHttpService } from '../user-http.service';
@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  constructor(private cookieService: CookieService, private _route:ActivatedRoute,private router:Router,private _location: Location,private userHttp:UserHttpService) { }
  public userFirst = this.cookieService.get('userFirstName');
  public userId = this.cookieService.get('userId');
  public userDetails;

  public firstName:string;
  public lastName:string;
  public title:string;
  public description:string;
  public Reporter:string;
  public flag:boolean=false;
  

  ngOnInit() {
    this.userHttp.userDetails(this.userId).subscribe(
      data =>{
        this.userDetails = data["data"];
        
        this.firstName = this.userDetails.firstName;
        
        this.lastName = this.userDetails.lastName;
        this.flag=true;
      },
      error => {
        
      }
    )
  }

  back(){
    this._location.back();
  }
  submit(){
    
    
    
  }

  public newIssueCreation() {
    let issueDetails = {
      firstName : this.firstName,
      lastName:this.lastName,
      title:this.title,
      description:this.description,
      Reporter:this.Reporter
    }
    this.userHttp.issueCreation(issueDetails).subscribe(
      data => {
        
        this._location.back();
      },
      error =>{
        
      }
    )

    }
  
  value: string = this.cookieService.get('authToken');
  signOut(){
    this.userHttp.userLogout(this.value).subscribe(
      data =>{
      
        
        this.router.navigate(['/login']);
        this.cookieService.deleteAll();
  
      },
      error =>{
        
        }
     
    )

  }

  public issueCreation(): any {
    let newIssue={
      firstName:this.firstName,
      lastName:this.lastName,
      description:this.description,
      title:this.title,
      Reporter:this.Reporter,
    }
    
    this.userHttp.issueCreation(newIssue).subscribe(
      data =>{
        
      },
      error =>{
        
      }
      
    )
  }
  

   
  }

