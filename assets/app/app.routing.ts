import { ModuleWithProviders } from '@angular/core';
import 
{
    Routes,
    RouterModule
} from '@angular/router';

//importing the pages we want load in our SPA
import { authComponent } from './auth/auth.component';

//define our SPA routes to what component want show to the user
const appRoutes: Routes =
[
    {
        path: 'auth',
        component: authComponent
    },
    {
        path: "",
        redirectTo: '/auth',
        pathMatch: 'full'
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot
(
    appRoutes,
    { enableTracing : true } //debuging only  
);