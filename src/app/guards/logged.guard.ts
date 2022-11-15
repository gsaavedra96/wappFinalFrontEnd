import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { localStorageProvider } from '../lib/localStorageProvider';
import { Router, NavigationEnd } from '@angular/router';


@Injectable()
export class LoggedGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        console.log("ENTROOOOO")
        let logged = localStorageProvider.getObject('userInfo');
        if (logged) {
            return true;    
        }
        this.router.navigate(['/start']);
        return false;
    }
}
