import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/AllService/authentication.service';
import { ConceptsService } from 'src/app/AllService/concepts.service';
import { InstructorService } from 'src/app/AllService/instructor.service';
import { ParentService } from 'src/app/AllService/parent.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  children = []
  url = ConceptsService.imageUrlProfile
  img = "../../assets/no_user.jpg"
  FristName
  Phone
  adress
  bool = false
  test
  public profilePicture;
  public profilePictureUrl;
  timezoneData= []
  valTimezone='Australia/Darwin'
  valView = 'week'

  timeTableDate = []
  
  constructor(private auth :AuthenticationService,public toastr: ToastrManager,private router:Router,private SerParent:ParentService,private sanitizer:DomSanitizer,private SerInstructor:InstructorService) { }

  ngOnInit(): void {
    document.getElementById('footer').style.width= "83.333333%"
    document.getElementById('footer').style.marginLeft= "16.666667%"
    this.get_Parentchild()
    this.Time_table()
    if(localStorage.getItem("type")!= "parent" || localStorage.getItem("login")!= "true"|| localStorage.getItem("actviation")!= "1" ||  localStorage.getItem('token') == null || localStorage.getItem('token') =="null"   )
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
  get_Parentchild()
  {
    var idchild = localStorage.getItem("idStudentDetails")
 console.log(idchild)
      this.SerParent.getparentchildren().subscribe(res=>
        {
        
          for (let i = 0; i < res.data.length; i++) {
            if(res.data[i].id == idchild)
            this.children.push(res.data[i])
            
          }
          console.log(this.children)


          
        }
        ,(err:any)=>
        {
          console.log(err)
          this.toastr.warningToastr(err.error.message)
        }
        )
  }
  Updates_Student_Parent(body)
  {
  
     console.log(body)
      this.SerParent.updateChild(body,localStorage.getItem("idStudentDetails")).subscribe(res=>
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
         this.Updates_Student_Parent(formData)

       }
       showName()
       {
         this.FristName=this.children[0].first_name
       

       }
       UbdateName()
       {
         var userName = {
           "first_name":this.FristName,
 
         }
         if (this.FristName !="" ) {
           this.Updates_Student_Parent(userName)
           
         }
         if (this.FristName =="" ) {
           this.toastr.warningToastr("FristName Required")
           
         }
         

       }
       showPhone()
       {
         this.Phone=this.children[0].phone

       }
       UbdatePhone()
       {
        
         if (this.Phone !=this.children[0].phone ) {
           var phone = {
             "phone":this.Phone,
           }
           this.Updates_Student_Parent(phone)
           
         }
         if (this.Phone ==this.children[0].phone ) {
           this.toastr.warningToastr("The phone has already been taken.")
           
         }
         

       }
       
       showAdress()
       {
         this.adress=this.children[0].address

       }
       UbdateAdress()
       {
         var adress = {
           "address":this.adress,
      
         }
        
           this.Updates_Student_Parent(adress)
           
         
       }
       Time_Zone()
{

     this.SerInstructor.timeZone().subscribe(res=>
       {
        if(res.success == true || res.success == "true")
        {
          // console.log(res.data)
          this.timezoneData=res.data
          
        }
        
       }
       ,(err:any)=>
       {
         console.log(err)
         this.toastr.warningToastr(err.error.message)
       }
       )
} 
Time_table()
{

  console.log(this.valView + this.valTimezone)
     this.SerParent.TimeTable(this.valView,this.valTimezone).subscribe(res=>
       {
        if(res.success == true || res.success == "true")
        {
          // console.log(res.data)
          this.Time_Zone();
    
          res.data.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            // console.log(new Date(b.date.substr(0,b.date.indexOf(' '))))
          console.log(b.date)
          console.log(a.date)
          
            // console.log(new Date("June 12 2021 02:00:00") )
            var res = b.date.split(" ");
             var resB1 = res[0]
             var resB2 = res[1]
             var res11 = resB1.split("-");
             var res2 = a.date.split(" ");
             var resA1 = res2[0]
             var resA2 = res2[1]
             var res22 = resA1.split("-");
             var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
          var dateUtc1=  month[parseInt(res11[1])]+" "+res11[2]+" "+res11[0]+" "+ resB2
          var dateUtc2=  month[parseInt(res22[1])]+" "+res22[2]+" "+res22[0]+" "+ resA2

            // var dateWithOutTime = b.date.substr(0,b.date.indexOf(' '));
            // var dateWithOutTime2 = a.date.substr(0,a.date.indexOf(' '));

            // console.log(new Date(dateWithOutTime).getTime())
            console.log()
            return new Date(dateUtc1).getTime() - new Date(dateUtc2).getTime();
          });
          res.data.reverse();
          this.timeTableDate = []
          for (let i = 0; i < res.data.length; i++) {
           var dateWithOutTime = res.data[i].date.substr(0,res.data[i].date.indexOf(' '));
    
           var d = new Date(dateWithOutTime);
           var weekday = new Array(7);
           weekday[0] = "Sunday";
           weekday[1] = "Monday";
           weekday[2] = "Tuesday";
           weekday[3] = "Wednesday";
           weekday[4] = "Thursday";
           weekday[5] = "Friday";
           weekday[6] = "Saturday";
           var n = weekday[d.getDay()];
         
           this.timeTableDate.push({"day":n,"data":res.data[i]})
           res.data[i].to =  res.data[i].to.slice(0, -3);
           res.data[i].from =  res.data[i].from.slice(0, -3);
           res.data[i].date =res.data[i].date.substr(0,res.data[i].date.indexOf(' '));
            
          }
       
          console.log(this.timeTableDate)
          
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
