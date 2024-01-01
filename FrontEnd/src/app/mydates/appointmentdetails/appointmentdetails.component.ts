import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/projectApis/users.service';

@Component({
  selector: 'app-appointmentdetails',
  templateUrl: './appointmentdetails.component.html',
  styleUrls: ['./appointmentdetails.component.css'],
})
export class AppointmentdetailsComponent {
  appointment_id: any;
  localStorValue: any;
  userAppointment: any;
  userInfo: any;
  appointmentDetails: any;
  error: any;

  constructor(
    public _Router: Router,
    public _AuthService: AuthService,
    public _ToastrService: ToastrService,
    public _UsersService: UsersService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    if (localStorage.getItem('UserData')) {
      this.localStorValue = localStorage.getItem('UserData');
      this.localStorValue = JSON.parse(this.localStorValue);

      this.userInfo = this.localStorValue;
    }
    this.appointment_id = _ActivatedRoute.snapshot.paramMap.get('id');

    this._UsersService
      .getUserAppointment(this.userInfo.id)
      .subscribe((res: any) => {
        this.userAppointment = res.data.appointments;
        console.log('this.userAppointment', this.userAppointment);
        console.log('this.this.appointment_id', this.appointment_id);

        for (const iterator of this.userAppointment) {
          if (iterator.id == this.appointment_id) {
            this.appointmentDetails = iterator;
          }
        }
      });
  }

  commentForm: FormGroup = new FormGroup({
    comment: new FormControl(null, [Validators.required]),
    rate: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(5),
    ]),

    // password: new FormControl(null, [
    //   Validators.required,
    //   Validators.pattern(
    //     '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
    //   ),
    // ]),
  });

  addComment(formData: any) {
    formData.value.appointment_id = this.appointment_id;
    console.log('formUserData', formData.value);
    // console.log('this.lawer.id', this.lawer.id);

    this._UsersService
      .addComment(this.appointment_id, formData.value)
      .subscribe(
        (res: any) => {
          console.log('ressssssss', res);
          this.commentForm.reset();
        },
        (error: any) => {
          console.log(' this.errorData', error.error);
          this.error = error.error;
          this.commentForm.reset();
        }
      );
  }
}
