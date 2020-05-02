import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { User, Album } from '../model';

@Injectable()
export class FacetApiService {
  readonly usersUrl = () => '/api/users';
  readonly userAlbumsUrl = (id: number) => `/api/users/${id}/albums`;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.usersUrl());
  }

  getUserAlbums(id: number) {
    return this.http.get<Album[]>(this.userAlbumsUrl(id));
  }

}
