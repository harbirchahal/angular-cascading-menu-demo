import { createAction, props } from '@ngrx/store';
import { User, Album } from '../model';

export const loadUsers = createAction(
  '[Facet] Load Users'
);

export const usersLoaded = createAction(
  '[Facet] Users Loaded',
  props<{ users: User[] }>()
);

export const loadUserAlbums = createAction(
  '[Facet] Load User Albums',
  props<{ userId: number }>()
);

export const userAlbumsLoaded = createAction(
  '[Facet] User Albums Loaded',
  props<{ userId: number, albums: Album[] }>()
);

export const loadFail = createAction(
  '[Facet] LOAD FAIL',
  props<{ err: Error }>()
);
