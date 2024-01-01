import { UsersService } from 'src/app/services/projectApis/users.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mydates',
  templateUrl: './mydates.component.html',
  styleUrls: ['./mydates.component.css'],
})
export class MydatesComponent {
  showForm = false;
  day = '';
  start = '';
  end = '';
  id = '';
  localStorValue: any;
  userInfo: any;
  allDates: any;

  lawyer_time_id:any;

  constructor(
    public _UsersService: UsersService,
    public _Router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    if (localStorage.getItem('UserData')) {
      this.localStorValue = localStorage.getItem('UserData');
      let objData = JSON.parse(this.localStorValue);
      this.userInfo = objData;
    }

    _UsersService.getOneLawerDates(this.userInfo.id).subscribe((res: any) => {
      let x = res.data;
      this.allDates = x;
      console.log('done', x);
    });
  }
  dateForm: FormGroup = new FormGroup({
    day: new FormControl(this.day, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    start_hour: new FormControl(this.start, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    end_hour: new FormControl(this.end, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });

  editDate(formData: any) {
    // let lawyer = this.userInfo.id;
    formData.value.lawyer_id = this.userInfo.id;
    console.log('formData: any', formData.value);
    console.log('lawyer_time_id', this.lawyer_time_id);
    // console.log('lawyer', lawyer);
    // let arr = [
    //   formData.value.lawyer_id,
    //   formData.value.day,
    //   formData.value.start_hour,
    //   formData.value.end_hour,
    // ];
    // console.log('arrarrarr', arr);
    // console.log('arrarrarr', arr[0]);

    this._UsersService.updateOneLawerDates(this.lawyer_time_id,formData.value).subscribe((res) => {
      console.log('updateOneLawerDates', res);
    });

    this._Router
      .navigateByUrl('/home', { skipLocationChange: true })
      .then(() => {
        this._Router.navigate([this.location.path()]);
      });
  }

  deleteFun(id:any){

    console.log(id);
    
  this._UsersService.deleteOneLawerDates(id).subscribe((res) => {
      console.log('deleteOneLawerDates', res);
    });

    this._Router
      .navigateByUrl('/home', { skipLocationChange: true })
      .then(() => {
        this._Router.navigate([this.location.path()]);
      });
      
  }
  showFormFun(id: any) {
    this.showForm = !this.showForm;
    // this.id = id;
    // this.day = day;
    // this.start = start;
    // this.end = end;
    this.lawyer_time_id=id;
  }
  closeWindow() {
    this.showForm = !this.showForm;
  }
}
