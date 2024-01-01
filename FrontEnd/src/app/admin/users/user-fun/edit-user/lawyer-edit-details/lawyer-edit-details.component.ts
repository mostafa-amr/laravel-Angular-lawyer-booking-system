import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-lawyer-edit-details',
  templateUrl: './lawyer-edit-details.component.html',
  styleUrls: ['./lawyer-edit-details.component.css']
})
export class LawyerEditDetailsComponent {
  lawyerForm!:FormGroup;
  lwyer:any
  UserImageName :any;
  cityData!:any
  specupdate:any
  user_id:any=''
  lawyerdata: any = { }
  error:any={

  };
  specData!:any
  specialization:any
  constructor(private MyService: MyServiceService,private http: HttpClient ,
    private router:Router,private activeRoute:ActivatedRoute ) { 

  }
  ngOnInit(){
    this.user_id=this.activeRoute.snapshot.params['id']
    this.getData()
    this.getlawyerData()
    this.getSpecData()
      this.lawyerForm=new FormGroup({
        'price':new FormControl(null,[Validators.max(1000)]),
        'span':new FormControl(null,[Validators.max(10)]),
        'city':new FormControl(null),
        'specialization':new FormControl(null),
        'verified':new FormControl(null),
        'image':new FormControl(null),
        'about':new FormControl(null,[Validators.maxLength(10)]),
      },
      )
    }
    submitlawyerForm(lawyerForm:FormGroup){
    

    
  //   const formData=new FormData();
  //   formData.append('user_id',this.user_id)
  // formData.append('price',lawyerForm.value.price)
  // formData.append('span',lawyerForm.value.span)
  // formData.append('about',lawyerForm.value.about)
  // formData.append('verified',lawyerForm.value.verified)
  // formData.append('location',lawyerForm.value.city)
  // formData.append('specialization_id',lawyerForm.value.specialization)
  // formData.append('idImage', this.UserImageName.name)
    // console.log(this.UserImageName.name)
    const filteredObject = Object.keys(this.lawyerdata).reduce((acc, key) => {
      const value = this.lawyerdata[key];
    
      // Check for null or empty values
      if (value  && value !== '') {
        acc[key] = value;
      }
    
      return acc;
    }, {}as any)
    console.log(filteredObject)
    console.log(this.lawyerdata)
    console.log(this.lwyer)
    this.postData(filteredObject)
//     if(filteredObject.specialization){
//       this.specData.id='we'
// this.updatespec()
//     }
  
    }
    postData(formData:any) {
      if(this.lawyerForm.valid){
         this.MyService.put(this.lwyer.id,'lawyers',formData)
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
       updatespec(formData:any) {
        if(this.lawyerForm.valid){
           this.MyService.put(this.lwyer.id,'specializations',formData)
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
           this.MyService.post('users',this.lawyerdata)
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
      getlawyerData() {
        this.MyService.get(`showlawyer/${this.user_id}`)
          .subscribe(response => {
            // Handle the response data here
            this.lwyer=response.data
            console.log(this.cityData);
          },error => {
            
            console.error('Errorr:', error);
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
      onFileChange(event: any) {
        if (event.target.files.length > 0) {
          this.UserImageName = event.target.files[0];
          this.lawyerdata.image=event.target.files[0].name;
          // this.RegisterUserForm.patchValue({
          //   fileSource: file.name
          // });
          // console.log( this.UserImageName)
        }
      }
}
