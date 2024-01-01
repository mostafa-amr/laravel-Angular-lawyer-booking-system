import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-aspecializations-edit',
  templateUrl: './aspecializations-edit.component.html',
  styleUrls: ['./aspecializations-edit.component.css']
})
export class AspecializationsEditComponent {
  specForm!:FormGroup;
  UserImageName :any;
  specId:any
  data: any = {
    name: '',
    image: '',
    
    Description: ''}
  error:any={
    name: '',
    image: '',
    Description: ''}
    constructor(private MyService: MyServiceService,private http: HttpClient,private router: Router,private activeRoute:ActivatedRoute) { 

    }
    ngOnInit(){
      this.specId=this.activeRoute.snapshot.params['id']
        this.specForm=new FormGroup({
          'name':new FormControl(null,[Validators.minLength(4)]),
          'Description':new FormControl(null,[Validators.minLength(4)]),
          'image':new FormControl(null),
        })}

submitForm(specForm:FormGroup){
  console.log(specForm)

  // this.data.image= this.UserImageName;
  // const formData=new FormData();
  // formData.append('name',this.data.name)
  // formData.append('description',this.data.Description)
  // formData.append('image',this.UserImageName,this.UserImageName.name)
  // console.log('Data before post',this.data)
  // console.log('FormData before post',formData)
  // 

  const filteredObject = Object.keys(this.data).reduce((acc, key) => {
    const value = this.data[key];
  
    // Check for null or empty values
    if (value !== null && value !== '') {
      acc[key] = value;
    }
  
    return acc;
  }, {}as any)
  this.postData(filteredObject)
 }


 postData(formaData:any) {
  // uploadImage(imageFile: File) {
  //   const formData = new FormData();
  //   formData.append('image', imageFile);
  console.log('FormData',formaData)
  this.MyService.put(this.specId,'specializations',formaData)
    .subscribe(response => {
      console.log('Success:', response);
      this.router.navigate(['admin/specializations']);
      
    },
    error => {
      this.error=error.error.errors;
      console.error('Error uploading file.', error);
    });
  }
// }
onFileUserChange(event: any) {
  if (event.target.files.length > 0) {
    this.UserImageName = event.target.files[0];
    // this.RegisterUserForm.patchValue({
    //   fileSource: file.name
    // });
    console.log(this.UserImageName)
  }
}
}
