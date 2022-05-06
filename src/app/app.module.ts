import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HelpComponent } from './auth/help/help.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { UsersComponent } from './dashboard/users/users.component';
import { CreateUserComponent } from './dashboard/users/create user/createuser.component';
import { EditUserComponent } from './dashboard/users/edit user/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelpComponent,
    DashboardComponent,
    SidemenuComponent,
    UsersComponent,
    CreateUserComponent,
    EditUserComponent
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
