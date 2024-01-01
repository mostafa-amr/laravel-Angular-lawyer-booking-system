import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  isLogin: any;
  localStorValue: any;
  userInfo: any;
  token: any;
  userId: any;
  constructor(
    public _HttpClient: HttpClient,
    public _AuthService: AuthService
  ) {
    if (localStorage.getItem('UserData')) {
      this._AuthService.isLogin.next(true);
      this._AuthService.isLogin.subscribe((data) => {
        console.log('nnnnnn', data);
        this.isLogin = data;
      });

      this.localStorValue = localStorage.getItem('UserData');
      let objData = JSON.parse(this.localStorValue);
      this.userInfo = objData;
      this.token = this.userInfo.token;
      this.userId = this.userInfo.id;

      console.log('this.userInfo-groups', this.userInfo);
      console.log('this.userId-groups', this.userId);
      // console.log('this.token', this.token);
      // console.log('this.isLogin', this._AuthService.isLogin);
    } else {
      this._AuthService.isLogin.next(false);
    }
  }
  registrUserApi(formLoginData: any): Observable<any> {
    console.log(formLoginData);

    return this._HttpClient.post(
      'http://127.0.0.1:8000/api/users',
      formLoginData
    );
  }
  registrLawerApi(formLoginData: any): Observable<any> {
    console.log(formLoginData);

    return this._HttpClient.post(
      'http://127.0.0.1:8000/api/lawyers',
      formLoginData
    );
  }
  // storeSpecialize(formLoginData: any): Observable<any> {
  //   console.log(formLoginData);

  //   return this._HttpClient.post(
  //     'http://127.0.0.1:8000/api/lawyers',
  //     formLoginData
  //   );
  // }
  getUserApi(): Observable<any> {
    return this._HttpClient.get('http://127.0.0.1:8000/api/users');
  }
  updateUserByIdApi(id: any, data: any): Observable<any> {
    return this._HttpClient.put(`http://127.0.0.1:8000/api/users/${id}`, data);
  }
  getLawerApi(): Observable<any> {
    return this._HttpClient.get('http://127.0.0.1:8000/api/lawyers');
  }
  getOneLawerApi(id: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/lawyers/${id}`);
  }
  updateOneLawerApi(id: any, data: any): Observable<any> {
    return this._HttpClient.put(
      `http://127.0.0.1:8000/api/lawyers/${id}`,
      data
    );
  }
  getCitiesApi(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/cities`);
  }

  getspecializationsApi(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/specializations`);
  }

  getAllGroupsApi(): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/groups`);
  }
  createGroupsApi(data: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this._HttpClient.post(`http://127.0.0.1:8000/api/groups`, data, {
      headers,
    });
  }
  updateGroupsApi(id: any, obj: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );

    return this._HttpClient.put(`http://127.0.0.1:8000/api/groups/${id}`, obj, {
      headers,
    });
  }
  checkJoining(id: any, obj: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );

    return this._HttpClient.put(
      `http://127.0.0.1:8000/api/checkJoining/${id}`,
      obj,
      {
        headers,
      }
    );
  }
  getGroupsByIdApi(id: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/users/${id}`);
  }

  getAllReviews(id: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/reviews/${id}`);
  }
  loginFun(data: any): Observable<any> {
    return this._HttpClient.post(
      `http://127.0.0.1:8000/api/sanctum/token`,
      data
    );
  }
  getGroupAsAdmin(id: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/users/${id}`);
  }
  lawerSearch(data: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const params = new HttpParams()
      .set('specialization', data.specialization)
      .set('city', data.city)
      .set('specialization', data.name_lawyer);

    // this.http.post(url, null, { params });
    console.log('data-data-data', data);

    return this._HttpClient.post(
      `http://127.0.0.1:8000/api/lawyers/search?specialization=${data.specialization}&city=${data.city}&name_lawyer=${data.name_lawyer}`,
      null,
      {
        headers,
      }
    );
  }
  getLawersDate(id: any): Observable<any> {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/lawyerTimes/${id}`);
  }

  createAppontment(data: any) {
    return this._HttpClient.post(
      `http://127.0.0.1:8000/api/appointments`,
      data
    );
  }

  addComment(id: any, data: any) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this._HttpClient.post(
      `http://127.0.0.1:8000/api/makeReview/${id}`,
      data,
      {
        headers,
      }
    );
  }

  // addCommentReserv(id: any, app_id: any, data: any) {
  //   const headers = new HttpHeaders().set(
  //     'Authorization',
  //     `Bearer ${this.token}`
  //   );
  //   return this._HttpClient.post(
  //     `http://127.0.0.1:8000/api/makeReview/${id}/${app_id}`,
  //     data,
  //     {
  //       headers,
  //     }
  //   );
  // }
  addDates(data: any) {
    // const headers = new HttpHeaders().set(
    //   'Authorization',
    //   `Bearer ${this.token}`
    // );
    return this._HttpClient.post(
      `http://127.0.0.1:8000/api/lawyerTimes`,
      data
      // ,
      // {
      //   headers,
      // }
    );
  }
  getOneLawerDates(id: any) {
    // const headers = new HttpHeaders().set(
    //   'Authorization',
    //   `Bearer ${this.token}`
    // );
    return this._HttpClient.get(`http://127.0.0.1:8000/api/lawyerTimes/${id}`);
  }
  deleteOneLawerDates(id: any) {
    // const headers = new HttpHeaders().set(
    //   'Authorization',
    //   `Bearer ${this.token}`
    // );
    return this._HttpClient.delete(
      `http://127.0.0.1:8000/api/lawyerTimes/${id}`
    );
  }
  updateOneLawerDates(id: any, data: any) {
    // const headers = new HttpHeaders().set(
    //   'Authorization',
    //   `Bearer ${this.token}`
    // );
    return this._HttpClient.put(
      `http://127.0.0.1:8000/api/lawyerTimes/${id}`,
      data
    );
  }
  getUserAppointment(id: any) {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/users/${id}`);
  }
  getLawyerAppointment(id: any) {
    return this._HttpClient.get(`http://127.0.0.1:8000/api/users/${id}`);
  }
  deleteUserAppointment(id: any) {
    return this._HttpClient.delete(
      `http://127.0.0.1:8000/api/appointments/${id}`
    );
  }

  addFollowers(data: any) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this._HttpClient.post(`http://127.0.0.1:8000/api/followers`, data, {
      headers,
    });
  }
  getAllFollowers(id: any) {
    // const headers = new HttpHeaders().set(
    //   'Authorization',
    //   `Bearer ${this.token}`
    // );
    return this._HttpClient.get(`http://127.0.0.1:8000/api/followers/${id}`);
  }
  deleteOneFollowers(id: any) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    // console.log("this.token",this.token);
    
    return this._HttpClient.delete(
      `http://127.0.0.1:8000/api/followers/${id}`,
      {
        headers,
      }
    );
  }
  getNotification() {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    // console.log("this.token",this.token);
    
    return this._HttpClient.get(
      `http://127.0.0.1:8000/api/notifications`,
      {
        headers,
      }
    );
  }
}
