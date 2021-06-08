import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  public books: Book[] = [];
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
      this.books.sort(function(a, b) {
        return a.bookId - b.bookId;
      });
    },
    (error) => {
      console.error(error);
      this.router.navigate(['/error' , error.status]);
    });
  }

  editBook(id: number) {
    this.router.navigate(['/editBook', id]);
  }

  bookDetails(id: number) {
    this.router.navigate(['/listBook', id]);
  }

  bookDelete(id: number, i: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books.splice(i, 1);
    }, (error) => {
      console.error(error);
    this.router.navigate(['/error' , error.status]);
    });
  }

}
