import { CollectionsHelpers } from './collections.services';
import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class HelperService {

  public readonly Collections: CollectionsHelpers;

  constructor() { 
    this.Collections = new CollectionsHelpers();
  }
}