import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/AllService/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,public toastr: ToastrManager,private auth :AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    document.getElementById('footer').style.width= "100%"
    document.getElementById('footer').style.marginLeft= "0%"
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('.*com$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      })
      if( localStorage.getItem("login")== "true" &&  localStorage.getItem('token') != null && localStorage.getItem('token') !="null")
      {
        this.router.navigate([''])
      }
  }
  get f() {
    return this.loginForm.controls;
  }
  Loginform()
 {
      this.submitted = true;
      // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
      var dataFormCome  = this.loginForm.value
    
      // console.log(body)
      this.auth.LogIn(dataFormCome.email,dataFormCome.password).subscribe(res=>
        {
          // console.log(res)
          if(res.success == true || res.success == "true")
           {   setTimeout(() => {
            
            this.onReset();
            
          }, 500);
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
 onReset()
 {
  this.submitted = false;
  this.loginForm.reset();
 }

}
