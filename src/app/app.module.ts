import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './enithy/components/home/home.component';
import { UsersComponent } from './enithy/components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleUserComponent } from './enithy/components/single-user/single-user.component';
import { PostsComponent } from './enithy/components/posts/posts.component';
import { SinglePostComponent } from './enithy/components/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    SingleUserComponent,
    PostsComponent,
    SinglePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
