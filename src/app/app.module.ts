import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HelpComponent } from './auth/help/help.component';
import { HomeComponent } from './panel/home/home.component';
import { SideNavComponent } from './panel/side-nav/side-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsersComponent } from './panel/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelpComponent,
    HomeComponent,
    SideNavComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
