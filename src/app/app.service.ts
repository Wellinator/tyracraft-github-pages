import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  public url = 'https://api.github.com/repos/Wellinator/tyracraft';

  constructor(public http: HttpClient) {}

  getReleases(): Observable<any> {
    return this.http.get(`${this.url}/releases`);
  }
}
