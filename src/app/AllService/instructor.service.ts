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
export class InstructorService {

  constructor(private http: HttpClient,public toastr: ToastrManager,private router:Router) { }
  getInstractor() :Observable<any>
  {
    
    return this.http.get(ConceptsService.Domain_Url + 'instructor/get',{headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
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
  updateInstructor(body) :Observable<any>
  {
    return this.http.post(ConceptsService.Domain_Url + 'instructor/update',body,{headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
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
  courses() :Observable<any>
  {
    return this.http.get(ConceptsService.Domain_Url + 'getCourses', {headers:ConceptsService.getHeader()}).pipe(
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
  TimeTable(ViewType,timeZone) :Observable<any>
  {
    return this.http.get(ConceptsService.Domain_Url + 'instructor/getMyTimeTable?searchType='+ViewType+'&userTimezone='+timeZone, {headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
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
  timeZone() :Observable<any>
  {
    
    return this.http.get(ConceptsService.Domain_Url + 'getTimeZones', {headers:ConceptsService.getHeader()}).pipe(
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
  markAbsent(id) :Observable<any>
  {
    var body = {}
    return this.http.post(ConceptsService.Domain_Url + 'instructor/markAbsent/'+id, body,{headers:ConceptsService.getHeaderwithContentTkn()}).pipe(
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
