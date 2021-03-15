import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/guards/session/session.guard';
import { LoginComponent } from './features/login/containers/login/login.container';
import { PokemonDetailsComponent } from './features/pokemon-details/containers/pokemon-details/pokemon-details.component';
import { PokemonComponent } from './features/pokemon/containers/pokemon/pokemon.component';
import { TrainerComponent } from './features/trainer/containers/trainer/trainer.component';
import { NotFoundComponent } from './features/not-found/containers/not-found.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'trainer',
    component: TrainerComponent,
    canActivate: [SessionGuard]
  },
  {
    path: 'pokemon',
    component: PokemonComponent,
    canActivate: [SessionGuard]
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetailsComponent,
    canActivate: [SessionGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
