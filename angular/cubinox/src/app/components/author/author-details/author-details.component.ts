import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { BookService } from './../../../services/book.service';
import { Author } from './../../../model/author';


@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  public author: Author;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const index = parseInt(params.get('authorId'), 0);
      this.bookService.getAuthorById(index)
        .subscribe(data => this.author = data);
    }, (error) => {
      console.error(error);
      this.router.navigate(['/error' , error.status]);
    });
  }

}
