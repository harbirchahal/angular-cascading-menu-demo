import { Dictionary } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../model';
import { userAdapter, FacetState, FEATURE_KEY } from './facet.state';

const {
  selectAll,
  selectEntities
} = userAdapter.getSelectors();

const selectFacetState =
  createFeatureSelector<FacetState>(FEATURE_KEY);

const selectUserState = createSelector(
  selectFacetState,
  (state: FacetState) => state.users);

export const selectLoading = createSelector(
  selectFacetState,
  (state: FacetState) => state.loading);

export const selectAllUsers = createSelector(
  selectUserState, selectAll);

export const selectUserEntities = createSelector(
  selectUserState, selectEntities);

export const selectUserAlbums = createSelector(
  selectUserEntities,
  (entities: Dictionary<User>, props: { userId: number }) => {
    return entities[props.userId].albums || [];
  });
