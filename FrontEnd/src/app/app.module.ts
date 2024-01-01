import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PracticeAreaComponent } from './practice-area/practice-area.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FreeConsultComponent } from './free-consult/free-consult.component';
import { HomeComponent } from './home/home.component';
import { OurPracticeAreaComponent } from './home/our-practice-area/our-practice-area.component';
import { HowitWorksComponent } from './home/howit-works/howit-works.component';
import { CaseLikeYoursComponent } from './home/case-like-yours/case-like-yours.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { OurExpertTeamComponent } from './home/our-expert-team/our-expert-team.component';
import { PracticeDetailsComponent } from './home/practice-details/practice-details.component';
import { ContractComponent } from './home/contract/contract.component';
import { OurClientComponent } from './home/our-client/our-client.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './home/landing/landing.component';
import { LawerComponent } from './lawer/lawer.component';
import { AllLawerComponent } from './all-lawer/all-lawer.component';
import { CommonModule } from '@angular/common';
import { TestTopicComponent } from './test-topic/test-topic.component';
// register Swiper custom elements
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TopicDeatailsComponent } from './topic-deatails/topic-deatails.component';
import { LandingSearchComponent } from './landing-search/landing-search.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LawerDetailsComponent } from './lawer-details/lawer-details.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
// import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OneProductComponent } from './one-product/one-product.component';
import { LawersTestComponent } from './lawers-test/lawers-test.component';
import { OneLawersTestComponent } from './one-lawers-test/one-lawers-test.component';
import { OneLawersReservationComponent } from './one-lawers-reservation/one-lawers-reservation.component';
import { AboutLawerComponent } from './about-lawer/about-lawer.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './about/skills/skills.component';
import { RullesComponent } from './about/rulles/rulles.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupComponent } from './group/group.component';
import { MyroupComponent } from './myroup/myroup.component';
import { DatesComponent } from './dates/dates.component';
import { MydatesComponent } from './mydates/mydates.component';
import { NotautherComponent } from './notauther/notauther.component';
import { AppointmentdetailsComponent } from './mydates/appointmentdetails/appointmentdetails.component';
import { NotificationComponent } from './notification/notification.component';
import { WaitforverifiyComponent } from './waitforverifiy/waitforverifiy.component';
import { AdminModule } from './admin/admin.module';


register();
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PracticeAreaComponent,
    FaqComponent,
    BlogComponent,
    ContactComponent,
    FreeConsultComponent,
    HomeComponent,
    OurPracticeAreaComponent,
    HowitWorksComponent,
    CaseLikeYoursComponent,
    OurExpertTeamComponent,
    PracticeDetailsComponent,
    ContractComponent,
    OurClientComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    LawerComponent,
    AllLawerComponent,
    TestTopicComponent,
    ErrorPageComponent,
    TopicDeatailsComponent,
    LandingSearchComponent,
    ReservationComponent,
    LawerDetailsComponent,
    AdminProfileComponent,
    UserProfileComponent,
    OneProductComponent,
    LawersTestComponent,
    OneLawersTestComponent,
    OneLawersReservationComponent,
    AboutLawerComponent,
    SkillsComponent,
    RullesComponent,
    GroupComponent,
    MyroupComponent,
    DatesComponent,
    MydatesComponent,
    NotautherComponent,
    AppointmentdetailsComponent,
    NotificationComponent,
    WaitforverifiyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
