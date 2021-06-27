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
export class ParentService {

  constructor(private http: HttpClient,public toastr: ToastrManager,private router:Router) { }
  getparent() :Observable<any>
  {
    return this.http.get(ConceptsService.Domain_Url + 'parent/get',{headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
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
  updateparent(body) :Observable<any>
  {
    return this.http.post(ConceptsService.Domain_Url + 'parent/update',body,{headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
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
  getparentchildren() :Observable<any>
  {
    return this.http.get(ConceptsService.Domain_Url + 'parent/getMyStudents',{headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
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
  RegisterChild(data) :Observable<any>
  {
    return this.http.post( ConceptsService.Domain_Url + 'parent/addStudent',data,
    {
       headers:ConceptsService.getHeaderwithContentTkn()
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
  updateChild(body,id) :Observable<any>
  {
    return this.http.post(ConceptsService.Domain_Url + 'parent/updatestudent/{'+id+'}',body,{headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
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
  TimeTable(ViewType,timeZone) :Observable<any>
  {
    var id = localStorage.getItem("idStudentDetails")
    return this.http.get(ConceptsService.Domain_Url + 'parent/getMyTimeTable?searchType='+ViewType+'&userTimezone='+timeZone+'&student_id='+id, {headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
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
}
