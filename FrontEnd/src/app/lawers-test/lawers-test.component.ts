import { UsersService } from 'src/app/services/projectApis/users.service';
import { Component } from '@angular/core';
import { AllLawerService } from '../services/all-lawer.service';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/projectApis/search.service';

@Component({
  selector: 'app-lawers-test',
  templateUrl: './lawers-test.component.html',
  styleUrls: ['./lawers-test.component.css'],
})
export class LawersTestComponent {
  allLawers: any = [];
  allReviw: any = [];

  lawerCity: any;
  lawerSpecia: any;
  lawersData: any;
  dates: any;

  searchData: any;

  constructor(
    public _AllLawerService: AllLawerService,
    public _ActivatedRoute: ActivatedRoute,
    public _SearchService: SearchService,
    public _UsersService: UsersService
  ) {
    _SearchService.searchData.subscribe((data) => {
      console.log('_SearchService.searchData', data);

      this.allLawers = data;
    });
    // this.lawerCity=_ActivatedRoute.snapshot.paramMap.get('city');
    // this.lawerSpecia=_ActivatedRoute.snapshot.paramMap.get('specializ');
    // this.lawerName=_ActivatedRoute.snapshot.paramMap.get('name');

    this.lawersData = _ActivatedRoute.snapshot.paramMap.get('data');

    // console.log("----",this.lawerCity);
    // console.log("----",this.lawerSpecia);
    console.log('----', this.lawersData);

    // _AllLawerService.searchApi(this.lawerCity,this.lawerSpecia,this.lawerName).subscribe((data) => {
    //   this.allLawers = data;
    //   console.log(data);
    // });

    // _AllLawerService.getAllLawers().subscribe((data) => {
    //   this.allLawers = data;
    //   console.log(data);
    // });

    // _AllLawerService.getReview().subscribe((data)=>{
    //   this.getReview=data;
    //   console.log(data);

    // });
  }
  uploadeImage = '../../assets/imageDataBase/';


  image1 = '../../assets/ourExpert/team5.jpg';
  image2 = '../../assets/ourExpert/team6.jpg';
  image3 = '../../assets/ourExpert/team7.jpg';
  image4 = '../../assets/ourExpert/team8.jpg';
  image5 = '../../assets/ourExpert/team9.jpg';

  imageDate1 = '../../../assets/caseLike/case1.jpg';
  imageDate2 = '../../../assets/caseLike/case2.jpg';
  imageDate3 = '../../../assets/caseLike/case3.jpg';
  imageDate4 = '../../../assets/caseLike/case4.jpg';
  imageDate5 = '../../../assets/caseLike/case5.jpg';
  imageDate6 = '../../../assets/caseLike/case6.jpg';

  swiperParams1 = {
    // slidesPerView: 1,
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    },
  };
  swiperParams2 = {
    // slidesPerView: 1,
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
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

  numSequence(n: number): Array<number> {
    return Array(n);
  }
  getLawerDates(id: any) {
    let dates: any;
    this._UsersService.getLawersDate(id).subscribe((res) => {
      console.log('getLawersDate', res.data);
      this.dates = res.date;
    });
    return dates;
  }
}
