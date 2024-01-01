import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your API URL

  localStorValue: any;
  userInfo: any;
  token: any;
  userId: any;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('UserData')) {
      this.localStorValue = localStorage.getItem('UserData');
      let objData = JSON.parse(this.localStorValue);
      this.userInfo = objData;
      this.token = this.userInfo.token;
      this.userId = this.userInfo.id;

      console.log('this.userInfo-groups', this.userInfo);
      console.log('this.userId-groups', this.userId);
      // console.log('this.token', this.token);
      // console.log('this.isLogin', this._AuthService.isLogin);
    }
  }

  // GET request example
  public get(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  // POST request example
  public post(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post(url, data).pipe(catchError(this.handleError));
  }

  // PUT request example
  put(id: string, endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}/${id}`;
    return this.http.put(url, data).pipe(catchError(this.handleError));
  }

  // DELETE request example
  public delete(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    let token = this.token;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http
      .delete(url, { headers })
      .pipe(catchError(this.handleError));
  }

  // Handle errors from API calls
  private handleError(error: any): Observable<never> {
    console.error('API Error:', error.response);
    throw error;
  }
}
