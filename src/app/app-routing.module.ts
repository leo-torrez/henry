import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentsModule } from './pages/parents/parents.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'parents',
    pathMatch: 'full'
  },
  {
    path: 'parents',
    loadChildren: './pages/parents/parents.module#ParentsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
