import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-create-lawyer-deatails',
  templateUrl: './create-lawyer-deatails.component.html',
  styleUrls: ['./create-lawyer-deatails.component.css']
})
export class CreateLawyerDeatailsComponent {
  lawyerForm!:FormGroup;
  UserImageName :any;
  cityData!:any
  user_id:any=''
  data: any = {}
  error:any={

  };
  specData!:any
  specialization:any
  constructor(private MyService: MyServiceService,private http: HttpClient ,
    private router:Router,private activeRoute:ActivatedRoute ) { 

  }
  ngOnInit(){
    this.getData()
    this.getSpecData()
      this.lawyerForm=new FormGroup({
        'price':new FormControl(null,[Validators.required,Validators.max(1000)]),
        'span':new FormControl(null,[Validators.required,Validators.max(10)]),
        'city':new FormControl(null,[Validators.required]),
        'specialization':new FormControl(null,[Validators.required]),
        'verified':new FormControl(null,[Validators.required]),
        'image':new FormControl(null,[Validators.required]),
        'about':new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      },
      )
    }
    submitForm(lawyerForm:FormGroup){
    
    //  this.postData()
    // const formData=new FormData();
    //          formData.append('lawyer_id', this.lawyerId)
    //          formData.append('specialization_id',this.specialization)
    this.user_id=this.activeRoute.snapshot.params['id']
    const formData=new FormData();
    formData.append('user_id',this.user_id)
  formData.append('price',lawyerForm.value.price)
  formData.append('span',lawyerForm.value.span)
  formData.append('about',lawyerForm.value.about)
  formData.append('verified',lawyerForm.value.verified)
  formData.append('location',lawyerForm.value.city)
  formData.append('specialization_id',lawyerForm.value.specialization)
  formData.append('idImage', this.UserImageName.name)
    console.log(this.UserImageName.name)
    this.postData(formData)
  
    }
    postData(formData:any) {
      if(this.lawyerForm.valid){
         this.MyService.post('lawyers',formData)
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
       postSpecData() {
        if(this.lawyerForm.valid){
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
       getData() {
        this.MyService.get('cities')
          .subscribe(response => {
            // Handle the response data here
            this.cityData=response.data
            console.log(this.cityData);
          });
      }
      getSpecData() {
        this.MyService.get('specializations')
          .subscribe(response => {
            // Handle the response data here
            this.specData=response.data
            console.log(this.specData);
          });
      }
      onFileUserChange(event: any) {
        if (event.target.files.length > 0) {
          this.UserImageName = event.target.files[0];
          // this.RegisterUserForm.patchValue({
          //   fileSource: file.name
          // });
          // console.log( this.UserImageName)
        }
      }
}
