import { Component } from '@angular/core';
import { UsersService } from '../services/projectApis/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
})
export class AdminProfileComponent {
  openBool: any = false;
  openTabs: any = 'all';
  openSecBool: any = false;
  openSecTabs: any = 'all';
  xindex = 0;

  localStorValue: any;
  userIdGroup: any;
  usersList: any;
  adminGroupsList: any;
  subscripGroup: any;

  userInfo: any;
  userInfoServ: any;
  name = '';
  email = '';
  image = '';
  phone = '';
  password = '';
  span = '';
  price = '';
  locationlawer = '';
  about = '';
  city_id = '';
  UserImageName: any;
  lawyer_id: any;
  dataLawer: any;
  allFollowers: any;
  userAppointment: any;

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
      _AuthService.userDataLogin.next(this.localStorValue);
      _AuthService.userDataLogin.subscribe((res) => {
        this.userInfoServ = res;
      });

      _UsersService.getOneLawerApi(this.localStorValue.id).subscribe((res) => {
        this.userInfo = res.data;
        console.log('this.userInfo=res.data', this.userInfo);
      });
      _UsersService
        .getAllFollowers(this.localStorValue.id)
        .subscribe((res: any) => {
          this.allFollowers = res.data;
          console.log('this.allFollowers', this.allFollowers);
        });

      // this.userInfo = this.localStorValue;
      // this.lawyer_id = this.userInfo.id;
      // this.name = this.userInfo.name;
      // this.email = this.userInfo.email;
      // this.image = this.userInfo.image;
      // this.phone = this.userInfo.phone;
      // this.password = this.userInfo.password;
      // this.city_id = this.userInfo.city_id;

      // this.span = this.userInfo.city_id;
      // this.price = this.userInfo.city_id;
      // this.location = this.userInfo.city_id;
      // this.about = this.userInfo.city_id;
      // this.name=this.userInfo.name;
      this.userIdGroup = this.localStorValue.id;

