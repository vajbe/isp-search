import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Provider } from '../shared/provider.model';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

@Injectable()
export class ProviderService {

  selectedProvider: Provider;
  searchQuery: String;
  providersFullList: Provider[];
  
  constructor(private http: HttpClient) { }

  getProviders(): Observable<Provider[]> {
    console.log("Get providers");
    return this.http.get<Provider[]>("https://isp-back.herokuapp.com/api/getProviders").pipe(share());
  }
}
