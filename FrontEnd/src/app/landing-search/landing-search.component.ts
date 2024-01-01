import { Component } from '@angular/core';
import { AllLawerService } from '../services/all-lawer.service';
import { UsersService } from '../services/projectApis/users.service';
import { Router } from '@angular/router';
import { SearchService } from '../services/projectApis/search.service';

@Component({
  selector: 'app-landing-search',
  templateUrl: './landing-search.component.html',
  styleUrls: ['./landing-search.component.css'],
})
export class LandingSearchComponent {
  cities: any;
  specializations: any;

  constructor(
    public _AllLawerService: AllLawerService,
    public _UsersService: UsersService,
    public _Router: Router,
    public _SearchService: SearchService
  ) {
    _AllLawerService.getCities().subscribe((data) => {
      this.cities = data.data;
      // console.log('citiies', data.data);
    });
    // _AllLawerService.getspecializations().subscribe((data)=>{
    //   // this.specializations=data.data;
    //   // console.log("getspecializations",data.data[1].name);

    // })
    _UsersService.getspecializationsApi().subscribe((res) => {
      // console.log('oooopp', res.data);

      this.specializations = res.data;
      // console.log("getspecializations",data.data[1].name);
    });
  }

  city: any = '';
  speciali: any = '';
  name: any;
  lawerName: any = '';

  image1 = '../../../assets/landing/landing1.jpg';
  image2 = '../../../assets/landing/landing4.jpg';
  image3 = '../../../assets/landing/landing5.jpg';

  serch() {
    // if (this.lawerName == '') {
    //   this.lawerName = 'all';
    // }
    console.log('city', this.city);
    console.log('speciali', this.speciali);
    console.log('doctor', this.lawerName);
  }
  searchFun() {
    let data = {
      specialization: this.speciali,
      city: this.city,
      name_lawyer: this.lawerName,
    };
    if (this.speciali == '' && this.city == '' && this.lawerName == '') {
      this._UsersService.getLawerApi().subscribe((res) => {
        let valueSearch = res.data;

        console.log('valueSearch', valueSearch);
        localStorage.setItem('searchData', JSON.stringify(valueSearch));
  
        this._SearchService.searchData.next(valueSearch ? valueSearch : []);
        this._Router.navigate(['/lawersTest']);
      });
    } else {
      this._UsersService.lawerSearch(data).subscribe((res) => {
        let valueSearch = res.data;

        console.log('valueSearch', valueSearch);
        localStorage.setItem('searchData', JSON.stringify(valueSearch));

        this._SearchService.searchData.next(valueSearch ? valueSearch : []);
        this._Router.navigate(['/lawersTest']);
      });
    }

    // if (this.lawerName == '') {
    //   this.lawerName = 'all';
    //   this._Router.navigate([
    //     '/alllawer',
    //     this.city,
    //     this.speciali,
    //     this.lawerName,
    //   ]);
    // } else {
    //   this._Router.navigate([
    //     '/alllawer',
    //     this.city,
    //     this.speciali,
    //     this.lawerName,
    //   ]);
    // }
  }
  getCity(event: any) {
    this.city = event.target.value;

    // console.log(event.target.value);
  }
  getSpecialize(event: any) {
    this.speciali = event.target.value;

    console.log(event.target.value);
  }
  getLawerName(event: any) {
    this.lawerName = event.target.value;

    // console.log(event.target.value);
  }
}
