import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { Author } from 'src/app/model/author';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  public book: Book;
  public id: number;
  public authors: Author[] = [];

  constructor(private bookService: BookService,
    private router: Router,
    private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.aroute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('bookId'), 0);
      this.bookService.getBookById(this.id).subscribe(data => this.book = data);
    });
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
    this.bookService.putBook(this.book).subscribe(() =>
      this.router.navigate(['/listBook']
      ), (error) => {
        console.error(error);
      this.router.navigate(['/error' , error.status]);
      });
  }

}
