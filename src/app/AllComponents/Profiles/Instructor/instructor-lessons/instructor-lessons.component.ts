import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { InstructorService } from 'src/app/AllService/instructor.service';

@Component({
  selector: 'app-instructor-lessons',
  templateUrl: './instructor-lessons.component.html',
  styleUrls: ['./instructor-lessons.component.scss']
})
export class InstructorLessonsComponent implements OnInit {
  timezoneData= []
  valTimezone='Australia/Darwin'
  valView = 'week'
  insructorName
  timeTableDate = []
  idLesson
  // NotAttending = false
  constructor(private SerInstructor:InstructorService,public toastr: ToastrManager,private router:Router) { }

  ngOnInit(): void {
    this.Time_table()
    this.get_Instructor()
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
     this.SerInstructor.TimeTable(this.valView,this.valTimezone).subscribe(res=>
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
get_Instructor()
  {
 
      this.SerInstructor.getInstractor().subscribe(res=>
        {
       
         if(res.success == false || res.success == "false")
         {
           this.toastr.warningToastr("Invalid TOKEN")
         }
         if(res.success == true || res.success == "true")
         {
          this.insructorName = res.data.first_name +" "+ res.data.last_name

         
           
         }
         
        }
        ,(err:any)=>
        {
          console.log(err)
          this.toastr.warningToastr(err.error.message)
        }
        )
       }
       idlesson(id)
       {
         this.idLesson = id

       }
       mark_Absent()
      {
    
          this.SerInstructor.markAbsent(this.idLesson).subscribe(res=>
            {
          
            if(res.success == false || res.success == "false")
            {
              this.toastr.warningToastr("Invalid TOKEN")
            }
            if(res.success == true || res.success == "true")
            {
              if (res.data.is_instructor_absent == true ||res.data.is_instructor_absent == 'true' )
              {
                this.toastr.successToastr("You Will Not Attend This Class Done")
                this.Time_table()
              }
              if (res.data.is_instructor_absent == false ||res.data.is_instructor_absent == 'false' )
              {
                this.toastr.successToastr("You Will  Attend This Class Done")
                this.Time_table()
              }
             
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
