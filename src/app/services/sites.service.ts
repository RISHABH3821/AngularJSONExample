import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SuperDomain } from '../models/super-domain';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  sitesUrl = 'sites/';

  constructor(private http: HttpClient) {}

  getSites(): Observable<SuperDomain[]> {
    return this.http.get<SuperDomain[]>(`${environment.apiUrl}${this.sitesUrl}`);
  }

  postDomain(data:SuperDomain):Observable<any>{
    return this.http.post(`${environment.apiUrl}${this.sitesUrl}`, data);
  }

}
