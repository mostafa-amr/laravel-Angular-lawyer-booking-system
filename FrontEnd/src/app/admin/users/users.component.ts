

import { Component , inject} from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { AdminListUsersComponent } from './user-fun/admin-list-users/admin-list-users.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor( private location: Location,private MyService: MyServiceService,private http: HttpClient,private router: Router) { }
data!:any
allData:any=''
lawyerData:any
filter:any
spec:any
ngOnInit() {
  this.getCityData();
  this.getData();
  
}
  getData() {
    this.MyService.get('users')
      .subscribe(response => {
        // Handle the response data here
        this.data=response.data
        for (const userObj of this.data) {
          let lawyerObject = this.lawyerData.find((obj:any) => obj.user.id == userObj.id);
          if(lawyerObject&&lawyerObject.verified){
            userObj.completed=true
            userObj.verified=true
          }
          else if(!lawyerObject){
            userObj.completed=false
            userObj.verified=false
          }
          else if(lawyerObject&&!lawyerObject.verified){
            userObj.completed=true
            userObj.verified=false
          }
        }
       
        console.log(this.data);
      });
  }
  getCityData() {
  let allData =5
    this.MyService.get(`lawyers`)
      .subscribe(response => {
        
       this.allData=1;
       console.log('res',response.data)
       this.lawyerData=response.data
     allData=1
        
      },
      (error: HttpErrorResponse) => {
        allData=0
        this.allData=0;
        if (error.status === 404) {
          console.log('Data not found',this.allData);
        } else {
          console.log('An error occurred:', error.error);
        }
      }
      );
    
     return this.allData
  }
  postData() {
    let data ={
      
      email:'pokerf036@gmail.com',
      
     
      password:'12345678',
  
    }
    this.MyService.post('sanctum/token',data)
      .subscribe(response => {
        // Handle the response data here
        console.log(response);
      });
      
  }
  deleteData(id:any) {
    this.MyService.delete(`users/${id}`)
      .subscribe(response => {
        this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.location.path()]);
        });
        console.log(response);
      });
  }
 
  viewUser(id:any){
    this.router.navigate(['admin/users/view', id]);
  }
  
  redirectToEdit(id:any){
    this.router.navigate(['admin/users/edit', id]);
  }
}

