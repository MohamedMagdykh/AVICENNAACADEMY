import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/AllService/authentication.service';

@Component({
  selector: 'app-tempforgett-pass',
  templateUrl: './tempforgett-pass.component.html',
  styleUrls: ['./tempforgett-pass.component.scss']
})
export class TEMPForgettPassComponent implements OnInit {
  ForgetPassForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,public toastr: ToastrManager,private router:Router,private auth :AuthenticationService) { }

  ngOnInit(): void {
    document.getElementById('footer').style.width= "100%"
    document.getElementById('footer').style.marginLeft= "0%"
    this.ForgetPassForm = this.formBuilder.group({
      temp: ['', Validators.required],
      mail: ['', Validators.required],
      newpassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(8)]],
      }, {
    validator:this.MustMatch('newpassword', 'confirmNewPassword')
    })
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
    return this.ForgetPassForm.controls;
  }
  ForgetPass()
 {
      this.submitted = true;
      console.log(this.ForgetPassForm.value)
      // stop here if form is invalid
        if (this.ForgetPassForm.invalid) {
            return;
        }
      var dataFormCome  = this.ForgetPassForm.value
      // dataFormCome.email,dataFormCome.password,dataFormCome.UserName
   
      var body  =
      {
        "email":dataFormCome.mail,
        "temp_password":dataFormCome.temp,
        "newpassword":dataFormCome.newpassword,
        "newpassword_confirmation":dataFormCome.confirmNewPassword,
      }

        this.auth.ForgetPassTemp(body).subscribe(res=>
          {
            if(res.success == false || res.success == 'false' )
            {
              this.toastr.warningToastr(res.message)
            }
            if(res.success == true || res.success == 'true' )
            {
              this.toastr.successToastr("changed")

              this.onReset()
              setTimeout(() => {
                this.router.navigate(['tempForgett'])
                
              }, 1000);
        

              
            }
            console.log(res)
            
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
  this.ForgetPassForm.reset();
 }


}
