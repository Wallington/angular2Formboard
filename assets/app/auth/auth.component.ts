import 
{
     Component,
     Input
} from '@angular/core';

import
{
    Router
} from '@angular/router';

import { HttpParams, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

//testing
import {headerComponent} from '../header/header.component';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css', './auth.styles.css', '../main/main.styles.css'],
    

})



export class authComponent
{

    // Inject HttpClient into your component or service.
    // Inject the header component for testing
    constructor( private http: HttpClient, private router: Router){}


    //this hold the seleced account the user want log in as
    SelectProfile :  Object = {};

    public profileSelectSection : Boolean = false;
    public areYouBotSection : Boolean = true;
    
    //keep the google Captcha from rerendering
    public botCaptchaRender : Boolean = false;
    
    //this will hold our google captcha data
    public googleCaptcha;

    //this 
    boxTrigger : Object =
    {
        profileSelection:  false

    }

    //set the default accounts that we want user be able access to
    accounts = 
    [
        {
            "email":"wall.e@exapleprofile.com",
            "name":"Wall-E",
            "birthdate":"2008",
            "avatar":"images\/profilePic_09.png",
            "rank": "Member"
        },
        {
            "email":"clank@exampleprofile.com",
            "name":"Clank",
            "birthdate":"2002",
            "avatar":"images\/profilePic_01.png",
            "rank": "Moderator"
            
        },
        {
            "email":"cyerman@exampleprofile.com",
            "name":"Cyerman",
            "birthdate":"1966",
            "avatar":"images\/profilePic_02.png",
            "rank": "Member"
        },
        {
            "email":"cylon@exampleprofile.com",
            "name":"Cylon",
            "birthdate":"1978",
            "avatar":"images\/profilePic_03.jpg",
            "rank": "Member"
        },
        {
            "email":"marvin@exampleprofile.com",
            "name":"Marvin",
            "birthdate":"1978",
            "avatar":"images\/profilePic_04.png",
            "rank": "Member"
        },
        {
            "email":"wheatley@exampleprofile.com",
            "name":"Wheatley",
            "birthdate":"2011",
            "avatar":"images\/profilePic_05.png",
            "rank": "Member"
        },
        {
            "email":"miles.monroe@exampleprofile.com",
            "name":"Miles Monroe",
            "birthdate":"1973",
            "avatar":"images\/profilePic_06.png",
            "rank": "Member"
        },
        {
            "email":"Maschinenmensch@exampleprofile.com",
            "name":"Maschinenmensch",
            "birthdate":"1927",
            "avatar":"images\/profilePic_07.png",
            "rank": "Member"
        },
        {
            "email":"optimus.prime@exampleprofile.com",
            "name":"Optimus Prime",
            "birthdate":"1984",
            "avatar":"images\/profilePic_08.png",
            "rank": "Moderator"
        }
    ];

    //we want render Google Captcha 
    RenderCaptcha()
    {
       this.googleCaptcha = grecaptcha.render(document.getElementById('myG-Recaptcha'), {
          'sitekey' : '6LcNriwUAAAAALTx_6B2nM69nZRYKfAPjZRv3lf8' //this localhost domain need to change to domain site key
        });
        
        this.botCaptchaRender = true;
        
    }

    //on click we want to set SelectProfile with this function which recivie object of that profile
    AssignAccount (targetProfile: Object)
    {
       if(!this.botCaptchaRender)
       {
           this.RenderCaptcha();
       }
       this.SelectProfile = targetProfile;
       this.areYouBotSection = !this.areYouBotSection;
       this.profileSelectSection = !this.profileSelectSection;
       
    }

    ReturnProfileSelectSelection ()
    {
        this.areYouBotSection = !this.areYouBotSection;
        this.profileSelectSection = !this.profileSelectSection;
        grecaptcha.reset();
    }

    ReplaceCharacter(string: String, targetCharacter : String, replaceCharacter : String)
    {
       
        return string.replace(targetCharacter, replaceCharacter );
        
    }
    

    CreateProfile(vadiation)
    {
        if(vadiation.success)
        {
            this.http.head('/auth/session/create/' + this.SelectProfile.email + '/' + this.SelectProfile.name + 
            '/' + this.SelectProfile.birthdate + '/' + this.ReplaceCharacter(this.SelectProfile.avatar,'/','&47')
            + '/' + this.SelectProfile.rank)
            .subscribe();
            this.router.navigate(['/threadBoard', 'Main Board']);
        }
        else
        {
            this.ReturnProfileSelectSelection();
        }
              
    }

    SubmitGCaptcha ()
    {

        //requestinhg the response code that we need to valdate
        let googleCaptchaResponse : String =  grecaptcha.getResponse(this.googleCaptcha);
        
        //send GET to get a JSON back from server after giving the response code to valdate
        this.http.get('/auth/valdate/' + googleCaptchaResponse).subscribe(data => this.CreateProfile(data));
       
    }

}