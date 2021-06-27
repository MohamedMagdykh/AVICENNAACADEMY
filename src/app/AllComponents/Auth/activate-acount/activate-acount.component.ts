import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/AllService/authentication.service';
import { CanComponentDeactivate } from 'src/app/AuthGards/deactivate-code.guard';

@Component({
  selector: 'app-activate-acount',
  templateUrl: './activate-acount.component.html',
  styleUrls: ['./activate-acount.component.scss']
})
export class ActivateAcountComponent implements OnInit , CanComponentDeactivate {
   code
   
  constructor(public toastr: ToastrManager,private auth :AuthenticationService,private router:Router) 
  { }

  ngOnInit(): void {
    console.log(localStorage.getItem("actviation"))
    if( localStorage.getItem("login")== "true" || localStorage.getItem("actviation") ==null || localStorage.getItem("actviation") =="null"  )
    {
      this.router.navigate([''])
    }
  }
  activaionAcount()
  {
    this.auth.activate_user(this.code).subscribe(res=>
      {
        console.log(res)
        
  
        setTimeout(() => {
        }, 500);
 
      },
      err=>
      {
        this.toastr.warningToastr(err.message)
      }
      )
  }
  resendCode()
  {
    this.auth.resend_activate().subscribe(res=>
      {
 
      },
      err=>
      {
        this.toastr.warningToastr(err.message)
      }
      )
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem("actviation")=="0") {
      
      return false;
    }
    return true;
  }
}
