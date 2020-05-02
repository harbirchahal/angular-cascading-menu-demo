import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from '../model';

export const FEATURE_KEY = 'facet';

export const userAdapter = createEntityAdapter<User>();

export interface FacetState {
  loading: boolean;
  users: EntityState<User>;
}

export const initialFacetState: FacetState = {
  loading: false,
  users: userAdapter.getInitialState(),
};
