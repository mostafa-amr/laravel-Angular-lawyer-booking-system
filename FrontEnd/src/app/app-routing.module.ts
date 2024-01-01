import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PracticeAreaComponent } from './practice-area/practice-area.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FreeConsultComponent } from './free-consult/free-consult.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LawerComponent } from './lawer/lawer.component';
import { AllLawerComponent } from './all-lawer/all-lawer.component';
import { TestTopicComponent } from './test-topic/test-topic.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TopicDeatailsComponent } from './topic-deatails/topic-deatails.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LawerDetailsComponent } from './lawer-details/lawer-details.component';
import { LandingSearchComponent } from './landing-search/landing-search.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OneProductComponent } from './one-product/one-product.component';
import { LawersTestComponent } from './lawers-test/lawers-test.component';
import { OneLawersTestComponent } from './one-lawers-test/one-lawers-test.component';
import { OneLawersReservationComponent } from './one-lawers-reservation/one-lawers-reservation.component';
import { AboutLawerComponent } from './about-lawer/about-lawer.component';
import { GroupComponent } from './group/group.component';
import { MyroupComponent } from './myroup/myroup.component';
import { authgardGuard } from './services/guard/authgard.guard';
import { lawergaurdGuard } from './services/guard/lawergaurd.guard';
import { isloginGuard } from './services/guard/islogin.guard';
import { DatesComponent } from './dates/dates.component';
import { MydatesComponent } from './mydates/mydates.component';
import { NotautherComponent } from './notauther/notauther.component';
import { AppointmentdetailsComponent } from './mydates/appointmentdetails/appointmentdetails.component';
import { NotificationComponent } from './notification/notification.component';
import { WaitforverifiyComponent } from './waitforverifiy/waitforverifiy.component';
import { TestComponent } from './admin/test/test.component';
import { AcityCreateComponent } from './admin/test/acity-create/acity-create.component';
import { AcityEditComponent } from './admin/test/acity-edit/acity-edit.component';
import { AspecializationComponent } from './admin/aspecialization/aspecialization.component';
import { AspecializationsCreateComponent } from './admin/aspecialization/aspecializations-create/aspecializations-create.component';
import { AspecializationsEditComponent } from './admin/aspecialization/aspecializations-edit/aspecializations-edit.component';
import { CreateLawyerDeatailsComponent } from './admin/alawyer-details/create-lawyer-deatails/create-lawyer-deatails.component';
import { EditUserComponent } from './admin/users/user-fun/edit-user/edit-user.component';
import { AdminListUsersComponent } from './admin/users/user-fun/admin-list-users/admin-list-users.component';
import { adminguardGuard } from './services/guard/adminguard.guard';
import { CreateUserComponent } from './admin/users/user-fun/create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'practice',
    component: PracticeAreaComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'dates',
    component: DatesComponent,
  },
  {
    path: 'mydates',
    component: MydatesComponent,
  },
  {
    path: 'freeConsult',
    component: FreeConsultComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'alllawer',
    component: AllLawerComponent,
    canActivate: [authgardGuard],
  },
  {
    path: 'topic',
    component: TestTopicComponent,
  },
  {
    path: 'Reservation',
    component: ReservationComponent,
    canActivate: [authgardGuard],
  },
  {
    path: 'oneLawerReservation/:id/:dateId/:day/:start_hour/:end_hour',
    component: OneLawersReservationComponent,
    canActivate: [authgardGuard],
  },

  // DASHBOARD

  {
    path: 'admin',
    canActivate: [adminguardGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'admin/users/create',
    component: CreateUserComponent,
    canActivate: [adminguardGuard],
  },
  {
    path: 'admin/users/edit/:id',
    component: EditUserComponent,
    canActivate: [adminguardGuard],
  },
  {
    path: 'admin/users/view/:id',
    component: AdminListUsersComponent,
    canActivate: [adminguardGuard],
  },
  {
    path: 'admin/cities',
    component: TestComponent,
    canActivate: [adminguardGuard],
  },
  {
    path: 'admin/cities/create',
    component: AcityCreateComponent,
    canActivate: [adminguardGuard],
  },
  {
    path: 'admin/cities/edit/:id',
    component: AcityEditComponent,
    canActivate: [adminguardGuard],
  },
  {
    path: 'admin/specializations',
    component: AspecializationComponent,
    canActivate: [adminguardGuard],
  },
  {
    path: 'admin/specializations/create',
    component: AspecializationsCreateComponent,
    canActivate: [adminguardGuard],
  },
  {
    path: 'admin/specializations/edit/:id',
    component: AspecializationsEditComponent,
    canActivate: [adminguardGuard],
  },
  {
    path: 'admin/lawyerDetails/create/:id',
    component: CreateLawyerDeatailsComponent,
    canActivate: [adminguardGuard],
  },
  // {
  //   path: 'oneLawerReservation/:id/:from/:to',
  //   component: OneLawersReservationComponent,
  // },
  {
    path: 'landingSearch',
    component: LandingSearchComponent,
    canActivate: [authgardGuard],
  },
  {
    path: 'adminProfile',
    component: AdminProfileComponent,
    canActivate: [lawergaurdGuard],
  },
  {
    path: 'userProfile',
    component: UserProfileComponent,
    canActivate: [authgardGuard],
  },
  {
    path: 'topic/:id',
    component: TopicDeatailsComponent,
  },
  {
    path: 'lawerDetail/:id',
    component: LawerDetailsComponent,
  },
  {
    path: 'oneProduct/:id',
    component: OneProductComponent,
  },
  {
    path: 'lawersTest',
    component: LawersTestComponent,
  },
  {
    path: 'admin/users/create',
    component: CreateUserComponent,
  },

  {
    path: 'lawersTest/:data',
    component: LawersTestComponent,
  },
  {
    path: 'allgroups',
    component: GroupComponent,
    canActivate: [isloginGuard],
  },
  {
    path: 'mygroup',
    component: MyroupComponent,
    canActivate: [authgardGuard],
  },
  {
    path: 'notification',
    component: NotificationComponent,
    canActivate: [authgardGuard],
  },
  {
    path: 'lawersTest/:id',
    component: OneLawersTestComponent,
  },
  {
    path: 'aboutLawer/:id',
    component: AboutLawerComponent,
  },
  {
    path: 'alllawer/:city/:specializ/:name',
    component: LawersTestComponent,
    canActivate: [authgardGuard],
  },
  {
    path: 'notAuth',
    component: NotautherComponent,
  },
  {
    path: 'waitForVerifiy',
    component: WaitforverifiyComponent,
  },
  {
    path: 'appointmentDetails/:id',
    component: AppointmentdetailsComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
