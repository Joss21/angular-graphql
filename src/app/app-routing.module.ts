import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'lists', pathMatch:'full'},
  { path: 'lists', loadChildren: () => import('./components/pages/characters/lists/lists.module').then(m => m.ListsModule) }, 
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  { path: 'episodes', loadChildren: () => import('./components/pages/episodes/episodes.module').then(m => m.EpisodesModule) },
  { path: '**', loadChildren: () => import('./components/pages/notFound/not-found.module').then(m => m.NotFoundModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
