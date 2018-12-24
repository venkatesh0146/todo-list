import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import {UserHttpService} from './user-http.service';
import {RouteGuardService} from './route-guard.service';
import { IssueComponent } from './issue/issue.component';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { CookieService } from 'ngx-cookie-service';
import {HttpModule } from '@angular/http'
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule} from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ViewIssueComponent } from './view-issue/view-issue.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    IssueComponent,
    NewIssueComponent,
    ViewIssueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule.forRoot([
      {path:'login',component:LoginComponentComponent},
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'issue',component:IssueComponent,canActivate:[RouteGuardService]},
      {path:'newIssue',component:NewIssueComponent,canActivate:[RouteGuardService]},
      {path:'view/:issueId',component:ViewIssueComponent}
    ]),
    
    
  ],
  providers: [UserHttpService,RouteGuardService,CookieService,HttpModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
