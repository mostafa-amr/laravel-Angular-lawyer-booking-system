

import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class isloginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('UserData')) {
      let parsed = localStorage.getItem('UserData');
      let userRole = JSON.parse(parsed ? parsed : '');

      if (userRole?.token ) {
        return true;
      }
    }
    // router.navigate(['/login']);
    this.router.navigate(['/notAuth']);
    return false;
  }
}