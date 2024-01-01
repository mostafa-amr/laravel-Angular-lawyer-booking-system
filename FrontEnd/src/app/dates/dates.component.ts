import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/projectApis/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
})
export class DatesComponent {
  localStorValue: any;
  userInfo: any;
  token: any;

  constructor(public _UsersService: UsersService,public _Router:Router) {
    if (localStorage.getItem('UserData')) {
      this.localStorValue = localStorage.getItem('UserData');
      let objData = JSON.parse(this.localStorValue);
      this.userInfo = objData;
      this.token = objData.token;

      console.log('this.userInfo', this.userInfo);
      // console.log('this.token', this.token);

      // this._Router.navigateByUrl('/userProfile', { skipLocationChange: true }).then(() => {
      //   this._Router.navigate([this.location.path()]);
      // });
      // console.log('this.isLogin', this._AuthService.isLogin);
    } else {
      // this._AuthService.isLogin.next(false);
    }
  }

  dateForm: FormGroup = new FormGroup({
    day: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    start_hour: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    end_hour: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });

  createDate(formData: any) {
    formData.value.lawyer_id = this.userInfo.id;
    console.log('formData:any', formData.value);
    let newArr={
      day:formData.value.day,
      start_hour:formData.value.start_hour,
      end_hour:formData.value.end_hour,
      lawyer_id:this.userInfo.id,
    }

    this._UsersService.addDates(newArr).subscribe((res) => {
      console.log('addDates', res);
      this.dateForm.reset();
      this._Router.navigate(['/mydates'])

    });
  }
}
