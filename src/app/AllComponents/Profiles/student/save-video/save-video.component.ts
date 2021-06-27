import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { StudentService } from 'src/app/AllService/student.service';

@Component({
  selector: 'app-save-video',
  templateUrl: './save-video.component.html',
  styleUrls: ['./save-video.component.scss']
})
export class SaveVideoComponent implements OnInit {
link = []
  constructor(public toastr: ToastrManager,private SerStudent:StudentService,private router:Router) { }

  ngOnInit(): void {
    this. get_SaveLesson()
  }
 
  get_SaveLesson()
  {
 
      this.SerStudent.getSaveLesson().subscribe(res=>
        {
       
         if(res.success == false || res.success == "false")
         {
           this.toastr.warningToastr("Invalid TOKEN")
         }
         if(res.success == true || res.success == "true")
         {
           this.link.push(res.data)
           console.log(this.link)

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
