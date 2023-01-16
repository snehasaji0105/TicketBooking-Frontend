import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IndexComponent } from './index/index.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';

import { AdminaddticketComponent } from './adminaddticket/adminaddticket.component';
import { AdminviewticketComponent } from './adminviewticket/adminviewticket.component';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { AuthGuard } from './guard/auth.guard';




const routes: Routes = [{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:'homepage',component:HomepageComponent},
{path:'index',component:IndexComponent,canActivate:[AuthGuard]},
{path:'bookticket',component:BookticketComponent,canActivate:[AuthGuard]},
{path:'viewticket',component:ViewticketComponent,canActivate:[AuthGuard]},
{path:'cancelticket',component:CancelticketComponent,canActivate:[AuthGuard]},

{path:'adminaddticket',component:AdminaddticketComponent,canActivate:[AuthGuard]},
{path:'adminviewticket',component:AdminviewticketComponent,canActivate:[AuthGuard]},
{path:'adminindex',component:AdminindexComponent,canActivate:[AuthGuard]},
// {path:'adminindex',component:AdminindexComponent},
// {path: '',

// canActivate:[AuthGuard]






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
