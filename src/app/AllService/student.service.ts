import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Observable, throwError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { ConceptsService } from './concepts.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient,public toastr: ToastrManager,private router:Router) { }
  getStudent() :Observable<any>
  {
    return this.http.get(ConceptsService.Domain_Url + 'student/get',{headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
      map((res:any)=>
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
  updatestudent(body) :Observable<any>
  {
    var id = localStorage.getItem("idStudent")
    return this.http.post(ConceptsService.Domain_Url + 'student/updatestudent/{'+id+'}',body,{headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
      map((res:any)=>
        {
        //  console.log(res)
          return res
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        }),
        timeout(15000)
    )
  }
  TimeTable(ViewType,timeZone) :Observable<any>
  {
    var id = localStorage.getItem("idStudent")
    return this.http.get(ConceptsService.Domain_Url + 'student/getMyTimeTable?searchType='+ViewType+'&userTimezone='+timeZone+'&student_id='+id, {headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
      map((res:any)=>
        {
       
          return res
        }),
        catchError((error: Response) => {
          // console.log("userData : ", error)

          return throwError(error);
        }),
        timeout(15000)
    )
  }
  getSaveLesson() :Observable<any>
  {
    return this.http.get(ConceptsService.Domain_Url + 'student/getMySavedLessons',{headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
      map((res:any)=>
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

}
