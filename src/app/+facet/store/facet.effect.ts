import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { FacetApiService } from '../services';
import { loadUsers, usersLoaded, loadUserAlbums, userAlbumsLoaded, loadFail } from './facet.action';

@Injectable()
export class FacetEffects {

  readonly loadUsers$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadUsers), switchMap(() => {
        return this.facetApi.getUsers().pipe(
          map(users => usersLoaded({ users })),
          catchError(err => of(loadFail({ err }))));
      })));

  readonly loadUserAlbums$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadUserAlbums), switchMap(({ userId }) => {
        return this.facetApi.getUserAlbums(userId).pipe(
          map(albums => userAlbumsLoaded({ userId, albums })),
          catchError(err => of(loadFail({ err }))));
      })));

  readonly loadFaile$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadFail), tap(({err}) => {
        console.error(err);
      })), { dispatch: false });

  constructor(
    private actions$: Actions,
    private facetApi: FacetApiService,
  ) { }

}
