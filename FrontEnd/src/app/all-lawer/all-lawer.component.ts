import { Component } from '@angular/core';

@Component({
  selector: 'app-all-lawer',
  templateUrl: './all-lawer.component.html',
  styleUrls: ['./all-lawer.component.css']
})
export class AllLawerComponent {
  
image1="../../assets/ourExpert/team5.jpg";
image2="../../assets/ourExpert/team6.jpg";
image3="../../assets/ourExpert/team7.jpg";
image4="../../assets/ourExpert/team8.jpg";
image5="../../assets/ourExpert/team9.jpg";

imageDate1 = '../../../assets/caseLike/case1.jpg';
imageDate2 = '../../../assets/caseLike/case2.jpg';
imageDate3 = '../../../assets/caseLike/case3.jpg';
imageDate4 = '../../../assets/caseLike/case4.jpg';
imageDate5 = '../../../assets/caseLike/case5.jpg';
imageDate6= '../../../assets/caseLike/case6.jpg';



swiperParams1 = {
  // slidesPerView: 1,
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 5,
    }
  },
};
swiperParams2 = {
  // slidesPerView: 1,
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 5,
    }
  },
};

ngAfterViewInit(): void {
  // throw new Error('Method not implemented.');
  // let swiperEl = document.querySelector('swiper-container');
  // if (swiperEl) {
  //   Object.assign(swiperEl, this.swiperParams1);
    
  // }

  let swiperEl: any = document.querySelectorAll('swiper-container');

  swiperEl.forEach((element: any) => {
    if (element) {
      Object.assign(element, this.swiperParams1);
    }
  });
}
}
