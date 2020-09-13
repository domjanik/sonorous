import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoint } from '../endpoint';
import { VoicedItemsEndpoint } from "./voiced-items.endpoint";

@Injectable()
export class VoicedItemsApiService {

  constructor(protected http: HttpClient) {
  }

  getItems(id?: string): Observable<any> {
    return this.http.get<any>(`${Endpoint.API(VoicedItemsEndpoint.categoryItems)}/${id}`);
  }

  getCategory(id: string): Observable<any> {
    return this.http.get<any>(`${Endpoint.API(VoicedItemsEndpoint.voicedItem)}/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${Endpoint.API(VoicedItemsEndpoint.categories)}`)
  }

  getImages(id: string): Observable<any> {
    return this.http.get<any>(`${Endpoint.API(VoicedItemsEndpoint.images)}/${id}`)
  }
}
