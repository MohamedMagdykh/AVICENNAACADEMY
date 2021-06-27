import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import { ToastrManager } from 'ng6-toastr-notifications';
import { EOIService } from 'src/app/AllService/e-o-i.service';

@Component({
  selector: 'app-expression-of-interest',
  templateUrl: './expression-of-interest.component.html',
  styleUrls: ['./expression-of-interest.component.scss']
})
export class ExpressionOfInterestComponent implements OnInit {
  days = [];
  selectedDays = [];
  dropdownSettings:IDropdownSettings;
  dropdownSettings2:IDropdownSettings;
  dropdownSettings3:IDropdownSettings;
  time = [];
  selectTime = [];
  Subject = [[],[],[],[],[],[],[],[],[],[],[],[]];
  numberChild = 1;
  yearData = []

  checkNumberChilds = false
  registerForm: FormGroup;
  submitted = false;
  showCourse= [false,false,false,false,false,false,false,false,false,false,false,false];
  
  
 
  constructor(private formBuilder: FormBuilder, private SerEOI:EOIService,public toastr: ToastrManager,private router:Router ) {
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dropdownSettings2= {
      singleSelection: false,
      idField: 'item_id2',
      textField: 'item_text2',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit:3,
      allowSearchFilter: true
    };
    this.dropdownSettings3= {
      singleSelection: false,
      idField: 'item_id3',
      textField: 'item_text3',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit:3,
      allowSearchFilter: true
    };


      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email,Validators.pattern('.*com$')]],
        phone:['', [Validators.required,Validators.pattern('[0-9]*')]],
        numberChild:['', Validators.required],
        comment:[''],
        numberChildren:this.formBuilder.array([]) 
      
        
    })

     
   }

   get numberChildren() : FormArray {
    
    return this.registerForm.get("numberChildren") as FormArray
  }

  newchild(): FormGroup {
    return this.formBuilder.group({
      student_name: ['', Validators.required],
      preferedDays: ['', Validators.required],
      courses: ['', Validators.required],
      year_id: ['', Validators.required],
      preferedTimes: ['', Validators.required],
    })


  }

 
  ngOnInit(): void {
    this.year()
    this.Preferred_Time()
   this.days = [
     "Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"
    ];
    

    document.getElementById('footer').style.width= "100%"
    document.getElementById('footer').style.marginLeft= "0%"
    
   

  }

  numformgroupValdiation()
  {
    var Childs: number = +(<HTMLInputElement>document.getElementById("numberChildren")).value;
    this.numberChild = Childs
    while (this.numberChildren.length !== 0) {
      this.numberChildren.removeAt(0)
    }
    for (let i = 0; i < Childs; i++) {
      this.numberChildren.push(this.newchild());
    }
    this.numformschildren()
  }
  numformschildren() { 
    this.checkNumberChilds = true
    return Array(this.numberChild); 
  } 

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
   

    var dataFormCome  = this.registerForm.value
    // console.log(dataFormCome.numberChildren)
  
     var dataFormGo = 
    { 
      "first_name":dataFormCome.firstName ,
        "last_name":dataFormCome.lastName ,
        "phone":dataFormCome.phone,
        "email":dataFormCome.email ,
        "comments":dataFormCome.comment,
        "NumberOfChildren":dataFormCome.numberChild.length,
        "children":dataFormCome.numberChildren
    }
    this.SerEOI.EOI(dataFormGo).subscribe(res=>
      {
        console.log(res)
       if(res.success == true || res.success == "true")
       {
         console.log(res.data)
         this.toastr.successToastr("Data Sent")
        
       }
       if(res.success == false || res.success == "false")
       {
         console.log(res.data)
         this.toastr.warningToastr(res.message)
        
       }
      }
      ,(err:any)=>
      {
        console.log(err)
        this.toastr.warningToastr(err.error.message)
      }
      )



    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(dataFormGo) )
    console.log(dataFormGo )
}
 courses(id:any,x)
 {
  this.showCourse[x]=true
// console.log(x)
//  var x = id.target.options[id.target.selectedIndex].id
 var SubjectData = []
 var SubjectName= []
  this.yearData.forEach(element => {
    if(element.id.toString()==id.target.selectedIndex)
    {
      
      SubjectData= element.courses
      // console.log(SubjectData)
      for (let i = 0; i < SubjectData.length; i++) {
        
        SubjectName.push(SubjectData[i])
        
      }
      // this.Subject.push(SubjectName)
      this.Subject.splice(x,1,SubjectName);
      console.log(this.Subject[x])
    }
  });


  
 }
year()
{

     this.SerEOI.year().subscribe(res=>
       {
        if(res.success == true || res.success == "true")
        {
          // console.log(res.data)
          this.yearData=res.data
         
        }
        
       }
       ,(err:any)=>
       {
         console.log(err)
         this.toastr.warningToastr(err.error.message)
       }
       )
} 
Preferred_Time()
{

     this.SerEOI.PreferredTime().subscribe(res=>
       {
        if(res.success == true || res.success == "true")
        {
          console.log(res.data)
          // this.yearData=res.data
          this.time=[]
          for (let i = 0; i < res.data.length; i++) {
            this.time.push(res.data[i]) 
            console.log(this.time)
            
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
