import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {Location} from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.css']
})
export class ViewIssueComponent implements OnInit {

  constructor(private cookieService: CookieService, private _route:ActivatedRoute,private router:Router,private _location: Location,private userHttp:UserHttpService) { }
  public firstName:string;
  public lastName:string;
  public title:string;
  public description:string;
  public Reporter:string;
  public userFirst = this.cookieService.get('userFirstName');
  public userId = this.cookieService.get('userId');
  public userDetails;
  public flag:boolean = false;
  public issue ;
  public allUsers;
  ngOnInit() {
  
   this.userHttp.userDetails(this.userId).subscribe(
    data =>{
      this.userDetails = data['data'];
      
      this.firstName = this.userDetails.firstName;
      
      this.lastName = this.userDetails.lastName;
    },
    error => {
      
    }
  )
    this.issueDetails();
   this.userName();
    
   
     
  }
  back(){
    this._location.back();
  }
  signOut(value){
    this.userHttp.userLogout(value).subscribe(
      data =>{
        
        
        this.router.navigate(['/login']);
        this.cookieService.deleteAll();
  
      },
      error =>{
        
        }
     
    )

  }
  public switch() {
  this.flag=true;
  
  
  }
  public allUserDetails(){
    this.userHttp.allUserDetails().subscribe(
      data =>{
        
        this.allUsers = data['data']
      },
      error =>{
        
      }
    )
  }
  public userName(){
   
  }
  public issueUpdate() {
    
   let issueId =this._route.snapshot.paramMap.get('issueId')
    let issueDetails = {
      firstName : this.firstName,
      lastName:this.lastName,
      title:this.title,
      description:this.description,
      Reporter:this.Reporter
    }
    this.userHttp.issueUpdate(issueId,issueDetails).subscribe(
      data => {
        
        this._location.back();
      },
      error =>{
       
      }
    )

    }
    public issueDetails (){
      let issueId =this._route.snapshot.paramMap.get('issueId')
      this.userHttp.issueDetails(issueId).subscribe(
        data =>{
         
          this.issue = data;
        },
        error =>{
          
        }
      )
    }
}
