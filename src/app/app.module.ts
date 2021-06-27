import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './AllComponents/home/home.component';
import { ContactUsComponent } from './AllComponents/contact-us/contact-us.component';
import { ExpressionOfInterestComponent } from './AllComponents/expression-of-interest/expression-of-interest.component';
import { AboutUsComponent } from './AllComponents/about-us/about-us.component';
import { LoginComponent } from './AllComponents/Auth/login/login.component';
import { ForgetPassComponent } from './AllComponents/Auth/forget-pass/forget-pass.component';
import { ChangePassComponent } from './AllComponents/Auth/change-pass/change-pass.component';
import { RegisterComponent } from './AllComponents/Auth/register/register.component';
import { LessonsComponent } from './AllComponents/Profiles/Student/lessons/lessons.component';
import { EditeProfileComponent } from './AllComponents/Profiles/Student/edite-profile/edite-profile.component';
import { SaveVideoComponent } from './AllComponents/Profiles/Student/save-video/save-video.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgwWowModule } from 'ngx-wow';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { SideBarComponent } from './AllComponents/Profiles/Student/side-bar/side-bar.component';
import { CoursesComponent } from './AllComponents/courses/courses.component';
import { InstructorSideBarComponent } from './AllComponents/Profiles/Instructor/instructor-side-bar/instructor-side-bar.component';
import { InstructorLessonsComponent } from './AllComponents/Profiles/Instructor/instructor-lessons/instructor-lessons.component';
import { InstructorProfileComponent } from './AllComponents/Profiles/Instructor/instructor-profile/instructor-profile.component';
import { ParentComponent } from './AllComponents/Profiles/parent/parent.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ng6-toastr-notifications';
import { CommonModule } from '@angular/common';
import { ActivateAcountComponent } from './AllComponents/Auth/activate-acount/activate-acount.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddstudentComponent } from './AllComponents/addstudent/addstudent.component';
import { StudentDetailsComponent } from './AllComponents/student-details/student-details.component';
import { TEMPForgettPassComponent } from './AllComponents/Auth/tempforgett-pass/tempforgett-pass.component';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    ExpressionOfInterestComponent,
    AboutUsComponent,
    LoginComponent,
    ForgetPassComponent,
    ChangePassComponent,
    RegisterComponent,
    LessonsComponent,
    EditeProfileComponent,
    SaveVideoComponent,
    SideBarComponent,
    CoursesComponent,
    InstructorSideBarComponent,
    InstructorLessonsComponent,
    InstructorProfileComponent,
    ParentComponent,
    ActivateAcountComponent,
    AddstudentComponent,
    StudentDetailsComponent,
    TEMPForgettPassComponent,
    
    
  ],
  imports: [
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgwWowModule,
    BrowserAnimationsModule,
    CarouselModule,
    ShowHidePasswordModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CommonModule,
    MatSelectModule,
    MatFormFieldModule
     
    


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
