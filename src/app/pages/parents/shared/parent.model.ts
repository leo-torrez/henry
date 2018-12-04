import { BaseResourceModel } from 'src/app/shared/models/base-resource-model';

export class Parent extends BaseResourceModel {
  constructor(
    public id?: string|number,
    public name?: string,
    public email?: string,
    public whatsapp?: string,
    public ties?: string
  ) {
    super();
  }
}
