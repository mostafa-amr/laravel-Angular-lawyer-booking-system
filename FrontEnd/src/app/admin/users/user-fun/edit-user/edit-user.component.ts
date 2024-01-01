import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user_iid:any
  dataa:any
  errorMessage:any=''
  constructor(private MyService: MyServiceService,private http: HttpClient ,
    private router:Router,private activeRoute:ActivatedRoute ) { 

  }
  ngOnInit(){

    this.user_iid=this.activeRoute.snapshot.params['id']
    this.getData(this.user_iid)
  this.getlawyerData()
  }
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
  getData(id:any) {
    this.MyService.get(`users/${id}`)
      .subscribe(response => {
        // Handle the response data here
        this.dataa=response.data
      });
  }
  receiveIdFromChild(id: string) {
    this.user_iid = id;
  }
  receiveNameFromChild(name: string) {
    this.user_iid = name;
    console.log('role',this.user_iid )
  }
  getlawyerData() {
    this.MyService.get(`showlawyer/${this.user_iid}`)
      .subscribe(response => {
        // Handle the response data here
      
       
      }, (error) => {
        if (error.status === 404) {
          this.errorMessage = 'Row not found in the database.';
        } else {
          this.errorMessage = 'An error occurred while fetching data.';
        }
       
      }
    );
}
redirectTopost(id:any){
  this.router.navigate([`admin/lawyerDetails/create/${id}`]);
}
}
