import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { Author } from 'src/app/model/author';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements  OnInit {

  public book: Book = new Book(0, '', '', [], '', new User(0, '', ''));
  public authors: Author[] = [];

  constructor(private bookService: BookService,
    private router: Router) { }

    ngOnInit() {
      this.bookService.getAuthors().subscribe((data) => {
        this.authors = data;
        this.authors.sort(function (a, b) {
          return a.authorId - b.authorId;
        });
      }, (error) => {
        console.error(error);
      this.router.navigate(['/error' , error.status]);
      });
    }
  addBook() {
    this.bookService.postBook(this.book).subscribe(() => {
      this.router.navigate(['/listBook']);
    }, (error) => {
      console.error(error);
    this.router.navigate(['/error' , error.status]);
    });
  }

}
