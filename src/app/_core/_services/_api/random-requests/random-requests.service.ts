import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomRequestsService {

  public method: string;
  public apiUrl: string;
  public methodBody: any;
  public headers: any =  {};
  public params: any = {};

  constructor(private http: HttpClient) { }

  public getRandomRequest(): Observable<any> {
    return this.http.request(this.method, this.apiUrl,
      {body: `${this.methodBody}`, headers: this.headers,
        params: this.params, observe: 'response'});
  }

}
