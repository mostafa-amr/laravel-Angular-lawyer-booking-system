// import { Component } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Swiper} from 'swiper';
@Component({
  selector: 'app-case-like-yours',
  templateUrl: './case-like-yours.component.html',
  styleUrls: ['./case-like-yours.component.css'],
})
export class CaseLikeYoursComponent implements AfterViewInit {
  image1 = '../../../assets/caseLike/case1.jpg';
  image2 = '../../../assets/caseLike/case2.jpg';
  image3 = '../../../assets/caseLike/case3.jpg';
  image4 = '../../../assets/caseLike/case4.jpg';
  image5 = '../../../assets/caseLike/case5.jpg';
  image6= '../../../assets/caseLike/case6.jpg';

  swiperParams1 = {
    // slidesPerView: 1,
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      947: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  };

  
  swiperParams2 = {
    slidesPerView: 2,
    breakpoints: {
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      "@1.0": {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      "@1.5": {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  };

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    let swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
      Object.assign(swiperEl, this.swiperParams1);
    }
  }
}
