import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/AllService/authentication.service';
import { ConceptsService } from 'src/app/AllService/concepts.service';
import { InstructorService } from 'src/app/AllService/instructor.service';
import { StudentService } from 'src/app/AllService/student.service';

@Component({
  selector: 'app-edite-profile',
  templateUrl: './edite-profile.component.html',
  styleUrls: ['./edite-profile.component.scss']
})
export class EditeProfileComponent implements OnInit {
  studentInfo = []
  coursesChoosen = []
  url = ConceptsService.imageUrlProfile
  img = "../../assets/no_user.jpg"
  FristName
  LastName
  Phone
  courses = []
  coursesName = []
  adress
  bool = false
  test
  changePassForm: FormGroup;
   submitted = false;

public profilePicture;
public profilePictureUrl;
  constructor(private sanitizer:DomSanitizer,public toastr: ToastrManager,private SerInstructor:InstructorService,private SerStudent:StudentService,private router:Router,private auth :AuthenticationService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("type"))
    if(localStorage.getItem("type")== "student" || localStorage.getItem("login")== "true" || localStorage.getItem("actviation")== "1"  )
    {
      console.log("1")
      this.get_Student();
     
    }
    this.changePassForm = this.formBuilder.group({
      oldPass: ['', Validators.required],
      newpassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(8)]],
      }, {
    validator:this.MustMatch('newpassword', 'confirmNewPassword')
    })

  }
  get_Student()
  {
 
      this.SerStudent.getStudent().subscribe(res=>
        {
       
         if(res.success == false || res.success == "false")
         {
           this.toastr.warningToastr("Invalid TOKEN")
         }
         if(res.success == true || res.success == "true")
         {
         localStorage.setItem("idStudent",res.data.id)
           this.studentInfo.push(res.data)
           localStorage.setItem("NameUser",res.data.first_name)  
          //  for (let i = 0; i < res.data.courses.length; i++) {
           
          //   this.coursesChoosen = res.data.courses[i].course.id
          //  }

           console.log(this.coursesChoosen )
  
         }
         
        }
        ,(err:any)=>
        {
          console.log(err)
          this.toastr.warningToastr(err.error.message)
        }
        )
       }
       Updates_Student(body)
       {
       
          console.log(body)
           this.SerStudent.updatestudent(body).subscribe(res=>
             {
            
              if(res.success == false || res.success == "false")
              {
                this.toastr.warningToastr("Invalid TOKEN")
              }
              if(res.success == true || res.success == "true")
              {
     
                this.toastr.successToastr("Changed")
                setTimeout(() => {
                  window.location.reload()
                }, 1500);
                
              }
              
             }
             ,(err:any)=>
             {
               console.log(err)
               this.toastr.warningToastr(err.error.message)
             }
             )
            }
            changeProfile(event) { 
              if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();
              let imfile=event.target.files[0]
              this.test =event.target.files[0]
              reader.readAsArrayBuffer(imfile); // read file as data url
              reader.onload = (event) => { // called once readAsDataURL is completed
               this.profilePicture = new Blob([reader.result], { type: imfile.type });
                // console.log(this.imgFile)
               let path = URL.createObjectURL(this.profilePicture);
               this.profilePictureUrl = this.sanitizer.bypassSecurityTrustUrl(path);
               if(this.profilePictureUrl!=null)
               {
                 this.bool=true
               }
                  }
            }
            }
            changePhoto()
            {
              let formData: FormData = new FormData();
              formData.append("photo",this.profilePicture);
              this.Updates_Student(formData)

            }
            showName()
            {
              this.FristName=this.studentInfo[0].first_name
              this.LastName=this.studentInfo[0].last_name

            }
            UbdateName()
            {
              var userName = {
                "first_name":this.FristName,
                "last_name":this.LastName,

              }
              if (this.FristName !="" ) {
                this.Updates_Student(userName)
                
              }
              if (this.FristName =="" ) {
                this.toastr.warningToastr("FristName Required")
                
              }
              

            }
            showPhone()
            {
              this.Phone=this.studentInfo[0].phone

            }
            UbdatePhone()
            {
             
              if (this.Phone !=this.studentInfo[0].phone ) {
                var phone = {
                  "phone":this.Phone,
                }
                this.Updates_Student(phone)
                
              }
              if (this.Phone ==this.studentInfo[0].phone ) {
                this.toastr.warningToastr("The phone has already been taken.")
                
              }
              

            }
            
            showAdress()
            {
              this.adress=this.studentInfo[0].address

            }
            UbdateAdress()
            {
              var adress = {
                "address":this.adress,
           
              }
             
                this.Updates_Student(adress)
              
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
              return this.changePassForm.controls;
            }
            changePassform()
           {
                this.submitted = true;
                console.log(this.changePassForm.value)
                // stop here if form is invalid
                  if (this.changePassForm.invalid) {
                      return;
                  }
                var dataFormCome  = this.changePassForm.value
                // dataFormCome.email,dataFormCome.password,dataFormCome.UserName
             
                var body  =
                {
                  "oldpassword":dataFormCome.oldPass,
                  "newpassword":dataFormCome.newpassword,
                  "newpassword_confirmation":dataFormCome.confirmNewPassword,
                }
          
                  this.auth.ChangePass(body).subscribe(res=>
                    {
                      if(res.success == false || res.success == 'false' )
                      {
                        this.toastr.warningToastr(res.message)
                      }
                      if(res.success == true || res.success == 'true' )
                      {
                        this.toastr.successToastr("changed")
                        this.onReset()
                        
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
            this.changePassForm.reset();
           }

}
