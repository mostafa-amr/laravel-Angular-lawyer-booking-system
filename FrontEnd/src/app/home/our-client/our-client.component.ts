import { Component } from '@angular/core';
import { AllLawerService } from 'src/app/services/all-lawer.service';
import { Swiper } from 'swiper';
// import { AllLawerService } from '../services/all-lawer.service';

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html',
  styleUrls: ['./our-client.component.css'],
})
export class OurClientComponent {
  image = '../../../assets/client/q2.jpg';
  image2 = '../../../assets/client/q3.jpg';
  image3 = '../../../assets/client/q8.jpg';

  objx: any;
  constructor(_AllLawerService: AllLawerService) {
    // this.objX = _AllLawerService.obj;
    // debugger
    
    _AllLawerService.getAllUser().subscribe((values) => {
      // debugger
      // this.objX = values.data;
      // this.objx = values;
      // console.log(values);
    });
    _AllLawerService.getAllUserApi().subscribe((data) => {
      this.objx = data.data;
      // console.log("API----Data",data.data);
    });
  }
}
