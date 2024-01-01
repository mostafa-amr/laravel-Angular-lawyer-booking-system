import { Component ,Output, EventEmitter  } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { matchpassword } from '../../create-user/matchPassword.validator';
@Component({
  selector: 'app-edit-main-data',
  templateUrl: './edit-main-data.component.html',
  styleUrls: ['./edit-main-data.component.css']
})
export class EditMainDataComponent {
  @Output() sendNameToParent: EventEmitter<string> = new EventEmitter<string>();
  userForm!:FormGroup;
  userId:any
  cityData!:any
  specData!:any
  UserImageName :any;
  specialization:any
  lawyerId:any
  data2: any
  data: any = {
    name: '',
    role: '',
    email: '',
    image: '',
    phone: '',
    city_id:'',
  };
  error:any={
    name: '',
    role: '',
    email: '',
    image: '',
    phone: '',
    city_id:'',
  };
  constructor(private MyService: MyServiceService,private http: HttpClient ,
    private router:Router,private activeRoute:ActivatedRoute ) { 
    
  }
ngOnInit(){
  
  this.userId=this.activeRoute.snapshot.params['id']
this.getData()
this.getSpecData()
this.getUserData(this.userId)
this.sendName()
  this.userForm=new FormGroup({
    'name':new FormControl(null,[Validators.minLength(3)]),
    'email':new FormControl(null,[Validators.email]),
    'role':new FormControl(null),
    'image':new FormControl(null),
    'city':new FormControl(null),
    
    'phone':new FormControl(null,[Validators.pattern("^(011|012|015|010)[0-9]{8}$")]),

  },
)
}

//////////////
  submitForm(userForm:FormGroup){
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
      const filteredObject = Object.keys(this.data).reduce((acc, key) => {
        const value = this.data[key];
      
        // Check for null or empty values
        if (value !== null && value !== '') {
          acc[key] = value;
        }
      
        return acc;
      }, {}as any)


   this.postData(filteredObject)
  console.log(userForm)
  console.log('data',this.data)
  console.log(filteredObject)
  // console.log(this.data)
  // }
  }

/////////////
  postData(data:any) {
 if(this.userForm.valid){
    this.MyService.put(this.userId,'users',data)
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
        console.error('Errorr:', error);
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
  getUserData(id:any) {
    this.MyService.get(`users/${id}`)
      .subscribe(response => {
        // Handle the response data here
        this.data=response.data
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
 
  sendName() {
    // Emit the name to the parent component
    this.sendNameToParent.emit(this.data.role);
    console.log('rolechild',this.data.role)
  }
}
