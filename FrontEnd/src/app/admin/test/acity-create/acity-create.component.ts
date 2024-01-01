import { Component} from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-acity-create',
  templateUrl: './acity-create.component.html',
  styleUrls: ['./acity-create.component.css']
})
export class AcityCreateComponent {
  cityForm!:FormGroup;
  data: any = {
    name: '',}
  error:any={
    name: '',}
    constructor(private MyService: MyServiceService,private http: HttpClient,private router: Router) { 

    }
    ngOnInit(){

        this.cityForm=new FormGroup({
          'name':new FormControl(null,[Validators.required,Validators.minLength(4)]),
})}

submitForm(cityForm:FormGroup){
  console.log(cityForm)
  console.log(this.data)
  this.postData()

 }


 postData() {
 
  this.MyService.post('cities',this.data)
    .subscribe(response => {
      console.log('Success:', response);
      this.router.navigate(['admin/cities']);
      
    },
    error => {
      this.error=error.error.errors;
      console.error('Errorr:', error.error.errors);
    });
}


}
