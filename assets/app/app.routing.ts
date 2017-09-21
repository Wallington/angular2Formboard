import { ModuleWithProviders } from '@angular/core';
import 
{
    Routes,
    RouterModule
} from '@angular/router';

//importing the pages we want load in our SPA
import { authComponent } from './auth/auth.component';
import { mainComponent } from './main/main.component';
import { threadBoardComponent } from './threadBoard/threadBoard.component';
//define our SPA routes to what component want show to the user
const appRoutes: Routes =
[
    {
        path: 'auth',
        component: authComponent
    },
    {
        path: 'index',
        component: mainComponent
    },
    {
        path: 'threadBoard/:forumBoardName',
        component: threadBoardComponent   
    },
    {
        path: "",
        redirectTo: '/',
        pathMatch: 'full'
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot
(
    appRoutes,
    { enableTracing : true } //debuging only  
);