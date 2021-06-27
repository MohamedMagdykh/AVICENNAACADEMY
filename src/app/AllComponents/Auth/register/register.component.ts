import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/AllService/authentication.service';
import { EOIService } from 'src/app/AllService/e-o-i.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  code = "test"
   mobile 
  constructor(private formBuilder: FormBuilder,public toastr: ToastrManager,private SerEOI:EOIService,private auth :AuthenticationService,private router:Router) {
    this.registerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      typeUser: ['parent'],
      email: ['', [Validators.required, Validators.email,Validators.pattern('.*com$')]],
      phone:['', [Validators.required,Validators.pattern('[0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      code:['']
      }, {
    validator:this.MustMatch('password', 'confirmPassword')
    })
   }

  ngOnInit(): void {
    document.getElementById('footer').style.width= "100%"
    document.getElementById('footer').style.marginLeft= "0%"
    if( localStorage.getItem("login")== "true" &&  localStorage.getItem('token') != null && localStorage.getItem('token') !="null")
    {
      this.router.navigate([''])
    }
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
  
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        
        if (control.errors && !control.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }
  
        // set error on matchingControl if validation fails
        // console.log(control.value)
        // console.log(matchingControl.value)
  
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
            control.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
            control.setErrors(null);
        }
    }
  }
  get f() {
    return this.registerForm.controls;
  }
  registerform()
 {
      this.submitted = true;
      console.log(this.registerForm.value)
      // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
      var dataFormCome  = this.registerForm.value
      // dataFormCome.email,dataFormCome.password,dataFormCome.UserName
   
      var body  =
      {
        "email":dataFormCome.email,
        "password":dataFormCome.password,
        "role":dataFormCome.typeUser,
        "first_name":dataFormCome.firstName,
        "last_name":dataFormCome.lastName,
        "phone":dataFormCome.phone
      }
      this.auth.Register(body).subscribe(res=>
        {
          // console.log(res)
          setTimeout(() => {
            this.toastr.successToastr("User Created")
            setTimeout(() => {
              this.auth.LogIn(dataFormCome.email,dataFormCome.password).subscribe(res=>
                {},
                  err=>
                {
                  this.toastr.warningToastr(err.message)
                })
              this.router.navigate(['login'])
              setTimeout(() => {
                this.onReset();
                 
               }, 500);
            }, 1500);
       
            
            
          }, 500);
  
        },
        err=>
        {
          this.toastr.warningToastr(err.message)
        })
 } 
 onReset()
 {
  this.submitted = false;
  this.registerForm.reset();
 }
// EOI-60bb6d15661d3 
 GenerationCode()
 {
    if(this.registerForm.value.code!="")
    {

 

     this.SerEOI.generationCode(this.registerForm.value.code).subscribe(res=>
       {
      
        if(res.success == false || res.success == "false")
        {
          this.toastr.warningToastr("invaled Code")
        }
        if(res.success == true || res.success == "true")
        {
          this.toastr.successToastr("Data Returned Successfully")
          // this.registerForm.controls.firstName = res.data.first_name
          // this.registerForm.controls.lastName = res.data.last_name
          // this.registerForm.controls.email  = res.data.email
          // this.mobile  =res.data.phone
          // console.log(this.registerForm.controls.phone)
          
          this.registerForm = this.formBuilder.group({
            firstName: [res.data.first_name, Validators.required],
            lastName: [res.data.last_name, Validators.required],
            typeUser: ['parent'],
            email: [res.data.email, [Validators.required, Validators.email,Validators.pattern('.*com$')]],
            phone:[res.data.phone, [Validators.required,Validators.pattern('[0-9]*')]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
            code:['']
            }, {
          validator:this.MustMatch('password', 'confirmPassword')
          })
    
          
        }
        
       }
       ,(err:any)=>
       {
         console.log(err)
         this.toastr.warningToastr(err.error.message)
       }
       )
      }
 }

}
