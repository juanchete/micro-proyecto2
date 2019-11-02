import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) {

  }

  getJSON(src: string): Observable<any> {
    return this.http.get(src);
  }
}
