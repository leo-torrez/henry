import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BaseResourceModel } from '../models/base-resource-model';
import { AngularFireDatabase } from '@angular/fire/database';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

export class BaseResourceService<T extends BaseResourceModel> {
  protected http: HttpClient;
  protected db: AngularFireDatabase;
  protected fireStore: AngularFirestore;
  resource: AngularFirestoreCollection<T>;
  constructor(protected injector: Injector, protected collection: string) {
    this.http = injector.get(HttpClient);
    this.db = injector.get(AngularFireDatabase);
    this.fireStore = injector.get(AngularFirestore);
    this.resource = this.fireStore.collection<T>(`${collection}`);
  }

  getAll(): Observable<T[]> {
    return this.resource.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as T;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }
}
