import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FacetApiService } from './services';
import { FEATURE_KEY, FacetEffects, facetReducer } from './store';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature(FEATURE_KEY, facetReducer),
    EffectsModule.forFeature([FacetEffects]),
  ],
  providers: [
    FacetApiService,
  ],
})
export class FacetModule { }
