import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from './../../../services/book.service';
import { Author } from './../../../model/author';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent {

  constructor(private bookService: BookService,
    private router: Router) { }

  public author: Author = new Author(0, '', '', '', '', '', new User(0, '', ''));
  public genderType = ['male', 'female', 'others'];

  onSubmit() {
    this.bookService.addAuthor(this.author).subscribe(() => {
      this.router.navigate(['/listAuthor']);
    }, (error) => {
      console.error(error);
      this.router.navigate(['/error' , error.status]);
    });
  }

}
