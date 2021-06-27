import { CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
    providedIn: 'root',
})

export class CanDeactivateGuard implements
    CanDeactivate<CanComponentDeactivate> {
   constructor(public toastr: ToastrManager,private router:Router) { }
    canDeactivate(component: CanComponentDeactivate) {
      
      if(component.canDeactivate() == false)
      {
        this.toastr.warningToastr("Activation Your Acount")
      }
        return component.canDeactivate && component.canDeactivate();
    }
}