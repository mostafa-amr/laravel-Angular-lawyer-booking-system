import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-acity-edit',
  templateUrl: './acity-edit.component.html',
  styleUrls: ['./acity-edit.component.css']
})
export class AcityEditComponent {
  cityId:string='';
  cityForm!:FormGroup;
  cityData:any
  data: any = {
    name: '',}
  error:any={
    name: '',}
    constructor(private MyService: MyServiceService,private http: HttpClient,private activeRoute:ActivatedRoute,private router: Router) { 

    }
    ngOnInit(){
this.cityId=this.activeRoute.snapshot.params['id']
this.getData(this.cityId)
        this.cityForm=new FormGroup({
          'name':new FormControl(null,[Validators.required,Validators.minLength(4)]),
})}

submitForm(cityForm:FormGroup){
  console.log(cityForm)
  console.log(this.data)
  this.putData()

 }


 putData() {
 
  this.MyService.put(this.cityId,'cities',this.data)
    .subscribe(response => {
      console.log('Success:', response);
      this.router.navigate(['admin/cities']);
      
    },
    error => {
      this.error=error.error.errors;
      console.error('Errorr:', error);
    });
}
getData(id:any) {
  this.MyService.get(`cities/${id}`)
    .subscribe(response => {
      // Handle the response data here
      this.cityData=response.data[0].name
      console.log('citydata',this.cityData);
    });
}
}
