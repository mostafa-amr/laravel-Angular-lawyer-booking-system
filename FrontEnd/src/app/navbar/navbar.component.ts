import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  nav_log: any = '../../assets/logo.png';
  // BehaviorSubject<any>({})
  userInfo: any;
  token: any;
  lawerInfo: any;
  localStorValue: any;
  isLogin = false;
  user: any = 'lawer';

  constructor(public _AuthService: AuthService, public _Router: Router) {
    if (localStorage.getItem('UserData')) {
      this._AuthService.isLogin.next(true);
      this._AuthService.isLogin.subscribe((data) => {
        console.log('nnnnnn', data);
        this.isLogin = data;
      });

      this.localStorValue = localStorage.getItem('UserData');
      let objData = JSON.parse(this.localStorValue);
      this.userInfo = objData;
      this.token = objData.token;

      console.log('this.userInfo', this.userInfo);
      console.log('this.token', this.token);
      // console.log('this.isLogin', this._AuthService.isLogin);
    } else {
      this._AuthService.isLogin.next(false);
    }
    // let user = new userLoginData(
    //   objData.id,
    //   objData.name,
    //   objData.city_id,
    //   objData.email,
    //   objData.image,
    //   objData.phone,
    //   objData.password,
    //   objData.role
    // );
    // _AuthService.userLogData.subscribe((data) => {
    //   // console.log("User_Data_Is",data);

    //   let obj=data;
    //   let size =Object.keys(obj).length
    //   if (size) {
    //     this.isLogin = true;
    //     this.userInfo=obj;
    //     // console.log("User_Data_Is",obj);

    //   }else{
    //     this.isLogin = false;
    //   }
    // });

    _AuthService.lawerLogData.subscribe((data) => {
      let obj = data;
      let size = Object.keys(obj).length;
      // console.log("LAWERRRRR_Data_Is",data);
      // console.log("AND_SIZE_IS",size);
      if (size) {
        // this.isLogin = true;
        this.lawerInfo = obj;
        // console.log("User_Data_Is",obj);
      } else {
        // this.isLogin = false;
      }
    });
    // if (_AuthService.userLogData || _AuthService.lawerLogData) {

    // }else{
    //   this.isLogin=false
    // }
  }

  logout() {
    // this._AuthService.logOut();
    // console.log("logOut");
    // _AuthService.userLogData.subscribe((data) => {
    //   let obj=data;
    //   let size =Object.keys(obj).length
    //   if (size) {
    //     this.isLogin = true;
    //     this.userInfo=obj;
    //     console.log("User_Data_Is",obj);
    //   }
    // });
  }
}
