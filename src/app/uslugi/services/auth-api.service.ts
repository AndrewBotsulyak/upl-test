import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class AuthApiService {

  constructor(
    private http: HttpClient
  ) {}

  login() {
    return this.http.post(`/login`, {}, {
      withCredentials: true
    });
  }

  register() {
    return this.http.post(`/register`, {}, {
      withCredentials: true
    });
  }

}
