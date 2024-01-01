import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashchartComponent } from './dashchart/dashchart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UsersComponent } from './users/users.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { UserFunModule } from './users/user-fun/user-fun.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcityCreateComponent } from './test/acity-create/acity-create.component';
import { AcityEditComponent } from './test/acity-edit/acity-edit.component';
import { AspecializationComponent } from './aspecialization/aspecialization.component';
import { AspecializationsCreateComponent } from './aspecialization/aspecializations-create/aspecializations-create.component';
import { AspecializationsEditComponent } from './aspecialization/aspecializations-edit/aspecializations-edit.component';
import { AlawyerDetailsComponent } from './alawyer-details/alawyer-details.component';
import { CreateLawyerDeatailsComponent } from './alawyer-details/create-lawyer-deatails/create-lawyer-deatails.component';
// import { AdminComponent } from './admin.component';
import {ThemePalette} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


const adminRoutes: Routes = [
  {
    path: '',
    component: DashchartComponent,
   
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  { path: 'admin/users', loadChildren: () => import('./users/user-fun/user-fun.module')
  .then(m => m.UserFunModule) }
];

@NgModule({
  declarations: [
    NavigationComponent,
    DashchartComponent,
    UsersComponent,
    TestComponent,
    AcityCreateComponent,
    AcityEditComponent,
    AspecializationComponent,
    AspecializationsCreateComponent,
    AspecializationsEditComponent,
    AlawyerDetailsComponent,
    CreateLawyerDeatailsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatBadgeModule,
    MatTabsModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    HttpClientModule,
    UserFunModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [NavigationComponent,
    DashchartComponent,
    RouterModule,
    TestComponent
    
  ]
})
export class AdminModule { }
