import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/dist/types';

@Injectable()
export class JsonPlaceholderService {
  constructor(private http: HttpClient) {}

  // GET DATA.
  public getData(): Observable<any> {
    const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

    return this.http.get<any>(url);
  }
}
