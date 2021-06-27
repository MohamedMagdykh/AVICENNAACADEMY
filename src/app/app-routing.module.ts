import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './AllComponents/about-us/about-us.component';
import { AddstudentComponent } from './AllComponents/addstudent/addstudent.component';
import { ActivateAcountComponent } from './AllComponents/Auth/activate-acount/activate-acount.component';
import { ChangePassComponent } from './AllComponents/Auth/change-pass/change-pass.component';
import { ForgetPassComponent } from './AllComponents/Auth/forget-pass/forget-pass.component';
import { LoginComponent } from './AllComponents/Auth/login/login.component';
import { RegisterComponent } from './AllComponents/Auth/register/register.component';
import { TEMPForgettPassComponent } from './AllComponents/Auth/tempforgett-pass/tempforgett-pass.component';
import { ContactUsComponent } from './AllComponents/contact-us/contact-us.component';
import { CoursesComponent } from './AllComponents/courses/courses.component';
import { ExpressionOfInterestComponent } from './AllComponents/expression-of-interest/expression-of-interest.component';
import { HomeComponent } from './AllComponents/home/home.component';
import { InstructorLessonsComponent } from './AllComponents/Profiles/Instructor/instructor-lessons/instructor-lessons.component';
import { InstructorProfileComponent } from './AllComponents/Profiles/Instructor/instructor-profile/instructor-profile.component';
import { InstructorSideBarComponent } from './AllComponents/Profiles/Instructor/instructor-side-bar/instructor-side-bar.component';
import { ParentComponent } from './AllComponents/Profiles/parent/parent.component';
import { EditeProfileComponent } from './AllComponents/Profiles/Student/edite-profile/edite-profile.component';
import { LessonsComponent } from './AllComponents/Profiles/Student/lessons/lessons.component';
import { SaveVideoComponent } from './AllComponents/Profiles/Student/save-video/save-video.component';
import { SideBarComponent } from './AllComponents/Profiles/Student/side-bar/side-bar.component';
import { StudentDetailsComponent } from './AllComponents/student-details/student-details.component';
import { CanDeactivateGuard } from './AuthGards/deactivate-code.guard';

const routes: Routes = [
  { path: '',             component: HomeComponent },
  { path: 'addstudent',             component: AddstudentComponent },
  { path: 'contactUs',             component: ContactUsComponent },
  { path: 'ExpressionOfInterest',             component: ExpressionOfInterestComponent },
  { path: 'AboutUs',             component: AboutUsComponent },
  { path: 'login',             component: LoginComponent },
  { path: 'register',             component: RegisterComponent },
  { path: 'forgetPass',             component: ForgetPassComponent },
  { path: 'changePass',             component: ChangePassComponent },
  { path: 'tempForgett',             component: TEMPForgettPassComponent },
  { path: 'childDetails',             component: StudentDetailsComponent },
  
  { path: 'student',             component: SideBarComponent ,
  
   children: [
    {
      path: 'LessonsChild', 
      component: LessonsComponent, 
    },
    {
      path: 'editeProfile',  
      component: EditeProfileComponent, 
    },
    {
      path: 'saveVideo', 
      component: SaveVideoComponent, 
    }

  ],
  },
  { path: 'instructor',             component: InstructorSideBarComponent ,
  children: [
   {
     path: 'LessonsInstructor', 
     component: InstructorLessonsComponent, 
   },
   {
     path: 'editeProfileInstructor',  
     component: InstructorProfileComponent, 
   },

 ],
 },
 { path: 'Parent',             component: ParentComponent },
 { path: 'Course',             component: CoursesComponent },
 { path: 'formActivation',             component: ActivateAcountComponent  ,canDeactivate: [CanDeactivateGuard] },


// in Bottom
{ path: '**',             component: HomeComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  

}
