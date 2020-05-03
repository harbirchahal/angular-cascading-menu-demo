import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as fp from 'lodash/fp';
import { map } from 'rxjs/operators';
import { User, Album } from '../model';

const apiUrl = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class FacetApiService {
  readonly usersUrl = () => `${apiUrl}/users`;
  readonly userAlbumsUrl = (id: number) =>
    `${apiUrl}/users/${id}/albums`;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.usersUrl()).pipe(
      map(fp.map(fp.pick(['id', 'name', 'email']))));
  }

  getUserAlbums(id: number) {
    return this.http.get<Album[]>(this.userAlbumsUrl(id));
  }

}
