import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginFormComponent } from './features/login/components/login-form/login-form.component';
import { LoginContainer } from './features/login/containers/login/login.container';
import { BaseButtonComponent } from './shared/components/base-button/base-button.component';
import { navbarComponent } from './shared/components/navbar/navbar.component';
import { PokemonContainer } from './features/pokemon/containers/pokemon/pokemon.component';
import { PokemonDetailsContainer } from './features/pokemon-details/containers/pokemon-details/pokemon-details.component';
import { TrainerContainer } from './features/trainer/containers/trainer/trainer.component';
import { AppContainerComponent } from './shared/components/container/container.component';
import { PokemonGridComponent } from './features/pokemon/components/pokemon-grid/pokemon-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    //VIEWS
    LoginContainer,
    PokemonContainer,
    PokemonDetailsContainer,
    TrainerContainer,
    //COMPONENTS
    navbarComponent,
    LoginFormComponent,
    BaseButtonComponent,
    AppContainerComponent,
    PokemonGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
