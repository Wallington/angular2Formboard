//import 
import 
{
  Component,
  Input,
  OnInit
} from '@angular/core';

import { HttpParams, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import {}

import 'rxjs/add/operator/switchMap';


import 
{
    ActivatedRoute,
    Params
} from '@angular/router'

@Component
({
    selector: 'app-threadBoard',
    templateUrl: './threadBoard.component.html',
    styleUrls: ['../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css', './threadBoard.styles.css', '../main/main.styles.css']
})

export class threadBoardComponent implements OnInit
{
       
    constructor
    (
        private activeRoute : ActivatedRoute,
        
    ){}
    newThreadPostingInfo =
    {
        forumBoardName: 'x',
        threadName: '',
        authorName: '',
        isSticky: '',
        createdDate: '',
        lastedDate: ''
    }
     
    ngOnInit()
    {
        
    
        console.log('in onInit()');
        //get the name of fourm this thread belong to
        this.activeRoute.params.subscribe
        (
            (params: Params) =>
            {
                console.log(params['forumBoardName']);
                this.newThreadPostingInfo.forumBoardName = String(params['forumBoardName']).replace("<s>", " ");
            }
        );
    }

    

}