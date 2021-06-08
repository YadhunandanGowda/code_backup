import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorDetailsComponent } from './components/author/author-details/author-details.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthorFormComponent } from './components/author/author-form/author-form.component';
import { UpdateAuthorComponent } from './components/author/update-author/update-author.component';
import { ListAuthorComponent } from './components/author/list-author/list-author.component';
import { ListBookComponent } from './components/bookComponents/list-book/list-book.component';
import { EditBookComponent } from './components/bookComponents/edit-book/edit-book.component';
import { BookDetailsComponent } from './components/bookComponents/book-details/book-details.component';
import { AddBookComponent } from './components/bookComponents/add-book/add-book.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'addAuthor', component: AuthorFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editAuthor/:authorId', component: UpdateAuthorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listAuthor', component: ListAuthorComponent,
    canActivate: [AuthGuard]
  },
  { path: 'error/:id', component: ErrorComponent },
  {
    path: 'authorDetails/:authorId', component: AuthorDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editBook/:bookId', component: EditBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listBook', component: ListBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listBook/:bookId', component: BookDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addBook', component: AddBookComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
