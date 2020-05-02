import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FacetApiService } from './services';
import { FEATURE_KEY, FacetEffects, facetReducer } from './store';
import { FacetStoreFacade } from './facet.facade';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature(FEATURE_KEY, facetReducer),
    EffectsModule.forFeature([FacetEffects]),
  ],
  providers: [
    FacetApiService,
    FacetStoreFacade,
  ],
})
export class FacetModule { }
