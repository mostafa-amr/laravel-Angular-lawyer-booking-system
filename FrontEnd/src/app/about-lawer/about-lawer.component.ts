import { UsersService } from 'src/app/services/projectApis/users.service';
import { Component } from '@angular/core';
import { AllLawerService } from '../services/all-lawer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-about-lawer',
  templateUrl: './about-lawer.component.html',
  styleUrls: ['./about-lawer.component.css'],
})
export class AboutLawerComponent {
  id: any = '';

  lawer: any = [];
  Reviws: any = [];
  error: any;
  localStorValue: any;
  userInfo: any;
  userInfo_id: any;
  errorData: any = { email: '', phone: '' };
  constructor(
    public _AllLawerService: AllLawerService,
    public _ActivatedRoute: ActivatedRoute,
    public _UsersService: UsersService,
    public _Router: Router,
    public _AuthService: AuthService
  ) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    if (localStorage.getItem('UserData')) {
      this.localStorValue = localStorage.getItem('UserData');
      let objData = JSON.parse(this.localStorValue);
      this.userInfo = objData;
      this.userInfo_id = objData.id;

      console.log('this.userInfo', this.userInfo.id);
    }
    // _AllLawerService.getOneLawer(this.id).subscribe((data) => {
    //   // this.lawer = data;
    //   // console.log(data);
    // });
    // _AllLawerService.getOneLawerApi(this.id).subscribe((data) => {
    //   this.lawer = data.data;
    //   // console.log(data.data);
    // });
    // _AllLawerService.deleteOneLawerApi(this.id).subscribe((data) => {
    //   // this.lawer = data.data;
    //   console.log(data.data);
    // });

    // _AllLawerService.getOneReviws(this.id).subscribe((data) => {
    //   // this.Reviws = data;
    //   // console.log(data);
    // });
    _UsersService.getAllReviews(this.id).subscribe((data) => {
      this.Reviws = data.data;
      console.log(this.Reviws);
    });
    _UsersService.getOneLawerApi(this.id).subscribe((data) => {
      this.lawer = data.data;
      console.log(this.lawer);
    });
  }
  uploadeImage = '../../assets/imageDataBase/';

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
    console.log('formUserData', formData.value);
    console.log('this.lawer.id', this.lawer.id);

    this._UsersService.addComment(this.lawer.id, formData.value).subscribe(
      (res: any) => {
        // console.log('ressssssss', res);
        let token = res[0];
        let data = res[1][0] ? res[1][0] : res[1];

        // console.log('resssssssstoken', token);
        // console.log('ressssssssdata', data);
        let userData = { token: token, ...data };
        localStorage.setItem('UserData', JSON.stringify(userData));
      },
      (error: any) => {
        console.log(' this.errorData', error.error);
        this.error = error.error;
        this.commentForm.reset();
      }
    );

    // this._Router.navigate(['/home']);
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  addToFollowers(id: any) {
    console.log('addToFollowers_lawyer_id', id);
    console.log('addToFollowers_userInfo_id', this.userInfo_id);
    let data={
      "lawyer_id":id,
      "user_id":this.userInfo_id
    }
    console.log("data",data);
    
    this._UsersService.addFollowers(data).subscribe((res) => {
      console.log('addFollowers_res', res);
    });
  }
}
