import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { EmailService } from './email.service';
import { StartComponent } from './start/start.component';
import { ResumePipe } from './resume.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { FollowersComponent } from './followers/followers.component';
import {RouterModule,Routes, Router} from '@angular/router';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FollowersIDComponent } from './followers-id/followers-id.component';

const routes : Routes = [
  {
    path:"post", 
    component:PostComponent
  },
  {
    path:"followers", 
    component:FollowersComponent
  },
  {
    path:"followers-id/:username", 
    component:FollowersIDComponent
  },
  {
    path:"**", 
    component:PagenotFoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    StartComponent,
    ResumePipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostComponent,
    FollowersComponent,
    PagenotFoundComponent,
    NavbarComponent,
    FollowersIDComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CoursesService,EmailService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
