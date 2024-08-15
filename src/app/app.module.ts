import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes:Routes = [
  {path:'',component:NavbarComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate: [AuthGuard]},
  {path:'dashboard',component:DashboardComponent, canActivate: [AuthGuard]},
  {path:'register',component:RegisterComponent, canActivate: [AuthGuard]} 
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
