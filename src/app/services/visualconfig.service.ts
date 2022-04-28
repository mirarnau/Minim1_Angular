import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { VisualConfiguration } from '../models/visualconfig';

@Injectable({
  providedIn: 'root'
})

export class VisualConfigurationService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAllConfigs(): Observable<VisualConfiguration[]> {
    return this.http.get<VisualConfiguration[]>(this.url + '/visual-config');
  }

  getConfigCustomer(customerName: string): Observable<VisualConfiguration> {
    return this.http.get<VisualConfiguration>(this.url + '/visual-config/' + customerName);
  }

  addConfig(config: VisualConfiguration): Observable<string> {
    return this.http.post(this.url + '/visual-config', config, {responseType: 'text'}) ;
  }

  updateConfig(config: VisualConfiguration): Observable<string> {
    return this.http.put(this.url + '/visual-config/', config, {responseType: 'text'});
  }

  deleteConfig(customerName: string): Observable<string> {
    return this.http.delete(this.url + '/visual-config/' + customerName, {responseType: 'text'})
  }
}