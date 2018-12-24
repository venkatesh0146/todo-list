import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { UserHttpService } from '../user-http.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  constructor(private cookieService:CookieService,private _route:ActivatedRoute,private router:Router,private userHttp: UserHttpService) { }
  public userDetails;
  public allIssues;
  public userId = this.cookieService.get('userId');
  public filter;
  ngOnInit() {
    this.userHttp.userDetails(this.userId).subscribe(
      data =>{
        this.userDetails = data["_body"];
        
      },
      error => {
        
      }
    )

    this.userHttp.allIssueDetails().subscribe(
      data =>{
        this.allIssues = data['data'];
       

      },
      error =>{
       
      }
    )
  }
newIssue(){
  this.router.navigate(['/newIssue'])
}
key: string = 'name'; //set default
reverse: boolean = false;
sort(key){
  this.key = key;
  this.reverse = !this.reverse;
}
p: number = 1;
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
}



