import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FacetState } from './store/facet.state';
import * as fAction from './store/facet.action';
import * as fSelect from './store/facet.selector';

@Injectable()
export class FacetStoreFacade {

  readonly loading$ = this.store.pipe(select(fSelect.selectLoading));

  readonly users$ = this.store.pipe(select(fSelect.selectAllUsers));

  readonly hasUsers$ = this.store.pipe(
    select(fSelect.selectAllUsers),
    map(users => !!users.length));

  readonly userAlbums$ = (userId: number) => this.store.pipe(
    select(fSelect.selectUserAlbums, { userId }))

  readonly hasUserAlbums$ = (userId: number) => this.store.pipe(
    select(fSelect.selectUserAlbums, { userId }),
    map(albums => !!albums.length))

  constructor(private store: Store<FacetState>) { }

  loadUsers() {
    this.store.dispatch(fAction.loadUsers());
  }

  loadUserAlbums(userId: number) {
    this.store.dispatch(fAction.loadUserAlbums({ userId }));
  }

}
