import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.model';
import { Parent } from '../shared/parent.model';
import { ParentService } from '../shared/parent.service';

@Component({
  selector: 'app-parents-list',
  templateUrl: './parents-list.component.html',
  styleUrls: ['./parents-list.component.scss']
})
export class ParentsListComponent extends BaseResourceListComponent<Parent> {

  constructor(private parentService: ParentService) {
      super(parentService);
    }

}
