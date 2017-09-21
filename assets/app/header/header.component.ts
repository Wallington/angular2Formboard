//import 
import 
{
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output, 
} from '@angular/core';

import { HttpParams, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component
({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css', './header.styles.css','../main/main.styles.css'],
    
})

export class headerComponent implements OnInit
{
  constructor
  (
     private http: HttpClient,
  ){}

  public user =
  {
      name: 'test',
      avatar: 'images\/profilePic_09.png'
  }
  
  public isSessionStarted: Boolean = false;
  public outputHide
  ngOnInit()
  {
     if(!this.isSessionStarted)
      {
          this.outputHide = 'hide';
      }
  }
}