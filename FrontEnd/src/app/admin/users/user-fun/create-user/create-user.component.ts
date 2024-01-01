import { Component} from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { matchpassword } from './matchPassword.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userForm!:FormGroup;
  UserImageName :any;
  cityData!:any
  specData!:any
  specialization:any
  lawyerId:any
  data: any = {
    name: '',
    role: '',
    email: '',
    image: '',
    phone: '',
    password: '',
    city_id:'',
  };
  error:any={
    name: '',
    role: '',
    email: '',
    image: '',
    phone: '',
    password: '',
    city_id:'',
  };
  constructor(private MyService: MyServiceService,private http: HttpClient ,
    private router:Router ) { 

  }
ngOnInit(){
this.getData()
this.getSpecData()
  this.userForm=new FormGroup({
    'name':new FormControl(null,[Validators.required,Validators.minLength(3)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'role':new FormControl(null,[Validators.required]),
    'city':new FormControl(null,[Validators.required]),
    'image':new FormControl(null,[Validators.required]),
    'phone':new FormControl(null,[Validators.required,Validators.pattern("^(011|012|015|010)[0-9]{8}$")]),
    'password':new FormControl(null,[Validators.required,Validators.minLength(8)]),
    'confirmpassword':new FormControl(null,[Validators.required])
  },
  {
    validators:matchpassword
  })
}

//////////////
  submitForm(userForm:FormGroup){
    // if(this.data.role=='lawyer')
    // {
    //   this.tempLawyerDataService.LawyerObj=this.data
    //   this.router.navigate(['/target-component']);
    // }
    // else{
      const formData=new FormData();
      formData.append('idImage', this.UserImageName.name)
   this.postData()
  console.log(userForm)
  // console.log(this.data)
  // }
  }

/////////////
  postData() {
 if(this.userForm.valid){
    this.MyService.post('users',this.data)
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
        this.error=error.error.errors;
        console.error('Errorr:', error.error.errors);
      });
    }
  }
  postSpecData(formData:any) {
 
    this.MyService.post('lawyers',formData)
      .subscribe(response => {
        console.log('Success:', response);
        // Reset the form after successful submission
        this.resetForm();
      },
      error => {
        this.error=error.error.errors;
        console.error('Errorr:', error.error.errors);
      });
      
  }
/////////

  resetForm() {
    // Reset the form fields and validation
    this.data = {
      name: '',
      role: '',
      email: '',
      image: '',
      phone: '',
      password: '',
      confirmPassword: ''
    };
  }

///
  getData() {
    this.MyService.get('cities')
      .subscribe(response => {
        // Handle the response data here
        this.cityData=response.data
        console.log(this.cityData);
      });
  }
  getSpecData() {
    this.MyService.get('cities')
      .subscribe(response => {
        // Handle the response data here
        this.specData=response.data
        console.log(this.cityData);
      });
  }
  nextStep(){
    if(this.userForm.valid){
      this.MyService.post('users',this.data)
        .subscribe(response => {
          console.log('Success:', response);
          // Reset the form after successful submission
          this.lawyerId=response.data.id
          // const formData=new FormData();
          // formData.append('lawyer_id', this.lawyerId)
          // formData.append('specialization_id',this.specialization)
          // this.postSpecData(formData)
          // this.resetForm();
          this.router.navigate([`admin/lawyerDetails/create/${this.lawyerId}`]);
        },
        error => {
          this.error=error.error.errors;
          console.error('Errorr:', error.error.errors);
        });
      }
      else{
        console.log('wrong in')
      }
 
  }
  onFileUserChange(event: any) {
    if (event.target.files.length > 0) {
      this.UserImageName = event.target.files[0];
      this.data.image=event.target.files[0].name
      // this.RegisterUserForm.patchValue({
      //   fileSource: file.name
      // });
      // console.log( this.UserImageName)
    }
  }
}
