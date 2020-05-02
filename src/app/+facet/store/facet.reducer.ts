import { Update } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { User } from '../model';
import { loadUsers, usersLoaded, loadUserAlbums, userAlbumsLoaded, loadFail } from './facet.action';
import { initialFacetState, userAdapter, FacetState } from './facet.state';

const reducer = createReducer(
  initialFacetState,
  on(loadUsers,
    loadUserAlbums, (state) => {
      return {
        ...state,
        loading: true,
      };
    }),
  on(usersLoaded, (state, { users }) => {
    return {
      ...state,
      loading: false,
      users: userAdapter.addMany(users, state.users),
    };
  }),
  on(userAlbumsLoaded, (state, {userId, albums}) => {
    const update: Update<User> = {
      id: userId,
      changes: { albums }
    };
    return {
      ...state,
      loading: false,
      users: userAdapter.updateOne(update, state.users),
    };
  }),
  on(loadFail, (state) => {
    return {
      ...state,
      loading: false,
    };
  }),
);

export function facetReducer(state: FacetState, action: Action) {
  return reducer(state, action);
}
