import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/AllService/authentication.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent implements OnInit {

  constructor(private router:Router,public toastr: ToastrManager,private auth :AuthenticationService) { }
mail
  ngOnInit(): void {
    document.getElementById('footer').style.width= "100%"
    document.getElementById('footer').style.marginLeft= "0%"
    if( localStorage.getItem("login")== "true"  )
    {
      this.router.navigate([''])
    }

  }
  forgettpasss()
  {
       // console.log(body)
       this.auth.ForgetPass({"email":this.mail}).subscribe(res=>
         {
           console.log(res)
           if(res.success == false || res.success == "false")
           { 
            this.toastr.warningToastr("Invalid E-mail")  
            }
           if(res.success == true || res.success == "true")
            {
              this.toastr.successToastr("Check Your Mail")
                 setTimeout(() => {
             
              this.router.navigate(['tempForgett'])
              this.mail = ""
      
           }, 1500);
         }
        
       
           //  console.log("Bearer "+res.token)
         }
         ,(err:any)=>
         {
           console.log(err)
           this.toastr.warningToastr(err.error.message)
         }
         )
  } 

}
