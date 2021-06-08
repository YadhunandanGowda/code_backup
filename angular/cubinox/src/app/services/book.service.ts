import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Author } from '../model/author';
import { Book } from '../model/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private authorBaseURL = 'http://localhost:8080/authors';
  private bookBaseURL = 'http://localhost:8080/books';

  private headers = new HttpHeaders({ 'Content-type': 'application/json' });
  private options = { headers: this.headers };

  constructor(private http: HttpClient) { }

  // Author service methods

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorBaseURL + '/', this.options);
  }

  getAuthorById(authorId: number): Observable<Author> {
    return this.http.get<Author>(this.authorBaseURL + '/' + authorId, this.options);
  }

  addAuthor(author: Author): Observable<Author> {
    console.log(author);

     return this.http.post<Author>(this.authorBaseURL + '/' , JSON.stringify(author), this.options);
  }

  updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(this.authorBaseURL + '/' + author.authorId, JSON.stringify(author), this.options);
  }

  deleteAuthor(authorId: number) {
    return this.http.delete(this.authorBaseURL + '/' + authorId, this.options);
  }

  // Book Service methods

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookBaseURL);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookBaseURL + '/' + id, this.options);
  }

  postBook(book): Observable<Book> {
    return this.http.post<Book>(this.bookBaseURL + '/', JSON.stringify(book), this.options);
  }

  putBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.bookBaseURL + '/' + book.bookId, JSON.stringify(book), this.options);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.bookBaseURL + '/' + id, this.options);
  }

}
