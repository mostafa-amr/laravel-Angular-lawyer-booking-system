import { ToastrService } from 'ngx-toastr';
import { UsersService } from './../services/projectApis/users.service';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent {
  postList: any;
  usersList: any;
  show = false;
  idGroup = -1;
  isJoin = false;
  isIdJoin = 0;
  groupName = 'name';
  xindex = 0;
  xindexBtn = 0;
  openForm = false;
  localStorValue: any;
  userInfo: any;
  userRole: any;
  GroupsById: any;
  isLogin: any;
  userId: any;
  token: any;
  indexName = -1;
  // groupsUpdate:BehaviorSubject
  groupList: any;
  arrOfObj: any;
  newArrOfObj: any;
  // groupList=new BehaviorSubject<any>([]);
  groupsUpdate = new BehaviorSubject<any>({});

  constructor(
    public _UsersService: UsersService,
    public _Router: Router,
    public _AuthService: AuthService,
    public _ToastrService: ToastrService
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

      // console.log('this.userInfo-groups', this.userInfo);
      // console.log('this.userId-groups', this.userId);
      // console.log('this.token', this.token);
      // console.log('this.isLogin', this._AuthService.isLogin);
    } else {
      this._AuthService.isLogin.next(false);
    }

    // _UsersService.getAllGroupsApi().subscribe((res) => {
    //   console.log('res.data-----X----', res.data);

    //   let all = res.data;
    //   // let allBoll = all.bool;
    //   console.log('allall', all);
    //   this.groupsUpdate.next(all);
    //   console.log('ssssssss', this.groupsUpdate.value);
    //   this.groupList = this.groupsUpdate.value;
    // });
    _UsersService.getAllGroupsApi().subscribe((res) => {
      // console.log('res.data-----X----', res.data);

      this.arrOfObj = res.data;

      for (const iterator of this.arrOfObj) {
        // console.log("this.userId",this.userId);

        for (const user of iterator.users) {
          if (user.id == this.userId) {
            iterator.joined = true;
            // console.log("hello",user.id);
          }
        }
      }
      console.log('this.arrOfObj', this.arrOfObj);
      console.log('this.groupList', this.groupList);

      // let allBoll = all.bool;
      // console.log('allall', this.arrOfObj);
      // this.groupsUpdate.next(all);
      // console.log('ssssssss', this.groupsUpdate.value);
      // this.groupList = this.groupsUpdate.value;
    });

    // if (this.userRole == 'user') {
    //   this._UsersService
    //     .getGroupsByIdApi(this.userInfo?.id)
    //     .subscribe((res) => {
    //       console.log('res.data', res.data);
    //       console.log('res.data', res.data.groups);
    //       this.GroupsById = res.data;
    //     });
    // } else if (this.userRole == 'lawyer') {
    //   this._UsersService
    //     .getGroupsByIdApi(this.userInfo?.user_id)
    //     .subscribe((res) => {
    //       console.log('res.data', res.data);
    //       console.log('res.data', res.data.groups);
    //       this.GroupsById = res.data;
    //     });
    // }
    // console.log("this.GroupsById" , this.GroupsById);

    this._UsersService.getUserApi().subscribe((res) => {
      // console.log('res.data', res.data);
      // console.log('res.data', res.data.groups);
      this.usersList = res.data;
    });

    // this._UsersService.getGroupsByIdApi().subscribe((res) => {
    //   console.log('res.data', res.data);
    //   console.log('res.data', res.data.groups);
    //   this.usersList = res.data;
    // });
  }

  createForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });

  viewPost(id: any) {
    // this._UsersService.getAllGroupsApi().subscribe((res)=>{
    //   // console.log(res.data);

    //   this.postList=res.data;
    // });
    this.idGroup = id;
    this.show = true;
  }

  viewPostUser() {
    // this._UsersService.getUserApi().subscribe((res)=>{
    // console.log('IIIDDDD');
    //   console.log("res.data",res.data);
    //   this.usersList=res.data;
    // });
  }
  joinGroup(id: any) {
    // this._UsersService.getUserApi().subscribe((res)=>{
    this.indexName = id;
    // console.log('ooooooo', id);
    // let obj={}

    let isjoin = 1;
    let obj = {
      isjoin: 1,
    };

    // this.groupsUpdate.next(all)

    // this._UsersService.updateGroupsApi(id, obj).subscribe((res) => {
    //   console.log('xxxxxxxx', res);
    // });
    this._UsersService.checkJoining(id, obj).subscribe((res) => {
      // console.log('checkJoining', res);
    });

    //   console.log("res.data",res.data);
    //   this.usersList=res.data;
    // });
    // this.isJoin = !this.isJoin;
    this.xindexBtn = id;
    // this.xindexBtn = id;
  }

  changeIndex(inde: any) {
    this.xindex = inde;
  }

  openCreatForm() {
    this.openForm = !this.openForm;
  }

  createGroup(formData: any) {
    formData.value.user_id = this.userId;
    // console.log('formCreateData ', formData.value);
    this._UsersService.createGroupsApi(formData.value).subscribe((res) => {
      // console.log('createGroupsApi');
    });
  }
}
