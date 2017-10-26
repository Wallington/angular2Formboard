//loading in Modules
import { NgModule,ChangeDetectorRef, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
//import { ReCaptchaModule } from 'angular2-recaptcha';
import { FormsModule }   from '@angular/forms';
import { appRouting } from './app.routing';
import { MaterialModule } from '@angular/material';
import 
{
        MdAutocompleteModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdChipsModule,
        MdCoreModule,
        MdDatepickerModule,
        MdDialogModule,
        MdExpansionModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdNativeDateModule,
        MdPaginatorModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdRippleModule,
        MdSelectModule,
        MdSidenavModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdSortModule,
        MdTableModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule
} from '@angular/material';


//loading in Components
import { mainComponent } from "./main/main.component";
import { headerComponent } from "./header/header.component";
import { authComponent } from './auth/auth.component';
import { threadBoardComponent } from './threadBoard/threadBoard.component';
import { postBoardComponent } from './postBoard/postBoard.component';
import { dbComponent } from './db/db.component';

@NgModule
({
    
    declarations: 
    [
        mainComponent,
        authComponent,
        headerComponent,
        threadBoardComponent,
        postBoardComponent,
        dbComponent
    ],
    imports: 
    [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        appRouting,
        MaterialModule,
        BrowserAnimationsModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdChipsModule,
        MdCoreModule,
        MdDatepickerModule,
        MdDialogModule,
        MdExpansionModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdNativeDateModule,
        MdPaginatorModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdRippleModule,
        MdSelectModule,
        MdSidenavModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdSortModule,
        MdTableModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule
    ],
    exports: 
    [
    //RouterModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    ],
    bootstrap: 
    [
        mainComponent
    ],
    entryComponents:
    [
        authComponent,
        headerComponent,
        threadBoardComponent,
        postBoardComponent,
        dbComponent
    ],
    providers:
    [
        headerComponent,
        threadBoardComponent,
        postBoardComponent,
        dbComponent
    ]
})
export class AppModule 
{

}