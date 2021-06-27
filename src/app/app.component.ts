import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from './AllService/authentication.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent {
  title = 'AVICENNAACADEMY';
  checkLog = localStorage.getItem("login")
  NameUser = localStorage.getItem("NameUser")
  typeUser = localStorage.getItem("type")
  activiationCode
  tkn
  message
  // myDate:any = new Date();
  constructor(public toastr: ToastrManager,private auth :AuthenticationService,private router:Router,private datePipe: DatePipe)
  {
    // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    // console.log(this.myDate )


  }
  ngOnInit(): void {

   this.checkLog = localStorage.getItem("login")
   this.tkn=localStorage.getItem('token')
 
  }
  log_Out()
  {
  
      this.auth.LogOut().subscribe(res=>
        {
          // console.log(res)
          
          localStorage.removeItem("actviation")  
          localStorage.removeItem("mail")
          localStorage.removeItem("type")
          localStorage.setItem("login","false")
          localStorage.removeItem("NameUser")
          localStorage.removeItem("token")
          this.checkLog = localStorage.getItem("login")
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
  addParentSay()
  {
  
    var body = 
    {
      "name":localStorage.getItem("NameUser"),
      "message":this.message,
      "image":localStorage.getItem("imageParent")
    }
    // console.log(body)
    if(localStorage.getItem("type") != "parent")
    {
      this.toastr.warningToastr("Login As Parent")

    }
    if(localStorage.getItem("type") == "parent")
    {
      this.auth.ParentSayPost(body).subscribe(res=>
        {
          // console.log(res)
          
          this.toastr.successToastr("Review Added")
          this.message = ""
          setTimeout(() => {
            window.location.reload()

          }, 2000);
   
        },
        err=>
        {
          this.toastr.warningToastr(err.message)
        }
        ) 

    }
  
     

   
  }

  



}
