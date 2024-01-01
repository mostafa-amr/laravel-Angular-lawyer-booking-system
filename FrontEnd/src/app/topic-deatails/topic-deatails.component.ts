import { Component } from '@angular/core';
import { AllLawerService } from '../services/all-lawer.service';
@Component({
  selector: 'app-topic-deatails',
  templateUrl: './topic-deatails.component.html',
  styleUrls: ['./topic-deatails.component.css'],
})
export class TopicDeatailsComponent {
  objX: any = [];

  constructor(_AllLawerService: AllLawerService) {
    // this.objX = _AllLawerService.obj;


 _AllLawerService.getAllUser().subscribe((values) => {
  // this.objX=values.data;
      console.log(values);
    });

    // _AllLawerService.getAllUser().subscribe((values) => {
    //   console.log(values.products[0]);
    // });


  }
}
