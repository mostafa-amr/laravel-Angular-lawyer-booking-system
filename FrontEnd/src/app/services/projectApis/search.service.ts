import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchData= new BehaviorSubject<any>([]);
  localStorValue:any;
  userLogData = new BehaviorSubject<any>([]);

  constructor() {
    if (localStorage.getItem('searchData')) {
      this.localStorValue = localStorage.getItem('searchData');
      let objData = JSON.parse(this.localStorValue);
      this.searchData.next(objData);

    }
   }
}
