//import 
import 
{
  Component,
  Input 
} from '@angular/core';


import { HttpParams, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component
({
    selector: 'app-main',
    templateUrl: '',
    styleUrls: ['../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css', './header.styles.css','../main/main.styles.css']
})

export class mainComponent
{
  constructor( private http: HttpClient){}

  Test()
  {
    alert();
  }
  
    alert();
  
}