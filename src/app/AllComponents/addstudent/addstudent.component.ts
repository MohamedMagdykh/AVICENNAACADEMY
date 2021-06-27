import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/AllService/authentication.service';
import { EOIService } from 'src/app/AllService/e-o-i.service';
import { InstructorService } from 'src/app/AllService/instructor.service';
import { ParentService } from 'src/app/AllService/parent.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {
  registerstudentForm: FormGroup;
  days = [
    "Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"
   ];
  selectedDays = [];
  dropdownSettings: IDropdownSettings;
  dropdownSettings2: IDropdownSettings;
  dropdownSettings3: IDropdownSettings;
  time = [];
  selectTime = [];
  Subject = [[], [], [], [], [], [], [], [], [], [], [], []];
  numberChild = 1;
  yearData = []
  checkNumberChilds = false
  submitted = false;
  showCourse = [false, false, false, false, false, false, false, false, false, false, false, false];
  constructor(private formBuilder: FormBuilder,private router:Router,public toastr: ToastrManager,private SerParent:ParentService,private SerEOF:EOIService) { }

  ngOnInit(): void {
    document.getElementById('footer').style.width= "100%"
    document.getElementById('footer').style.marginLeft= "0%"
    if(localStorage.getItem("type")!= "parent" || localStorage.getItem("login")!= "true"|| localStorage.getItem("actviation")!= "1" ||  localStorage.getItem('token') == null || localStorage.getItem('token') =="null"   )
    {
      this.router.navigate([''])
    }
    this.year()
    this.registerstudentForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('.*com$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      preferedDays: ['', Validators.required],
      year_id: ['', Validators.required],
      preferedTimes: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      
    }
    , {
      validator:this.MustMatch('password', 'confirmPassword')
      }
    )
  }
  year() {

    this.SerEOF.year().subscribe(res => {
      if (res.success == true || res.success == "true") {
        // console.log(res.data)
        this.yearData = res.data
        this.Preferred_Time();

      }

    }
      , (err: any) => {
        console.log(err)
        this.toastr.warningToastr(err.error.message)
      }
    )
  }

  Preferred_Time() {

    this.SerEOF.PreferredTime().subscribe(res => {
      if (res.success == true || res.success == "true") {
        console.log(res.data)
        // this.yearData=res.data
        this.time = []
        for (let i = 0; i < res.data.length; i++) {
          this.time.push(res.data[i])
          // console.log(this.time[0].time)

        }

      }

    }
      , (err: any) => {
        console.log(err)
        this.toastr.warningToastr(err.error.message)
      }
    )
  }
  get f() { return this.registerstudentForm.controls; }
  
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
  
  
  addchild() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerstudentForm.invalid) {
        return;
    }
   

    var dataFormCome  = this.registerstudentForm.value
    // console.log(dataFormCome.numberChildren)
  
     var dataFormGo = 
    { 
      "first_name":dataFormCome.firstName ,
        "last_name":dataFormCome.lastName ,
        "phone":dataFormCome.phone,
        "email":dataFormCome.email ,
        "year_id":dataFormCome.year_id,
        "password":dataFormCome.password,
        "preferedTimes":dataFormCome.preferedTimes,
        "preferedDays":dataFormCome.preferedDays,

    }
    this.SerParent.RegisterChild(dataFormGo).subscribe(res=>
      {
        // console.log(res)
        setTimeout(() => {
          this.toastr.successToastr("User Created")
          setTimeout(() => {
           
            this.router.navigate(['Parent'])
          
              this.onReset();
           
          }, 1000);
     
          
          
        }, 500);

      },
      err=>
      {
        this.toastr.warningToastr(err.message)
      })

    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(dataFormGo) )
    console.log(dataFormGo )
}
onReset()
{
 this.submitted = false;
 this.registerstudentForm.reset();
}


}
