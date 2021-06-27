import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { InstructorService } from 'src/app/AllService/instructor.service';
import { StudentService } from 'src/app/AllService/student.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  studentInfo =  []
 
  timezoneData= []
  valTimezone='Australia/Darwin'
  valView = 'week'
  timeTableDate = []

  constructor(public toastr: ToastrManager,private SerInstructor:InstructorService,private SerStudent:StudentService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("type")== "student" || localStorage.getItem("login")== "true" || localStorage.getItem("actviation")== "1"  )
    {
      console.log("1")
      this.get_Student();
      this.Time_table();
     
    }
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
       
            this.SerStudent.TimeTable(this.valView,this.valTimezone).subscribe(res=>
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
  