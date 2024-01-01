import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFunRoutingModule } from './user-fun-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { AdminListUsersComponent } from './admin-list-users/admin-list-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ThemePalette} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { TestComponent } from '../../test/test.component';
import { EditMainDataComponent } from './edit-user/edit-main-data/edit-main-data.component';
import { LawyerEditDetailsComponent } from './edit-user/lawyer-edit-details/lawyer-edit-details.component';
import { PassEditComponent } from './edit-user/pass-edit/pass-edit.component';
@NgModule({
  declarations: [
    CreateUserComponent,
    AdminListUsersComponent,
    EditUserComponent,
    EditMainDataComponent,
    LawyerEditDetailsComponent,
    PassEditComponent,
    
    
  ],
  imports: [
    CommonModule,
    UserFunRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule
  ],
  exports:[
    AdminListUsersComponent,
EditUserComponent
  ]
})
export class UserFunModule { }
