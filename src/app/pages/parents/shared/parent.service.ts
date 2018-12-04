import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Parent } from './parent.model';

@Injectable({
  providedIn: 'root'
})
export class ParentService extends BaseResourceService<Parent> {
  constructor(injector: Injector) {
    super(injector, '/parents');
  }
}
