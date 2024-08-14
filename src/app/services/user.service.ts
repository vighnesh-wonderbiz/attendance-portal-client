import { Injectable, Query } from '@angular/core';
import User from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURI = 'http://192.168.29.46:5000/api/employeedetail';

  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURI}/${id}`);
  }
}
