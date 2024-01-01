import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/projectApis/users.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent {
  // path = storage_path();

x:any;
// imagUrlProduct: string = 'http://127.0.0.1:8000/userImages/';
imagUrlProduct: string = '../../../assets/contract/';

image1="../../../assets/contract/signature2.png";
constructor(public _UsersService:UsersService){
  _UsersService.getUserApi().subscribe((res)=>{
    // console.log("aaaaaaaa",res.data);
    
this.x=res.data;
  });
}

}
function storage_path() {
  throw new Error('Function not implemented.');
}

