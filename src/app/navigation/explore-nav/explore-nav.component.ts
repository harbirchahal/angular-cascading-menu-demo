import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FacetStoreFacade } from '@app/facet';

@Component({
  selector: 'explore-nav',
  templateUrl: './explore-nav.component.html',
  styleUrls: ['./explore-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreNavComponent implements OnInit {

  constructor(public facade: FacetStoreFacade) { }

  ngOnInit() {
    this.facade.loadUsers();
  }

  loadUserAlbums(userId: number) {
    this.facade.loadUserAlbumsIfHaveNot(userId);
  }

}
