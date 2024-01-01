import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-list-users',
  templateUrl: './admin-list-users.component.html',
  styleUrls: ['./admin-list-users.component.css']
})
export class AdminListUsersComponent {
  userData:any
  userId:any
  city:any
  errorMessage:any
  spec:any
  constructor(private MyService: MyServiceService,private http: HttpClient ,
    private router:Router,private activeRoute:ActivatedRoute ) { 
    
  }
  ngOnInit(){
  
    this.userId=this.activeRoute.snapshot.params['id']
    this.getData()
    this.getlawyerData()
    console.log(this.userData)
  }
  getData() {
    this.MyService.get(`users/${this.userId}`)
      .subscribe(response => {
        
        this.userData=response.data
        this.getCity(this.userData.city_id)
        console.log(this.userData);
      });
  }
  getCity(id:any) {
    this.MyService.get(`cities/${id}`)
      .subscribe(response => {
        
        this.city=response.data
        console.log(this.city[0].name);
      });
  }
  getlawyerData() {
    this.MyService.get(`showlawyer/${this.userId}`)
      .subscribe(response => {
        // Handle the response data here
      this.spec=response.data
      console.log('speccc',this.spec);
      }, (error) => {
        if (error.status === 404) {
          this.errorMessage = 'Row not found in the database.';
        } else {
          this.errorMessage = 'An error occurred while fetching data.';
        }
       
      }
    );
}
}
