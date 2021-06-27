import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/AllService/authentication.service';
import { ConceptsService } from 'src/app/AllService/concepts.service';
import { EOIService } from 'src/app/AllService/e-o-i.service';
import { InstructorService } from 'src/app/AllService/instructor.service';
import { ParentService } from 'src/app/AllService/parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  ParentInfo = []
  url = ConceptsService.imageUrlProfile
  img = "../../assets/no_user.jpg"
  FristName
  LastName
  Phone
  // coursesChoosen = []
  children = []
  // coursesName = []
  adress
  bool = false
  test
  
  public profilePicture;
  public profilePictureUrl;
  
  registerstudentForm: FormGroup;
  days = [];
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
  showCourse = [false, false, false, false, false, false, false, false, false, false, false, false];
  changePassForm: FormGroup;
   submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router,public toastr: ToastrManager,private auth :AuthenticationService,private SerParent:ParentService,private sanitizer:DomSanitizer,private SerEOF:EOIService) { }

  ngOnInit(): void {
    document.getElementById('footer').style.width= "83.333333%"
    document.getElementById('footer').style.marginLeft= "16.666667%"
    if(localStorage.getItem("type")!= "parent" || localStorage.getItem("login")!= "true"|| localStorage.getItem("actviation")!= "1" ||  localStorage.getItem('token') == null || localStorage.getItem('token') =="null"   )
    {
      this.router.navigate([''])
    }
    if(localStorage.getItem("type")== "parent" || localStorage.getItem("login")== "true" || localStorage.getItem("actviation")== "1"  )
    {
      
      this.get_Parent();
      this.get_Parentchild();
      
    }
    this.changePassForm = this.formBuilder.group({
      oldPass: ['', Validators.required],
      newpassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(8)]],
      }, {
    validator:this.MustMatch('newpassword', 'confirmNewPassword')
    })
 
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
  get_Parent()
  {
 
      this.SerParent.getparent().subscribe(res=>
        {
       
         if(res.success == false || res.success == "false")
         {
           this.toastr.warningToastr("Invalid TOKEN")
         }
         if(res.success == true || res.success == "true")
         {

         
           this.ParentInfo.push(res.data)
           localStorage.setItem("NameUser",res.data.first_name)  
           localStorage.setItem("imageParent",res.data.avatar) 
          //  for (let i = 0; i < res.data.courses.length; i++) {
           
          //   this.coursesChoosen = res.data.courses[i].course.id
          //  }

          //  console.log(this.coursesChoosen )
           
       
     
           
         }
         
        }
        ,(err:any)=>
        {
          console.log(err)
          this.toastr.warningToastr(err.error.message)
        }
        )
       }
  Updates_Parent(body)
  {
  
     console.log(body)
      this.SerParent.updateparent(body).subscribe(res=>
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
         this.Updates_Parent(formData)

       }
       showName()
       {
         this.FristName=this.ParentInfo[0].first_name
         this.LastName=this.ParentInfo[0].last_name

       }
       UbdateName()
       {
         var userName = {
           "first_name":this.FristName,
           "last_name":this.LastName,

         }
         if (this.FristName !="" ) {
           this.Updates_Parent(userName)
           
         }
         if (this.FristName =="" ) {
           this.toastr.warningToastr("FristName Required")
           
         }
         

       }
       showPhone()
       {
         this.Phone=this.ParentInfo[0].phone

       }
       UbdatePhone()
       {
        
         if (this.Phone !=this.ParentInfo[0].phone ) {
           var phone = {
             "phone":this.Phone,
           }
           this.Updates_Parent(phone)
           
         }
         if (this.Phone ==this.ParentInfo[0].phone ) {
           this.toastr.warningToastr("The phone has already been taken.")
           
         }
         

       }
       
       showAdress()
       {
         this.adress=this.ParentInfo[0].address

       }
       UbdateAdress()
       {
         var adress = {
           "address":this.adress,
      
         }
        
           this.Updates_Parent(adress)
           
         
       }
   
      //  UpdateCourse()
      //  {
      //    console.log(this.coursesChoosen)
      //    var x = []
      //    // x.push(this.coursesChoosen)
      //    var courses = {
      //      "courses":[this.coursesChoosen],

      //    }
      
      //      this.Updates_Parent(courses)
           
      
         

      //  }
       get_Parentchild()
       {
      
           this.SerParent.getparentchildren().subscribe(res=>
             {
               console.log(res)
               this.children = res.data

               
             
            
             }
             ,(err:any)=>
             {
               console.log(err)
               this.toastr.warningToastr(err.error.message)
             }
             )
       }
studentDetails(id)
{
  localStorage.setItem("idStudentDetails",id)
  this.router.navigate(['childDetails'])

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
