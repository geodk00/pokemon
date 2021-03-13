import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainer } from './features/login/containers/login/login.container';
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
    component: PokemonContainer
  }/*,
  {
    path: 'pokemon/:name',
    component: PokemonDetailView
  },
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
