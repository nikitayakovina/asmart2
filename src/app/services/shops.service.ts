import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(private httpClient: HttpClient) { }

  public getHttp(): Observable<any> {
    return this.httpClient.get('../assets/db.json');
  }
}
