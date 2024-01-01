import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(public _Router:Router , public location:Location){
    
    
    // this._Router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
    //   this._Router.navigate([this.location.path()]);
    // });
  }

  image1 = '../../../assets/landing/landing1.jpg';
  image2 = '../../../assets/landing/landing4.jpg';
  image3 = '../../../assets/landing/landing5.jpg';





}
