import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private readonly api: string = 'https://jsonplaceholder.typicode.com/';

  public getUsers(): Observable<any> {
    return this.http.get<any>(`${this.api}users`);
  }

}
