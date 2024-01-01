import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/projectApis/users.service';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  openBool: any = false;
  openTabs: any = 'all';
  usersList: any;
  adminGroupsList: any;
  subscripGroup: any;
  xindex = 0;
  userIdGroup = 0;
  localStorValue: any;
  userInfo: any;
  userInfoServ: any;
  name = '';
  email = '';
  image = '';
  phone = '';
  password = '';
  city_id = '';
  UserImageName: any;
  userAppointment: any;
  appoError: any;
  errId="";

  constructor(
    public _UsersService: UsersService,
    public _AuthService: AuthService,
    public _Router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    if (localStorage.getItem('UserData')) {
      this.localStorValue = localStorage.getItem('UserData');
      this.localStorValue = JSON.parse(this.localStorValue);
      // _AuthService.userDataLogin.next(this.localStorValue);

      // _AuthService.userDataLogin.subscribe((res) => {
      //   this.userInfoServ = res;
      // });

      this.userInfo = this.localStorValue;
      this.name = this.userInfo.name;
      this.email = this.userInfo.email;
      this.image = this.userInfo.image;
      this.phone = this.userInfo.phone;
      this.password = this.userInfo.password;
      this.city_id = this.userInfo.city_id;
      // this.name=this.userInfo.name;
      this.userIdGroup = this.localStorValue.id;

      console.log('UserProfile-login-ID', this.userIdGroup);
      console.log('UserProfile-login-userInfo', this.userIdGroup);
    }
    this._UsersService.getUserApi().subscribe((res) => {
      console.log('res.data', res.data);
      console.log('res.data', res.data.groups);
      this.usersList = res.data;
    });

    this._UsersService.getGroupAsAdmin(this.userIdGroup).subscribe((res) => {
      // console.log('Groups-As-Admin', res);
      // let x=
      // console.log("adminGroupsList",adminGroupsList);

      this.userInfo = res.data;

      console.log('adminGroupsList', this.userInfo);

      this.adminGroupsList = res.data.group_creator;
      // this.subscripGroup = res;
    });

    this._UsersService
      .getUserAppointment(this.userInfo.id)
      .subscribe((res: any) => {
        this.userAppointment = res.data.appointments;
        console.log('this.userAppointment', this.userAppointment);
      });
  }
  // oldPassword:any;

  uploadeImage = '../../assets/imageDataBase/';

  // image1 = '../../assets/ourExpert/team2.jpg';
  // image2 = '../../../assets/caseLike/case2.jpg';
  // image3 = '../../../assets/caseLike/case3.jpg';
  // image4 = '../../../assets/caseLike/case4.jpg';
  // image5 = '../../../assets/caseLike/case5.jpg';
  // image6 = '../../../assets/caseLike/case6.jpg';

  editUserForm: FormGroup = new FormGroup({
    // let x="";
    name: new FormControl(this.name, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    email: new FormControl(this.email, [Validators.required, Validators.email]),

    image: new FormControl(this.image, [Validators.required]),

    phone: new FormControl(this.phone, [
      Validators.required,
      Validators.pattern('^(\\+201|01|00201)[0-2,5]{1}[0-9]{8}'),
    ]),
    password: new FormControl(this.password, [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
    city_id: new FormControl(this.city_id, [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),
  });

  openWindow(pic: any) {
    this.openBool = !this.openBool;
    console.log('pic pic', pic);
    this.openTabs = 'all';
    this.openTabs = pic;
  }
  closeWindow() {
    this.openBool = !this.openBool;
    this.openTabs = 'all';
  }

  editUserData(formdata: any) {
    let dataObj: any = {};
    // var newFormData: any = new FormData();
    // let name=this.userInfo.name;
    // let email=this.userInfo.email;
    // let image=this.userInfo.image;
    // let phone=this.userInfo.phone;
    // let password=this.userInfo.password;
    // let city_id=this.userInfo.city_id;

    if (formdata.value.email) {
      dataObj.name = this.userInfo.name;
      dataObj.image = this.userInfo.image;
      dataObj.phone = this.userInfo.phone;
      // dataObj.email = this.userInfo.user.email;
      dataObj.city_id = this.userInfo.city_id;
      dataObj.id = this.userInfo.id;
      // dataObj.id = this.userInfo.id;
      dataObj.token = this.localStorValue.token;
      // dataObj.role = this.userInfo.role;
      dataObj.email = formdata.value.email;
      dataObj.password = this.userInfo.password;

      // formdata.value.name = this.userInfo.name;
      // formdata.value.image = this.userInfo.image;
      // formdata.value.phone = this.userInfo.phone;
      // formdata.value.city_id = this.userInfo.city_id;
      // formdata.value.id = this.userInfo.id;
      // formdata.value.token = this.userInfo.token;
      // formdata.value.role = this.userInfo.role;
    } else if (formdata.value.image) {
      dataObj.name = this.userInfo.name;
      // dataObj.image = this.userInfo.user.image;
      dataObj.phone = this.userInfo.phone;
      dataObj.email = this.userInfo.email;
      dataObj.city_id = this.userInfo.city_id;
      dataObj.id = this.userInfo.id;
      // dataObj.id = this.userInfo.id;
      dataObj.token = this.localStorValue.token;
      // dataObj.role = this.userInfo.role;
      dataObj.image = this.UserImageName;
      dataObj.password = this.userInfo.password;

      // formdata.value.name = this.userInfo.name;
      // formdata.value.email = this.userInfo.email;
      // formdata.value.phone = this.userInfo.phone;
      // formdata.value.image = this.UserImageName;

      // formdata.value.password = 'qazxswe@#$12QAZ';
      // formdata.value.city_id = this.userInfo.city_id;
      // formdata.value.id = this.userInfo.id;
      // formdata.value.token = this.userInfo.token;
      // formdata.value.role = this.userInfo.role;
    } else if (formdata.value.phone) {
      dataObj.name = this.userInfo.name;
      dataObj.image = this.userInfo.image;
      // dataObj.phone = this.userInfo.user.phone;
      dataObj.email = this.userInfo.email;
      dataObj.city_id = this.userInfo.city_id;
      dataObj.id = this.userInfo.id;
      // dataObj.id = this.userInfo.id;
      dataObj.token = this.localStorValue.token;
      // dataObj.role = this.userInfo.role;
      dataObj.phone = formdata.value.phone;
      dataObj.password = this.userInfo.password;

      // formdata.value.name = this.userInfo.name;
      // formdata.value.email = this.userInfo.email;
      // formdata.value.image = this.userInfo.image;
      // // formdata.value.password = 'qazxswe@#$12QAZ';
      // formdata.value.city_id = this.userInfo.city_id;
      // formdata.value.id = this.userInfo.id;
      // formdata.value.token = this.userInfo.token;
      // formdata.value.role = this.userInfo.role;
    } else if (formdata.value.password) {
      formdata.value.name = this.userInfo.name;
      formdata.value.email = this.userInfo.email;
      formdata.value.image = this.userInfo.image;
      formdata.value.phone = this.userInfo.phone;
      formdata.value.city_id = this.userInfo.city_id;
      formdata.value.id = this.userInfo.id;
      formdata.value.token = this.userInfo.token;
      formdata.value.role = this.userInfo.role;
    } else if (formdata.value.city_id) {
      formdata.value.name = this.userInfo.name;
      formdata.value.email = this.userInfo.email;
      // formdata.value.image = this.UserImageName;
      formdata.value.phone = this.userInfo.phone;
      formdata.value.password = 'qazxswe@#$12QAZ';
      formdata.value.id = this.userInfo.id;
      formdata.value.token = this.userInfo.token;
      formdata.value.role = this.userInfo.role;
    }

    console.log('dataObj', dataObj);
    // localStorage.setItem('UserData', JSON.stringify(formdata.value));
    this._UsersService
      .updateUserByIdApi(this.userInfo.id, dataObj)
      .subscribe((res) => {
        console.log('updateUserByIdApi', res);
      });

    this.openBool = false;
    this.openTabs = 'all';
    this.editUserForm.reset();

    // this._Router
    //   .navigateByUrl('/home', { skipLocationChange: true })
    //   .then(() => {
    //     this._Router.navigate([this.location.path()]);
    //   });
  }

  // editUserData(formdata: any) {
  //   var newFormData: any = new FormData();
  //   // let name=this.userInfo.name;
  //   // let email=this.userInfo.email;
  //   // let image=this.userInfo.image;
  //   // let phone=this.userInfo.phone;
  //   // let password=this.userInfo.password;
  //   // let city_id=this.userInfo.city_id;

  //   if (formdata.value.email) {
  //     formdata.value.name = this.userInfo.name;
  //     formdata.value.image = this.userInfo.image;
  //     formdata.value.phone = this.userInfo.phone;
  //     formdata.value.password = 'qazxswe@#$12QAZ';
  //     formdata.value.city_id = this.userInfo.city_id;
  //     formdata.value.id = this.userInfo.id;
  //     formdata.value.token = this.userInfo.token;
  //     formdata.value.role = this.userInfo.role;
  //   } else if (formdata.value.image) {
  //     formdata.value.name = this.userInfo.name;
  //     formdata.value.email = this.userInfo.email;
  //     formdata.value.phone = this.userInfo.phone;
  //     formdata.value.image = this.UserImageName;

  //     formdata.value.password = 'qazxswe@#$12QAZ';
  //     formdata.value.city_id = this.userInfo.city_id;
  //     formdata.value.id = this.userInfo.id;
  //     formdata.value.token = this.userInfo.token;
  //     formdata.value.role = this.userInfo.role;
  //   } else if (formdata.value.phone) {
  //     formdata.value.name = this.userInfo.name;
  //     formdata.value.email = this.userInfo.email;
  //     formdata.value.image = this.userInfo.image;
  //     formdata.value.password = 'qazxswe@#$12QAZ';
  //     formdata.value.city_id = this.userInfo.city_id;
  //     formdata.value.id = this.userInfo.id;
  //     formdata.value.token = this.userInfo.token;
  //     formdata.value.role = this.userInfo.role;
  //   } else if (formdata.value.password) {
  //     formdata.value.name = this.userInfo.name;
  //     formdata.value.email = this.userInfo.email;
  //     formdata.value.image = this.userInfo.image;
  //     formdata.value.phone = this.userInfo.phone;
  //     formdata.value.city_id = this.userInfo.city_id;
  //     formdata.value.id = this.userInfo.id;
  //     formdata.value.token = this.userInfo.token;
  //     formdata.value.role = this.userInfo.role;
  //   } else if (formdata.value.city_id) {
  //     formdata.value.name = this.userInfo.name;
  //     formdata.value.email = this.userInfo.email;
  //     // formdata.value.image = this.UserImageName;
  //     formdata.value.phone = this.userInfo.phone;
  //     formdata.value.password = 'qazxswe@#$12QAZ';
  //     formdata.value.id = this.userInfo.id;
  //     formdata.value.token = this.userInfo.token;
  //     formdata.value.role = this.userInfo.role;
  //   }

  //   newFormData.append('name', formdata.get('name').value);
  //   newFormData.append('email', formdata.get('email').value);
  //   newFormData.append('name', formdata.get('image').value);
  //   newFormData.append('phone', formdata.get('phone').value);
  //   newFormData.append('password', formdata.get('password').value);
  //   newFormData.append('city_id', formdata.get('city_id').value);
  //   newFormData.append('image', formdata.get('image').value);

  //   console.log('formData-formData', formdata.value);
  //   localStorage.setItem('UserData', JSON.stringify(formdata.value));
  //   this._AuthService.userDataLogin.subscribe((res) => {
  //     this.userInfoServ = res;
  //   });

  //   this.openBool = false;
  //   this.openTabs = 'all';

  //   this._Router
  //     .navigateByUrl('/home', { skipLocationChange: true })
  //     .then(() => {
  //       this._Router.navigate([this.location.path()]);
  //     });
  // }
  onFileUserChange(event: any) {
    if (event.target.files.length > 0) {
      this.UserImageName = event.target.files[0].name;
      // this.RegisterUserForm.patchValue({
      //   fileSource: file.name
      // });
    }
  }
  changeIndex(inde: any) {
    this.xindex = inde;
  }

  deleteFun(id: any) {
    this.appoError = false;
    this.errId=id;
    this._UsersService.deleteUserAppointment(id).subscribe(
      (res) => {
        console.log('DELETE-DONE', res);
      },
      (error) => {
        console.log('error-error', error.error.message);

        this.appoError = true;
      }
    );
  }
}
