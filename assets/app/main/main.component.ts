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
    templateUrl: './main.component.html',
    styleUrls: ['../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css', './main.styles.css']
})

export class mainComponent implements OnInit
{
    constructor
    (
      private http : HttpClient
    ){}

    ngOnInit()
    {
       let CheckSession;
       //this.http.get('/auth/session/find/user').subscribe(data => console.log(data));
    }
}