import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { BookService } from './services/book.service';
import { AppComponent } from './app.component';
import { AuthorFormComponent } from './components/author/author-form/author-form.component';
import { UpdateAuthorComponent } from './components/author/update-author/update-author.component';
import { ListAuthorComponent } from './components/author/list-author/list-author.component';
import { AuthorDetailsComponent } from './components/author/author-details/author-details.component';
import { ErrorComponent } from './components/error/error.component';
import { AddBookComponent } from './components/bookComponents/add-book/add-book.component';
import { BookDetailsComponent } from './components/bookComponents/book-details/book-details.component';
import { EditBookComponent } from './components/bookComponents/edit-book/edit-book.component';
import { ListBookComponent } from './components/bookComponents/list-book/list-book.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorFormComponent,
    UpdateAuthorComponent,
    ListAuthorComponent,
    AuthorDetailsComponent,
    ErrorComponent,
    AddBookComponent,
    BookDetailsComponent,
    EditBookComponent,
    ListBookComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [BookService, AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
    // {provide : ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
