import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginFormComponent } from './features/login/components/login-form/login-form.component';
import { LoginContainer } from './features/login/containers/login/login.container';
import { BaseButtonComponent } from './shared/components/base-button/base-button.component';
import { navbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    //VIEWS
    LoginContainer,

    //COMPONENTS
    navbarComponent,
    LoginFormComponent,
    BaseButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
