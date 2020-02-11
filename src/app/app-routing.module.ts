import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeaguesResolve } from './resolves/leagues.resolve';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'leagues',
    pathMatch: 'full'
  },
  {
    path: 'leagues',
    component: LeaguesComponent,
    resolve: {
      leagues: LeaguesResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
