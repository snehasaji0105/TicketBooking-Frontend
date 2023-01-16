import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ViewticketComponent } from './viewticket/viewticket.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';

import { AdminaddticketComponent } from './adminaddticket/adminaddticket.component';
import { AdminviewticketComponent } from './adminviewticket/adminviewticket.component';
import { AdminindexComponent } from './adminindex/adminindex.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomepageComponent,
    IndexComponent,
    BookticketComponent,
    ViewticketComponent,
    CancelticketComponent,
   
    AdminaddticketComponent,
    AdminviewticketComponent,
    AdminindexComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
