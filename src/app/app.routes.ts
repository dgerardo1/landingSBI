import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ThanksComponent } from "./components/thanks/thanks.component";

export const ROUTES: Routes =  [
    { path: 'home', component: HomeComponent },
    { path: 'thanks', component: ThanksComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]