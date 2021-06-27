import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from 'src/app/AllService/authentication.service';
import { ConceptsService } from 'src/app/AllService/concepts.service';





@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  customOptions: OwlOptions 
  parentSayData = []
  url = ConceptsService.imageUrlProfile


  constructor(private wowService: NgwWowService,public toastr: ToastrManager,private auth :AuthenticationService) { }

  ngOnInit(): void
   {
    this.get_ParentSay();
    this.wowService.init();
    this.customOptions= {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      autoplay:false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }
      },
      nav: false
    }
    document.getElementById('footer').style.width= "100%"
    document.getElementById('footer').style.marginLeft= "0%"
    

   }
   get_ParentSay()
   {
  
       this.auth.ParentSayGet().subscribe(res=>
         {
        
          if(res.success == false || res.success == "false")
          {
            this.toastr.warningToastr("Invalid TOKEN")
          }
          if(res.success == true || res.success == "true")
          {
         //  console.log(res.data)
          this.parentSayData = res.data
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
