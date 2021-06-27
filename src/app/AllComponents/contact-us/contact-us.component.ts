import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/AllService/authentication.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactform: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,public toastr: ToastrManager,private auth :AuthenticationService,private router:Router) { }

  ngOnInit(): void
 {
    document.getElementById('footer').style.width= "100%"
    document.getElementById('footer').style.marginLeft= "0%"
    this.contactform = this.formBuilder.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('.*com$')]],
      phone:['', [Validators.required,Validators.pattern('[0-9]*')]],
      message:['',Validators.required]
      })
  }
  get f() {
    return this.contactform.controls;
  }
  contactUS()
 {
      this.submitted = true;
      // console.log(this.contactform.value)
      // stop here if form is invalid
        if (this.contactform.invalid) {
            return;
        }
      var dataFormCome  = this.contactform.value
      // dataFormCome.email,dataFormCome.password,dataFormCome.UserName
   
      var body  =
      {
        "email":dataFormCome.email,
        "name":dataFormCome.name,
        "subject":dataFormCome.subject,
        "phone":dataFormCome.phone,
        "message":dataFormCome.message,
     
      }
      this.auth.contactUs(body).subscribe(res=>
        {
          console.log(res)
          if(res.success==false || res.success=='false')
          {
            this.toastr.warningToastr(res.message)

          }
          if(res.success==true || res.success=='true')
          {
            this.toastr.successToastr("Message Sent")
            setTimeout(() => {
              this.onReset();
             }, 500);
          }
          
           
          
       
            
            
  
  
        },
        err=>
        {
          this.toastr.warningToastr(err.message)
        })
 } 
 onReset()
 {
  this.submitted = false;
  this.contactform.reset();
 }

}
