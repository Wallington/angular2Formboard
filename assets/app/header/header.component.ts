//import 
import 
{
  Component,
  ViewChild
  Input 
} from '@angular/core';
import {mainComponent} from '../main/main.component';

import { HttpParams, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component
({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css', './header.styles.css','../main/main.styles.css']
})

export class headerComponent
{
  constructor( private http: HttpClient){}

  @ViewChild(mainComponent) main: mainComponent;

  public Profile : Object = null;
  public SessionActive : Boolean = false;

  //call the server to see if there session and profile
  FindSession()
  {
    this.http.get('/auth/session').subscribe(data => console.log(data));
  }

  
  
}