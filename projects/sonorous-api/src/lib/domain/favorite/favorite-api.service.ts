import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoint } from '../endpoint';
import { FavoriteEndpoint } from "./favorite.endpoint";
import { Favorite } from './models/favorite.model';

@Injectable()
export class FavoriteApiService {

  constructor(protected http: HttpClient) {
  }

  getFavorite(id?: string): Observable<any> {
    return this.http.get<any>(`${Endpoint.API(FavoriteEndpoint.getFavorite)}`);
  }

  postFavorite(data: Favorite): Observable<any> {
    return this.http.post<any>(`${Endpoint.API(FavoriteEndpoint.addFavorite)}`, data)
  }

  removeFavorite(id: string): Observable<any> {
    return this.http.delete<any>(`${Endpoint.API(FavoriteEndpoint.removeFavorite)}/${id}`)
  }
}
