import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/AllService/authentication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private router:Router,public toastr: ToastrManager,private auth :AuthenticationService) { }

  ngOnInit(): void {
    document.getElementById('footer').style.width= "83.333333%"
    document.getElementById('footer').style.marginLeft= "16.666667%"
    // document.getElementById('ftco-navbar').style.width= "83.333333%"
    // document.getElementById('ftco-navbar').style.marginLeft= "16.666667%"
    if(localStorage.getItem("type")!= "student" || localStorage.getItem("login")!= "true" || localStorage.getItem("actviation")!= "1" ||  localStorage.getItem('token') == null || localStorage.getItem('token') =="null" )
    {
      this.router.navigate([''])
    }
  }
  log_Out()
  {
    this.auth.LogOut().subscribe(res=>
      {
        // console.log(res)
        
        localStorage.removeItem("type")
        localStorage.setItem("login","false")
        localStorage.removeItem("NameUser")
        localStorage.removeItem("token")
        setTimeout(() => {
          this.router.navigate(['']) 
        }, 500);
 
      },
      err=>
      {
        this.toastr.warningToastr(err.message)
      }
      )
  }

}
