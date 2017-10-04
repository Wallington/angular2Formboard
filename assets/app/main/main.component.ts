//import 
import 
{
  Component,
  Input,
  ApplicationRef
} from '@angular/core';

import { HttpClient } from '@angular/common/http';


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
      private http : HttpClient,
      private AppRef: ApplicationRef
    ){}

    RunUpdate()
    {
        this.AppRef.tick();
    }
}