import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoint } from '../endpoint';
import { ProfileEndpoint } from "./profile.endpoint";
import { Profile } from './models/profile.model';

@Injectable()
export class ProfileApiService {

  constructor(protected http: HttpClient) {
  }

  getProfile(id?: string): Observable<any> {
    return this.http.get<any>(`${Endpoint.API(ProfileEndpoint.profile)}/${id}`);
  }

  updateProfile(data: Profile): Observable<any> {
    return this.http.put<any>(`${Endpoint.API(ProfileEndpoint.profile)}`, data)
  }
}