      console.log('UserProfile-login-ID', this.userIdGroup);
      console.log('UserProfile-login-userInfo', this.userIdGroup);
    }
    // this._UsersService.getUserApi().subscribe((res) => {
    //   console.log('res.data', res.data);
    //   console.log('res.data', res.data.groups);
    //   this.usersList = res.data;
    // });

    // this._UsersService.getGroupAsAdmin(this.userIdGroup).subscribe((res) => {
    //   console.log('Groups-As-Admin', res.data.groupsAsAdmin);
    //   // let x=
    //   this.adminGroupsList = res.data.groupsAsAdmin;
    //   this.subscripGroup = res.data.groups;
    // });

    // this._UsersService
    //   .getUserAppointment(this.userInfo.id)
    //   .subscribe((res: any) => {
    //     this.userAppointment = res.data.appointments;
    //     console.log('this.userAppointment', this.userAppointment);
    //   });
  }
  uploadeImage = '../../assets/imageDataBase/';

  editFormAsUser: FormGroup = new FormGroup({
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

  editFormAsLawer: FormGroup = new FormGroup({
    // let x="";
    span: new FormControl(null, [
      Validators.required,
      Validators.max(5),
      // Validators.maxLength(8),
    ]),
    price: new FormControl(null, [Validators.required]),

    location: new FormControl(null, [Validators.required]),

    about: new FormControl(null, [Validators.required]),
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
      dataObj.name = this.userInfo.user.name;
      dataObj.image = this.userInfo.user.image;
      dataObj.phone = this.userInfo.user.phone;
      // dataObj.email = this.userInfo.user.email;
      dataObj.city_id = this.userInfo.user.city_id;
      dataObj.id = this.userInfo.user.id;
      // dataObj.id = this.userInfo.id;
      dataObj.token = this.userInfo.token;
      // dataObj.role = this.userInfo.role;
      dataObj.email = formdata.value.email;
      dataObj.password = this.localStorValue.password;

      // formdata.value.name = this.userInfo.name;
      // formdata.value.image = this.userInfo.image;
      // formdata.value.phone = this.userInfo.phone;
      // formdata.value.city_id = this.userInfo.city_id;
      // formdata.value.id = this.userInfo.id;
      // formdata.value.token = this.userInfo.token;
      // formdata.value.role = this.userInfo.role;
    } else if (formdata.value.image) {
      dataObj.name = this.userInfo.user.name;
      // dataObj.image = this.userInfo.user.image;
      dataObj.phone = this.userInfo.user.phone;
      dataObj.email = this.userInfo.user.email;
      dataObj.city_id = this.userInfo.user.city_id;
      dataObj.id = this.userInfo.user.id;
      // dataObj.id = this.userInfo.id;
      dataObj.token = this.userInfo.token;
      // dataObj.role = this.userInfo.role;
      dataObj.image = this.UserImageName;
      dataObj.password = this.localStorValue.password;

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
      dataObj.name = this.userInfo.user.name;
      dataObj.image = this.userInfo.user.image;
      // dataObj.phone = this.userInfo.user.phone;
      dataObj.email = this.userInfo.user.email;
      dataObj.city_id = this.userInfo.user.city_id;
      dataObj.id = this.userInfo.user.id;
      // dataObj.id = this.userInfo.id;
      dataObj.token = this.userInfo.token;
      // dataObj.role = this.userInfo.role;
      dataObj.phone = formdata.value.phone;
      dataObj.password = this.localStorValue.password;

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
      .updateUserByIdApi(this.userInfo.user.id, dataObj)
      .subscribe((res) => {
        console.log('updateUserByIdApi', res);
      });

    this.openBool = false;
    this.openTabs = 'all';
    this.editFormAsUser.reset();

    // this._Router
    //   .navigateByUrl('/home', { skipLocationChange: true })
    //   .then(() => {
    //     this._Router.navigate([this.location.path()]);
    //   });
  }


  editLawerData(formdata: any) {
    if (formdata.value.span) {
      // formdata.value.span = this.userInfo.span;
      this.dataLawer = formdata.value.span;
      formdata.value.price = this.userInfo.price;
      formdata.value.about = this.userInfo.about;
      formdata.value.location = this.userInfo.location;
    } else if (formdata.value.price) {
      this.dataLawer = formdata.value.price;

      formdata.value.span = this.userInfo.span;
      // formdata.value.price = this.userInfo.price;
      formdata.value.about = this.userInfo.about;
      formdata.value.location = this.userInfo.location;
    } else if (formdata.value.about) {
      this.dataLawer = formdata.value.about;

      formdata.value.span = this.userInfo.span;
      formdata.value.price = this.userInfo.price;
      // formdata.value.about = this.userInfo.about;
      formdata.value.location = this.userInfo.location;
    } else if (formdata.value.location) {
      this.dataLawer = formdata.value.location;

      formdata.value.span = this.userInfo.span;
      formdata.value.price = this.userInfo.price;
      formdata.value.about = this.userInfo.about;
      // formdata.value.location = this.userInfo.location;
    }

    console.log('formData-formData', formdata.value);
    // localStorage.setItem('UserData', JSON.stringify(formdata.value));
    // this._AuthService.userDataLogin.subscribe((res) => {
    //   this.userInfoServ = res;
    // });

    this.openSecBool = false;
    this.openSecTabs = 'all';

    console.log('this.dataLawer', formdata.value);
    // console.log('this.dataLawer', this.dataLawer);
    console.log('this.userInfo', this.userInfo.id);

    this._UsersService
      .updateOneLawerApi(this.userInfo.id, formdata.value)
      .subscribe((res) => {
        console.log('resssssUpdate', res);
      });
    this.editFormAsLawer.reset();

    this._Router
      .navigateByUrl('/home', { skipLocationChange: true })
      .then(() => {
        this._Router.navigate([this.location.path()]);
      });
  }
  // openWindow(pic: any) {
  //   this.openBool = !this.openBool;
  //   this.openTabs = pic;
  // }
  // closeWindow() {
  //   this.openBool = !this.openBool;
  // }

  onFileUserChange(event: any) {
    if (event.target.files.length > 0) {
      this.UserImageName = event.target.files[0].name;
      // this.RegisterUserForm.patchValue({
      //   fileSource: file.name
      // });
    }
  }
  openSecondWindow(pic: any) {
    this.openSecBool = !this.openSecBool;

    console.log('pic pic', pic);
    // this.openSecTabs = 'all';
    this.openSecTabs = pic;
  }
  closeSecondWindow() {
    this.openSecBool = !this.openSecBool;
    this.openSecTabs = 'all';
  }
  changeIndex(inde: any) {
    this.xindex = inde;
  }
  // editUserData(formdata: any) {}

  // changeIndex(inde: any) {
  //   this.xindex = inde;
  // }
  dleteFollowers(id: any) {
    console.log('dleteFollowers', id);

    this._UsersService.deleteOneFollowers(id).subscribe((res) => {
      console.log('deleteOneFollowers', res);
    });
  }
}
