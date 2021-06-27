import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, timeout } from 'rxjs/operators';
import { ConceptsService } from './concepts.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient,public toastr: ToastrManager,private router:Router) { }
  Register(data) :Observable<any>
  {
    return this.http.post( ConceptsService.Domain_Url + 'auth/register',data,
    {
       headers:ConceptsService.getHeader()
    }).pipe(
      map(res=>
        {
          // console.log(res)
          return res
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        }),
        timeout(15000)
    )
  }

  LogIn(mail,pass) :Observable<any>
  {
    var data = {
      "email":mail,
      "password":pass,
      "remember_me":1

    }
    return this.http.post(ConceptsService.Domain_Url + 'auth/login',data,
    {
       headers:ConceptsService.getHeader()
    }).pipe(
      map((res:any)=>
        {
          
          console.log(res)
          if(res.success == false || res.success == "false")
          {
            this.toastr.warningToastr(" Your Password Or E-mail Incorrect")

          }
          if((res.data==undefined || res.data=="undefined") && (res.is_verified == 0 || res.is_verified == "0"))
          {
            this.toastr.warningToastr("Activation Your Acount")
            if(res.role_passport == "instructor")
            {
              localStorage.setItem("type",res.role_passport)
              // localStorage.setItem("login","true")
              localStorage.setItem("NameUser",res.first_name)  
              localStorage.setItem("mail",res.email) 
              localStorage.setItem("actviation",res.is_verified)  
             
              
              setTimeout(() => {
                this.router.navigate(['formActivation'])
  
              }, 1200);
             
            }
            if(res.role_passport == "student")
            {
              localStorage.setItem("type",res.role_passport)
              // localStorage.setItem("login","true")
              localStorage.setItem("NameUser",res.first_name)  
              localStorage.setItem("mail",res.email) 
              localStorage.setItem("actviation",res.is_verified)  
             
              
              setTimeout(() => {
                this.router.navigate(['formActivation'])
  
              }, 1200);
              setTimeout(() => {
                window.location.reload()
              }, 1500);
            }
            if(res.role_passport == "parent")
            {
              localStorage.setItem("type",res.role_passport)
              // localStorage.setItem("login","true")
              localStorage.setItem("NameUser",res.first_name)  
              localStorage.setItem("mail",res.email) 
              localStorage.setItem("actviation",res.is_verified)  
             
              
              setTimeout(() => {
                this.router.navigate(['formActivation'])
  
              }, 1200);
              setTimeout(() => {
                window.location.reload()
              }, 1500);
            }
       
        
            // if(res.is_verified == 0)
            // {
            //   setTimeout(() => {
            //     document.getElementById("ActivationAcountbtn").click();
  
            //   }, 500);
  
            // }
          }
          if((res.data!=undefined && res.data!="undefined") && (res.success == true || res.success == "true"))
          {
            this.toastr.successToastr("LogIn")
            if(res.data.user.role_passport == "instructor")
            {
              localStorage.setItem("type",res.data.user.role_passport)
              localStorage.setItem("login","true")
              localStorage.setItem("NameUser",res.data.user.first_name)  
              localStorage.setItem("mail",res.data.user.email) 
              localStorage.setItem("actviation",res.data.user.is_verified)  
              localStorage.setItem("token","Bearer "+res.data.access_token)
              console.log(res.data.access_token)
              
              setTimeout(() => {
                this.router.navigate(['instructor/LessonsInstructor'])
  
              }, 1200);
             
            }  setTimeout(() => {
              window.location.reload()
            }, 1500);
            if(res.data.user.role_passport == "parent")
            {
              localStorage.setItem("type",res.data.user.role_passport)
              localStorage.setItem("login","true")
              localStorage.setItem("NameUser",res.data.user.first_name)  
              localStorage.setItem("mail",res.data.user.email) 
              localStorage.setItem("actviation",res.data.user.is_verified) 
  
              localStorage.setItem("token","Bearer "+res.data.access_token)
              console.log(res.data.access_token)
              setTimeout(() => {
                this.router.navigate(['Parent'])
  
                
              }, 1200);
              setTimeout(() => {
                window.location.reload()
              }, 1500);
            }
            console.log("1")

            if(res.data.user.role_passport == "student")
            {
              console.log("2")
              localStorage.setItem("type", res.data.user.role_passport)
              localStorage.setItem("login","true")
              localStorage.setItem("NameUser",res.data.user.first_name)  
              localStorage.setItem("mail",res.data.user.email) 
              localStorage.setItem("actviation",res.data.user.is_verified)  
             
              localStorage.setItem("token","Bearer "+res.data.access_token)
              console.log(res.data.access_token)
              setTimeout(() => {
                this.router.navigate(['student/LessonsChild'])
  
                
              }, 1200);
              setTimeout(() => {
                window.location.reload()
              }, 1500);
            }
          }
        
          
       
         
        
          
          
         return res;

        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        })
       
    )
  }
  activate_user(code) :Observable<any>
  {
    var data =
    {
      "temp":code,
      "email":localStorage.getItem("mail")
    }
    return this.http.post( ConceptsService.Domain_Url + 'auth/activate_user',data,
    {
       headers:ConceptsService.getHeader()
    }).pipe(
      map((res:any)=>
      
        {
          console.log(res)
          if(res.success == false ||res.success == "false" )
          {
            this.toastr.warningToastr("This code is invalid")
          }
          if(res.success == true ||res.success == "true" )
          {
            this.toastr.successToastr("Account Has Been Activated")
            localStorage.setItem("login","true")
            localStorage.setItem("token","Bearer "+res.data.access_token)
            localStorage.setItem("actviation","1") 
            if(localStorage.getItem("type") == "instructor")
            {
                
                this.router.navigate(['instructor/LessonsInstructor'])
  
            }
            if(localStorage.getItem("type") == "parent")
            {
               
                this.router.navigate(['Parent'])
  
            }
            if(localStorage.getItem("type") == "student")
            {
              
                this.router.navigate(['student/LessonsChild'])
  
            }
            setTimeout(() => {
              window.location.reload()
            }, 1500);
          }
     
      
          // setTimeout(() => {
          //   document.getElementById("ActivationAcountbtn").click();

          // }, 500);
        
          return res
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        }),
        timeout(15000)
    )
  }
  resend_activate() :Observable<any>
  {
    console.log(localStorage.getItem("mail"))
    return this.http.post( ConceptsService.Domain_Url + 'auth/resend_activation',localStorage.getItem("mail"),
    {
       headers:ConceptsService.getHeader()
    }).pipe(
      map(res=>
        {
          this.toastr.successToastr("Code Sent to Your Mail")
          setTimeout(() => {
            document.getElementById("closeResendCodeModel").click();  
        
          }, 500);
       
          return res
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        }),
        timeout(15000)
    )
  }
  LogOut() :Observable<any>
  {
    // const header = new HttpHeaders().append('Authorization', localStorage.getItem('token')); // may be localStorage/sessionStorage
    console.log(localStorage.getItem("actviation"))

 

    return this.http.get(ConceptsService.Domain_Url + 'auth/logout', {headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
      map((res:any)=>
        {
          this.toastr.successToastr(res.message)
          setTimeout(() => {
            window.location.reload()
          }, 1000);
          return res
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        }),
        timeout(15000)
    )
  }

  ChangePass(body) :Observable<any>
  {
  
    return this.http.post(ConceptsService.Domain_Url + 'auth/change_password',body,
    {
       headers:ConceptsService.getHeaderwithContentTkn()
    }).pipe(
      map((res:any)=>
        {
          
         return res;

        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        })
       
    )
  }
  ForgetPass(body) :Observable<any>
  {
  console.log(body)
    return this.http.post(ConceptsService.Domain_Url + 'auth/send_reset_mail',body,
    {
       headers:ConceptsService.getHeader()
    }).pipe(
      map((res:any)=>
        {
          
         return res;

        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        })
       
    )
  }
  ForgetPassTemp(body) :Observable<any>
  {
  
    return this.http.post(ConceptsService.Domain_Url + 'auth/check_temp_pass',body,
    {
       headers:ConceptsService.getHeader()
    }).pipe(
      map((res:any)=>
        {
          
         return res;

        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        })
       
    )
  }
  contactUs(data) :Observable<any>
  {
    return this.http.post( ConceptsService.Domain_Url + 'contact_us',data,
    {
       headers:ConceptsService.getHeader()
    }).pipe(
      map(res=>
        {
          console.log(res)
          return res
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        }),
        timeout(15000)
    )
  }
  ParentSayPost(data) :Observable<any>
  {
    return this.http.post( ConceptsService.Domain_Url + 'what_parent_say_about_us',data,
    {
       headers:ConceptsService.getHeader()
    }).pipe(
      map(res=>
        {
          console.log(res)
          return res
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        }),
        timeout(15000)
    )
  }
  ParentSayGet() :Observable<any>
  {
    return this.http.get( ConceptsService.Domain_Url + 'what_parent_say_about_us',
    {
       headers:ConceptsService.getHeader()
    }).pipe(
      map(res=>
        {
          // console.log(res)
          return res
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        }),
        timeout(15000)
    )
  }
  
}

