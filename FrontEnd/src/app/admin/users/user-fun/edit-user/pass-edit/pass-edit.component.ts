import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { matchpassword } from '../../create-user/matchPassword.validator';

@Component({
  selector: 'app-pass-edit',
  templateUrl: './pass-edit.component.html',
  styleUrls: ['./pass-edit.component.css']
})
export class PassEditComponent {
  passForm!:FormGroup;
  passdataa:any={
    password:''
  }
  userIdd:any
  constructor(private MyService: MyServiceService,private http: HttpClient ,
    private router:Router,private activeRoute:ActivatedRoute ) { 
    
  }
  ngOnInit(){
    this.userIdd=this.activeRoute.snapshot.params['id']
      this.passForm=new FormGroup({
       'password':new FormControl(null,[Validators.required,Validators.minLength(8)]),
        'confirmpassword':new FormControl(null,[Validators.required])
      },
      {
        validators:matchpassword
      })
    }
    submitPass(userForm:FormGroup){
      // if(this.data.role=='lawyer')
      // {
      //   this.tempLawyerDataService.LawyerObj=this.data
      //   this.router.navigate(['/target-component']);
      // }
      // else{
        // for (const key in this.data) {
        //   if (this.data.hasOwnProperty(key)) {
        //     // Check for null or empty values
        //     if (this.data[key] === null || this.data[key] === '') {
        //       // Remove property with null or empty value
        //       delete this.data[key];
        //     }
        //   }
        // }
        const filteredObject = Object.keys(this.passdataa).reduce((acc, key) => {
          const value = this.passdataa[key];
        
          // Check for null or empty values
          if (value !== null && value !== '') {
            acc[key] = value;
          }
        
          return acc;
        }, {}as any)
  
  
     this.postData(this.passdataa)
    console.log(userForm)
    console.log('data',this.passdataa)
    console.log(filteredObject)
    // console.log(this.data)
    // }
    }



    postData(data:any) {
      if(this.passForm.valid){
         this.MyService.put(this.userIdd,'users',data)
           .subscribe(response => {
             console.log('Success:', response);
             // Reset the form after successful submission
             // this.lawyerId=response.data.id
             // const formData=new FormData();
             // formData.append('lawyer_id', this.lawyerId)
             // formData.append('specialization_id',this.specialization)
             // this.postSpecData(formData)
             // this.resetForm();
             this.router.navigate(['admin/users']);
           },
           error => {
             
             console.error('Errorr:', error);
           });
         }
       }
}
