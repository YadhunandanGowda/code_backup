import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Author } from './../../../model/author';
import { BookService } from './../../../services/book.service';


@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {

  public authors: Author[] = [];

  constructor(private bookService: BookService,
    private router: Router) { }
    public cannotDelete: Boolean;


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

  addNew() {
    this.router.navigate(['/addAuthor']);
  }

  detail(authorId: number) {
    this.router.navigate(['/authorDetails', authorId]);
  }

  edit(authorId: number) {
    this.router.navigate(['/editAuthor', authorId]);
  }

  delete(authorId: number, index: number) {
    this.bookService.deleteAuthor(authorId).subscribe(() => {
      this.authors.splice(index, 1);
    }, (error) => {

      if (error.error.message) {
        this.cannotDelete = true;
        setTimeout(() => {
          this.cannotDelete = false;
        }, 3000);
      }
      console.error(error.error.message);
    });
  }
}

