import { Dictionary } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../model';
import { userAdapter, FacetState, FEATURE_KEY } from './facet.state';

const selectFacetState =
  createFeatureSelector<FacetState>(FEATURE_KEY);

const selectUserState = createSelector(
  selectFacetState,
  (state: FacetState) => state.users);

export const selectLoading = createSelector(
  selectFacetState,
  (state: FacetState) => state.loading);

export const {
  selectAll: selectAllUsers,
  selectEntities: selectUserEntities,
} = userAdapter.getSelectors(selectUserState);

export const selectUserAlbums = createSelector(
  selectUserEntities,
  (entities: Dictionary<User>, props: { userId: number }) => {
    return entities[props.userId].albums || [];
  });
