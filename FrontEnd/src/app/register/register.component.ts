import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { matchpassword } from '../../matchPassword.validators';
import { AllLawerService } from '../services/all-lawer.service';
import { UsersService } from '../services/projectApis/users.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  cities: any;
  Specializes: any;
  cityX: any = 'all';
  Specialize: any = 'all';
  userId: any;

  UserImageName = '';
  LawerImageName = '';
  errorData: any = { email: '', phone: '' };
  constructor(
    public _Router: Router,
    public _AuthService: AuthService,
    public _AllLawerService: AllLawerService,
    public _UsersService: UsersService,
    public _ToastrService: ToastrService
  ) {
    _UsersService.getCitiesApi().subscribe((data) => {
      this.cities = data.data;
      console.log('citiies', data.data);
    });
    _UsersService.getspecializationsApi().subscribe((data) => {
      this.Specializes = data.data;
      console.log('citiies', data.data);
    });
  }
  checkLawer = false;
  clickSubmit = false;
  commonMobile = '';

  RegisterUserForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    city_id: new FormControl('', [Validators.required]),

    email: new FormControl(null, [Validators.required, Validators.email]),

    image: new FormControl(null, [Validators.required]),
    // fileSource: new FormControl(null, [
    //   Validators.required
    // ]),

    phone: new FormControl(null, [
      Validators.required,
      // Validators.minLength(11),

      Validators.pattern('^(\\+201|01|00201)[0-2,5]{1}[0-9]{8}'),
      // Validators.pattern('^(\\+201|01|00201)[0-2,5]{1}[0-9]{8}'),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
      ),
    ]),
  });

  RegisterLawerForm: FormGroup = new FormGroup({
    idImage: new FormControl(null, [Validators.required]),
    // fileSource: new FormControl(null, [
    //   Validators.required
    // ]),
    price: new FormControl(null, [
      Validators.required,
      Validators.min(100),
      Validators.max(400),
    ]),
    specialization_id: new FormControl('', [Validators.required]),
    location: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    about: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(150),
    ]),
    span: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(7),
    ]),
  });

  onFileUserChange(event: any) {
    if (event.target.files.length > 0) {
      this.UserImageName = event.target.files[0].name;
      // this.RegisterUserForm.patchValue({
      //   fileSource: file.name
      // });
    }
  }

  onFileLawerChange(event: any) {
    if (event.target.files.length > 0) {
      this.LawerImageName = event.target.files[0].name;
      // this.RegisterLawerForm.patchValue({
      //   fileSource: file.name
      // });
    }
  }

  getUserData(formUserData: any) {
    if (this.checkLawer) {
      this.clickSubmit = !this.clickSubmit;
      this.checkLawer = false;
      formUserData.value.role = 'lawyer';
      // formUserData.value.IsActive = 'active';
      formUserData.value.image = this.UserImageName;
      // console.log('formUserData.value', formUserData.value);

      this._UsersService.registrUserApi(formUserData.value).subscribe(
        (data) => {
          this._UsersService.getUserApi().subscribe((res) => {
            // console.log('userPart-api', res.data);
            let userPartList = res.data;

            let userPart = userPartList.find((ele: any) => {
              return ele.email == formUserData.value.email;
            });
            console.log('0000000', userPart);
            
            if (userPart) {
              // console.log('AAA-status-userPart-CHECK', userPart.id);
              this.userId = userPart.id;
              console.log('this.userId = userPart.id', this.userId);
            } else {
              // console.log('Status-userPart-NOT-CHECK', userPart);
            }
          });
          // console.log('status-id-CHECK', data);
          // this.userId = data.id;

          this._ToastrService.success('Login Success Done !');
        },
        (error) => {
          // this._ToastrService.warning('Error In Login Please Try Again !!');
          console.log(' this.errorData', error.error.errors);
          this.errorData = error.error.errors;
        }
      );
      // console.log(formUserData);
    } else {
      formUserData.value.image = this.UserImageName;

      this._UsersService.registrUserApi(formUserData.value).subscribe(
        (data) => {
          console.log('ASDASSDDD', data);
          this._Router.navigate(['/login']);

        },
        (error) => {
          // this._ToastrService.warning('Error In Login Please Try Again !!');
          console.log(' this.errorData', error.error.errors);
          this.errorData = error.error.errors;
        }
      );
    }
  }

  getLawerData(formLawerData: any) {
    formLawerData.value.idImage = this.LawerImageName;
    formLawerData.value.user_id = this.userId;
    let lawerWithID = { ...formLawerData.value };
    console.log('new Object------- ', lawerWithID);

    this._UsersService.registrLawerApi(lawerWithID).subscribe((data) => {
      console.log('status---lawer_with-IDDD', data);
    });

    this._Router.navigate(['/login']);
  }

  showLawerRegis() {
    this.checkLawer = !this.checkLawer;
  }

  getCity(event: any) {
    this.cityX = event.target.value;

    // console.log(event.target.value);
  }

  getSpecialize(event: any) {
    this.Specialize = event.target.value;

    // console.log(event.target.value);
  }
}
