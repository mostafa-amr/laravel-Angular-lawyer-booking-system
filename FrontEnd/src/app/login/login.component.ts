import { UsersService } from 'src/app/services/projectApis/users.service';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData: any;
  userList: any;
  LawerList: any;
  userTotalData: any;
  errorData: any = { email: '', pasword: '' };

  constructor(
    public _Router: Router,
    public _AuthService: AuthService,
    public _ToastrService: ToastrService,
    public _UsersService: UsersService
  ) {
    _AuthService.userLogData.subscribe((data) => {
      // console.log("User_Data_Is",data);

      let obj = data;
      let size = Object.keys(obj).length;
      if (size) {
        // console.log("User_Data_Is-FFF-TRRUE",obj);
      } else {
        // console.log("User_Data_Is-FFF",obj);
      }
    });
    this._AuthService.logOut();
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),

    password: new FormControl(null, [
      Validators.required,
      // Validators.pattern(
      //   '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      // ),
    ]),
  });
  submitGameForm(form: any) {
    // console.log(form);
  }

  bckHome() {
    this._Router.navigate(['register']);
  }

  getLoginData(formLoginData: any) {
    console.log('formUserData', formLoginData.value);

    // this._UsersService.loginFun(formLoginData.value).subscribe(
    //   (res) => {
    //     // console.log('ressssssss', res.error.error);
    //     let token = res[0];
    //     let data = res[1][0] ? res[1][0] : res[1];

    //     // console.log('resssssssstoken', token);
    //     // console.log('ressssssssdata', data);
    //     let userData = { token: token, ...data };
    //     localStorage.setItem('UserData', JSON.stringify(userData));
    //     this._AuthService.isLogin.next(true);
    //     this._AuthService.userDataLogin.next(userData);
    //     //     isLogin = new BehaviorSubject<any>(false);
    //     // userDataLogin
    //     this._ToastrService.success('Login Success Done !');
    //     this._Router.navigate(['/home']);

    //   },
    //   (error) => {
    //     // console.log(' this.errorData', error.error);
    //     // this.errorData = error.error.errors;
    //     this._ToastrService.warning('Error In Login Please Try Again !!');
    //   }
    // );

    // localStorage.setItem(
    //               'UserData',
    //               JSON.stringify(this.userTotalData)
    //             );

    //   // console.log('formLoginData-LOGINN', formLoginData.value);
    //   let loginUser = formLoginData.value;

    //   // this._UsersService.loginFun(formLoginData.value).subscribe((resLogin) => {
    //   // console.log('resLogin', resLogin);
    //   // });

    this._UsersService.getUserApi().subscribe((res) => {
      console.log('userPart-api', res.data);
      let userPartList = res.data;

      let userPart = userPartList.find((ele: any) => {
        return ele.email == formLoginData.value.email;
      });
      console.log('0000000', userPart);

      if (userPart) {
        this._UsersService.getLawerApi().subscribe((res) => {
          this.LawerList = res.data;
          console.log('this.LawerList--', this.LawerList);

          let lawerPart = this.LawerList.find((ele: any) => {
            return ele.user.id == userPart.id;
          });
          if (lawerPart) {
            this.userTotalData = { ...lawerPart };
            // localStorage.setItem(
            //   'UserData',
            //   JSON.stringify(this.userTotalData)
            // );
            // this._AuthService.saveUserLoginData(this.userTotalData);
            // this._AuthService.saveUserLoginData(this.userTotalData);
            console.log('userTotalData-LAWER-TRUE', this.userTotalData);
            // if (!lawerPart.verified) {
              // this._Router.navigate(['/waitForVerifiy']);
            // } else {
              this._UsersService.loginFun(formLoginData.value).subscribe(
                (res) => {
                  // console.log('ressssssss', res.error.error);
                  let token = res[0];
                  let data = res[1][0] ? res[1][0] : res[1];

                  // console.log('resssssssstoken', token);
                  // console.log('ressssssssdata', data);
                  let userData = { token: token, ...data };
                  localStorage.setItem('UserData', JSON.stringify(userData));
                  this._AuthService.isLogin.next(true);
                  this._AuthService.userDataLogin.next(userData);
                  //     isLogin = new BehaviorSubject<any>(false);
                  // userDataLogin
                  this._ToastrService.success('Login Success Done !');
                  this._Router.navigate(['/home']);
                },
                (error) => {
                  // console.log(' this.errorData', error.error);
                  // this.errorData = error.error.errors;
                  this._ToastrService.warning(
                    'Error In Login Please Try Again !!'
                  );
                }
              );
            // }
            // this._Router.navigate(['/home']);
          } else {
            this._UsersService.loginFun(formLoginData.value).subscribe(
              (res) => {
                // console.log('ressssssss', res.error.error);
                let token = res[0];
                let data = res[1][0] ? res[1][0] : res[1];

                // console.log('resssssssstoken', token);
                // console.log('ressssssssdata', data);
                let userData = { token: token, ...data };
                localStorage.setItem('UserData', JSON.stringify(userData));
                this._AuthService.isLogin.next(true);
                this._AuthService.userDataLogin.next(userData);
                //     isLogin = new BehaviorSubject<any>(false);
                // userDataLogin
                this._ToastrService.success('Login Success Done !');
                this._Router.navigate(['/home']);
              },
              (error) => {
                // console.log(' this.errorData', error.error);
                // this.errorData = error.error.errors;
                this._ToastrService.warning(
                  'Error In Login Please Try Again !!'
                );
              }
            );

            // this.userTotalData = { ...userPart };
            // localStorage.setItem(
            //   'UserData',
            //   JSON.stringify(this.userTotalData)
            // );
            // this._AuthService.saveUserLoginData(this.userTotalData);
            // this._AuthService.saveUserLoginData(this.userTotalData);
            console.log('userTotalData-USER-FALSE', this.userTotalData);
            // this._Router.navigate(['/home']);
          }
        });
      }
    });

    //   console.log(formLoginData);
    //     // this._AuthService.registrUserMethod(formLoginData.value);
    //     this._AuthService.loginUserJson().subscribe((res) => {
    //       this.userList = res;
    //   console.log('Success', res);
    //   console.log('Success', typeof res);
    //       let userPart = this.userList.find((ele: any) => {
    //         return (
    //           ele.email == formLoginData.value.email &&
    //           ele.password == formLoginData.value.password
    //         );
    //       });

    //       // this._AuthService.loginLawerJson().subscribe((res) => {
    //       //   this.LawerList = res;

    //       // let lawerPart = this.LawerList.find((ele: any) => {
    //       //   return (
    //       //     ele.UserId == userPart.id
    //       //   );

    //       // });

    //   console.log('userPart', userPart);
    //   // console.log("lawerPart",lawerPart);

    //   console.log('userPart', userPart);

    //       if (userPart) {
    //         this._AuthService.loginLawerJson().subscribe((res) => {
    //           this.LawerList = res;

    //           let lawerPart = this.LawerList.find((ele: any) => {
    //             return ele.UserId == userPart.id;
    //           });
    //           if (lawerPart) {
    //             userPart.role = 'lawer';
    //             this.userTotalData = {
    //               ...userPart,
    //               ...lawerPart,
    //             };
    //             this._AuthService.saveLawerLoginData(this.userTotalData);
    //           } else {
    //             this.userTotalData={...userPart};
    //             this._AuthService.saveUserLoginData(this.userTotalData);
    //           }
    //   console.log('userTotalData', this.userTotalData);
    //         });
    //         this._ToastrService.success('Login Success Done !');

    //         this._Router.navigate(['/home']);
    //         // this._Router.navigate(['/home']);
    //       } else {
    //         this._ToastrService.warning('Error In Login Please Try Again !!');
    //       }

    //       // this.userData=data;
    //     });

    //     // this._Router.navigate(['/home']);
  }
}
