import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { MainComponent } from './main/main.component';
import { ShopsComponent } from './shops/shops.component';

export const routes: Routes = [
    {path:'users', component:UsersComponent},
    {path:'dashboard', component:MainComponent},
    {path:'shops', component:ShopsComponent}
    ];
