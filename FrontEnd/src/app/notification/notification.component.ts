import { Component } from '@angular/core';
import { UsersService } from '../services/projectApis/users.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {

  notification:any;
  constructor(public _UsersService: UsersService) {
    _UsersService.getNotification().subscribe((res: any) => {
      console.log('getNotification', res.data);
      this.notification=res.data
    });
  }
}
