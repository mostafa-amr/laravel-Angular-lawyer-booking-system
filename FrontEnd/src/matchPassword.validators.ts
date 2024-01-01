import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


  export const matchpassword : ValidatorFn = (control: AbstractControl):ValidationErrors|null =>{

     let pass = control.get('password');
     let confirmpass = control.get('confirmePassword');
     if(pass && confirmpass && pass?.value != confirmpass?.value){
        return {
            passwordmatcherror : true }
     }
    return null; 


    
   }