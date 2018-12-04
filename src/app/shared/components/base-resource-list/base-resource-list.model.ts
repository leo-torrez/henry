import { OnInit } from '@angular/core';
import { BaseResourceModel } from '../../models/base-resource-model';
import { BaseResourceService } from '../../services/base-resource.service';
import { Observable } from 'rxjs';

export abstract class BaseResourceListComponent<T extends BaseResourceModel>
  implements OnInit {
  resource: Observable<T[]>;
  constructor(protected resourceService: BaseResourceService<T>) {}

  ngOnInit() {
    this.resource = this.resourceService.getAll();
  }

}
