import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';


import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsListComponent } from './parents-list/parents-list.component';
import { ParentsFormComponent } from './parents-form/parents-form.component';

@NgModule({
  declarations: [ParentsListComponent, ParentsFormComponent],
  imports: [
    SharedModule,
    ParentsRoutingModule
  ]
})
export class ParentsModule { }
