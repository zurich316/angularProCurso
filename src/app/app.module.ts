import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Service
import { ServiceModule } from './service/service.module';

import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    FormsModule,
    ServiceModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
