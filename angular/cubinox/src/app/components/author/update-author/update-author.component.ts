import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Author } from './../../../model/author';
import { BookService } from './../../../services/book.service';


@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  public author: Author;
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const index = parseInt(params.get('authorId'), 0);
      this.bookService.getAuthorById(index)
        .subscribe(author => this.author = author);
    }, (error) => {
      console.error(error);
      this.router.navigate(['/error']);
    });
  }

  update() {
    this.bookService.updateAuthor(this.author).subscribe(() => {
      this.router.navigate(['/listAuthor']);
    }, (error) => {
      console.error(error);
      this.router.navigate(['/error' , error.status]);
    });
  }
}
