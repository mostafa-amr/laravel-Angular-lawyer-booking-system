import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { Injectable } from '@angular/core';

// export const authgardGuard: CanActivateFn = (
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot,

// ) => {
//   // constructor(private authService: AuthService, private router: Router) {}
//   if (localStorage.getItem('UserData')) {
//     let parsed = localStorage.getItem('UserData');
//     let userRole = JSON.parse(parsed ? parsed : '');
//     if (userRole.role == 'user') {
//       return true;
//     }
//   }

//   // Router.navigate(['/login']);
//   // router.navigate(['/login']);
//   // Router.navigate(["/login"])
//   return false;
// };

@Injectable({
  providedIn: 'root',
})
export class authgardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('UserData')) {
      let parsed = localStorage.getItem('UserData');
      let userRole = JSON.parse(parsed ? parsed : '');

      if (userRole.role == 'user') {
        // this.router.navigate(['/Reservation']);
        return true;
      }
    }
    // router.navigate(['/login']);
    this.router.navigate(['/notAuth']);
    return false;
  }
}
// @Injectable({
//   providedIn: 'root',
// })
// export class authgardGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (localStorage.getItem('UserData')) {
//       let parsed = localStorage.getItem('UserData');
//       let userRole = JSON.parse(parsed ? parsed : '');

//       if (userRole.role == 'user') {

//         console.log("FROM_AUTH_GARD",userRole);
//         this.router.navigate(['/Reservation']);
//       } else if (userRole.role == 'lawyer') {
//         this.router.navigate(['/adminProfile']);
//       } else {
//         this.router.navigate(['/register']);
//       }
//       return false;
//     }
//     // Router.navigate(['/login']);
//     // router.navigate(['/login']);
//     this.router.navigate(['/login']);
//     return false;
//   }
// }
