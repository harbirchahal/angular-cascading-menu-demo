import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Comment to make it work in Stackblitz
// import { FacetModule } from '@app/facet';
import { FacetModule } from './+facet'; // Feature
import { MaterialModule } from './shared';
import { AppStoreModule } from './store';
import { AppComponent } from './app.component';
import { NavigationComponent, ExploreNavComponent } from './navigation';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppStoreModule,
    FacetModule,
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    ExploreNavComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
