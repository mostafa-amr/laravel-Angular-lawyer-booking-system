import { Component , inject} from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aspecialization',
  templateUrl: './aspecialization.component.html',
  styleUrls: ['./aspecialization.component.css']
})
export class AspecializationComponent {
  data!:any
  constructor(private MyService: MyServiceService,private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.MyService.get('specializations')
      .subscribe(response => {
        // Handle the response data here
        this.data=response.data
        // console.log(this.data);
      });
  }
  deleteData(id:any) {
    this.MyService.delete(`specializations/${id}`)
      .subscribe(response => {
        this.router.navigateByUrl('/admin', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.location.path()]);
        });
        console.log(response);
      });
      
  }
  redirectToEdit(id:any){
    this.router.navigate(['admin/specializations/edit', id]);
  }
}
