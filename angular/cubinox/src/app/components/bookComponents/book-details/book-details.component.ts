import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public book: Book;
  constructor(private bookService: BookService,
    private router: Router,
    private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.aroute.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('bookId'), 0);
      this.bookService.getBookById(id)
      .subscribe(data => this.book = data);
    }, (error) => {
      console.error(error);
    this.router.navigate(['/error' , error.status]);
    });
  }
  authorDetails(authorId: number) {
    this.router.navigate(['/authorDetails', authorId]);
  }
}
