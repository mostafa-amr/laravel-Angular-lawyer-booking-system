import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AllLawerService {
  constructor(public _HttpClient: HttpClient) {}

  getAllUser(): Observable<any> {
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http:/api/users');
    // return this._HttpClient.get('http://127.0.0.1:8000/api/users');
    // return this._HttpClient.get('http:/api/users');

    // return this._HttpClient.get('https://dummyjson.com/products');
    return this._HttpClient.get('http://localhost:5050/users');
  }
  getAllUserApi(): Observable<any> {
    return this._HttpClient.get('http://127.0.0.1:8000/api/users');
  }

  getOneUser(id: any): Observable<any> {
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http://127.0.0.1:8000/api/users');
    // return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
    // return this._HttpClient.get(`http:/api/users/${id}`);
    return this._HttpClient.get(`http://localhost:5050/users/${id}`);
  }
  getAllLawers(): Observable<any> {
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http:/api/users');
    // return this._HttpClient.get('https://dummyjson.com/products');
    return this._HttpClient.get('http://localhost:5050/lawers');
  }

  getOneLawer(id: any): Observable<any> {
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http://127.0.0.1:8000/api/users');
    // return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
    // return this._HttpClient.get(`http:/api/users/${id}`);
    return this._HttpClient.get(`http://localhost:5050/lawers/${id}`);
  }
  getOneLawerApi(id: any): Observable<any> {
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http://127.0.0.1:8000/api/users');
    // return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
    // return this._HttpClient.get(`http:/api/users/${id}`);
    return this._HttpClient.get(`http://127.0.0.1:8000/api/users/${id}`);
  }
  deleteOneLawerApi(id: any): Observable<any> {
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http://127.0.0.1:8000/api/users');
    // return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
    // return this._HttpClient.get(`http:/api/users/${id}`);
    return this._HttpClient.delete(`http://127.0.0.1:8000/api/users/${id}`);
  }
  getOneReviws(id: any): Observable<any> {
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http://127.0.0.1:8000/api/users');
    // return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
    // return this._HttpClient.get(`http:/api/users/${id}`);
    return this._HttpClient.get(`http://localhost:5050/reviews/${id}`);
  }
  getCities(): Observable<any> {
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http://127.0.0.1:8000/api/users');
    // return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
    // return this._HttpClient.get(`http:/api/users/${id}`);
    return this._HttpClient.get(`http://127.0.0.1:8000/api/cities`);
  }
  getspecializations(): Observable<any> {
    // return this._HttpClient.get('http://127.0.0.1:8000/api/reviews/1');
    // return this._HttpClient.get('http://127.0.0.1:8000/api/users');
    // return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
    // return this._HttpClient.get(`http:/api/users/${id}`);
    return this._HttpClient.get(`http://127.0.0.1:8000/api/specializations`);
  }
  reservationMethod(formLoginData: any): Observable<any> {
    console.log(formLoginData);

    return this._HttpClient.post(
      'http://localhost:5050/reservationTable',
      formLoginData
    );
  }
  searchApi(city: any, speacialize: any, name: any): Observable<any> {
    // console.log(formLoginData);

    return this._HttpClient.get(
      'http://127.0.0.1:8000/api/lawyers/search' +
        '/' +
        city +
        '/' +
        speacialize +
        '/' +
        name
    );
  }




}
