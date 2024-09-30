import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment.development';
import { Repo } from '../models/Repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<User[]> {
    return this.http.get<User[]>(environment.baseUrl + "/users");
  }

  public getUserRepo(userId: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(environment.baseUrl + `/users/${userId}/repos`);
  }
}
