import { Component } from '@angular/core';
import { AllLawerService } from '../services/all-lawer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-lawers-test',
  templateUrl: './one-lawers-test.component.html',
  styleUrls: ['./one-lawers-test.component.css'],
})
export class OneLawersTestComponent {
  oneObjX: any = {};
  id: any;

  constructor(
    _AllLawerService: AllLawerService,
    _ActivatedRoute: ActivatedRoute
  ) {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
    // this.objX = _AllLawerService.obj;

    _AllLawerService.getOneUser(this.id).subscribe((values) => {
      this.oneObjX = values;
      console.log(values);
    });

    // _AllLawerService.getAllUser().subscribe((values) => {
    //   console.log(values.products[);
    // });
  }
}
