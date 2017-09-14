//import 
import 
{
  Component
} from '@angular/core';

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

  public user = 
  {
      name: 'Maschinenmensch',
      avatar: 'images\/profilePic_07.png'
  }
  
  
  
  
  
}