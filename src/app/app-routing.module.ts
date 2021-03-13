import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/guards/session/session.guard';
import { LoginContainer } from './features/login/containers/login/login.container';
import { PokemonDetailsContainer } from './features/pokemon-details/containers/pokemon-details/pokemon-details.component';
import { PokemonContainer } from './features/pokemon/containers/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginContainer
  },
  {
    path: 'pokemon',
    component: PokemonContainer,
    canActivate: [ SessionGuard ]
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetailsContainer,
    canActivate: [ SessionGuard ]
  },/*
  {
    path: '**',
    component: NotFoundView
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
