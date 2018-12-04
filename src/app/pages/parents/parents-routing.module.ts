import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentsListComponent } from './parents-list/parents-list.component';
import { ParentsFormComponent } from './parents-form/parents-form.component';

const routes: Routes = [
  {
    path: '',
    component: ParentsListComponent
  },
  {
    path: 'novo',
    component: ParentsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
